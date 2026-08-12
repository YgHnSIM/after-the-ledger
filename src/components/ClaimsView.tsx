import React, { useState } from 'react';
import { CLAIMS } from '../data/claims';
import { CIVILIZATIONS } from '../data/civilizations';
import { ConfidenceLevel, CivilizationId } from '../types';
import { ShieldCheck, CheckCircle2, XCircle, HelpCircle, Users, Scroll, Calendar, Filter } from 'lucide-react';

export const ClaimsView: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<ConfidenceLevel | 'all'>('all');
  const [civFilter, setCivFilter] = useState<CivilizationId | 'all'>('all');

  const filteredClaims = CLAIMS.filter((c) => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (civFilter !== 'all' && c.civilization !== civFilter) return false;
    return true;
  });

  return (
    <div className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">학술 주장 및 가설 판정 카드 (Academic Claims)</h1>
        <p className="section-subtitle">
          고대 문자문화사의 주요 주장들에 대해 근거, 반례, 학계 합의 수준을 시각적으로 판정합니다.
        </p>

        {/* FILTERS */}
        <div className="card" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', background: 'var(--bg-surface)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={16} style={{ color: 'var(--text-muted)' }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>판정 상태:</span>
          </div>

          <button
            className={`btn btn-sm ${statusFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setStatusFilter('all')}
          >
            전체 ({CLAIMS.length})
          </button>
          <button
            className={`status-badge status-debated ${statusFilter === 'debated' ? 'active' : ''}`}
            onClick={() => setStatusFilter(statusFilter === 'debated' ? 'all' : 'debated')}
            style={{ cursor: 'pointer', padding: '0.35rem 0.75rem' }}
          >
            논쟁 중 (Debated)
          </button>
          <button
            className={`status-badge status-sure ${statusFilter === 'sure' ? 'active' : ''}`}
            onClick={() => setStatusFilter(statusFilter === 'sure' ? 'all' : 'sure')}
            style={{ cursor: 'pointer', padding: '0.35rem 0.75rem' }}
          >
            확실 (Sure)
          </button>
          <button
            className={`status-badge status-unknown ${statusFilter === 'unknown' ? 'active' : ''}`}
            onClick={() => setStatusFilter(statusFilter === 'unknown' ? 'all' : 'unknown')}
            style={{ cursor: 'pointer', padding: '0.35rem 0.75rem' }}
          >
            알 수 없음 / 오해 경계
          </button>

          <div style={{ marginLeft: 'auto' }}>
            <select
              value={civFilter}
              onChange={(e) => setCivFilter(e.target.value as CivilizationId | 'all')}
              style={{ padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '0.85rem' }}
            >
              <option value="all">모든 문명</option>
              {Object.values(CIVILIZATIONS).map((c) => (
                <option key={c.id} value={c.id}>{c.nameKo}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* CLAIMS CARDS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredClaims.map((claim) => {
          const civInfo = CIVILIZATIONS[claim.civilization];
          return (
            <div
              key={claim.id}
              className="card"
              style={{
                borderLeft: `5px solid ${
                  claim.status === 'sure'
                    ? '#137333'
                    : claim.status === 'debated'
                    ? '#b45309'
                    : claim.status === 'likely'
                    ? '#0369a1'
                    : '#475569'
                }`,
                background: 'var(--bg-surface)'
              }}
            >
              {/* CARD HEADER */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <span className={`civ-tag civ-${claim.civilization}`} style={{ marginRight: '0.5rem' }}>
                    {civInfo?.nameKo}
                  </span>
                  <span className={`status-badge status-${claim.status}`}>
                    상태: {claim.statusLabel}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={13} /> 검토일: {claim.lastReviewed}
                </div>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {claim.claimTitle}
              </h2>

              {/* CONSENSUS VISUAL BAR */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  <span>지지 증거 ({claim.supportingEvidence.length}건)</span>
                  <span>학계 판정: {claim.statusLabel}</span>
                  <span>반대 증거 ({claim.counterEvidence.length}건)</span>
                </div>
                <div style={{ height: '8px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: claim.status === 'sure' ? '85%' : claim.status === 'likely' ? '70%' : claim.status === 'debated' ? '50%' : '30%', background: claim.status === 'sure' ? '#10b981' : claim.status === 'likely' ? '#0284c7' : claim.status === 'debated' ? '#f59e0b' : '#64748b', height: '100%' }} />
                  <div style={{ flex: 1, background: 'rgba(0,0,0,0.1)', height: '100%' }} />
                </div>
              </div>

              <blockquote
                style={{
                  fontSize: '1.15rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--text-primary)',
                  background: 'var(--bg-surface-elevated)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--civ-mesopotamia)',
                  marginBottom: '1.25rem',
                  margin: '0 0 1.25rem 0',
                  lineHeight: 1.6
                }}
              >
                “{claim.claimSentence}”
              </blockquote>

              {/* TWO COLUMN EVIDENCE GRID */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                {/* SUPPORTING EVIDENCE */}
                <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#137333', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={16} /> 지지 증거 (Supporting Evidence)
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {claim.supportingEvidence.map((ev, idx) => (
                      <li key={idx} style={{ marginBottom: '0.4rem', paddingLeft: '0.75rem', position: 'relative' }}>
                        • {ev}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COUNTER EVIDENCE */}
                <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#b45309', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                    <XCircle size={16} /> 반대 증거 및 문제점 (Counter Evidence)
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {claim.counterEvidence.map((ev, idx) => (
                      <li key={idx} style={{ marginBottom: '0.4rem', paddingLeft: '0.75rem', position: 'relative' }}>
                        • {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ALTERNATIVE EXPLANATIONS */}
              {claim.alternativeExplanations.length > 0 && (
                <div style={{ marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <strong>대안 학술 설명:</strong> {claim.alternativeExplanations.join(' ')}
                </div>
              )}

              {/* RESEARCHERS & SOURCES */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Users size={14} /> <strong>핵심 연구자:</strong> {claim.keyResearchers.join(', ')}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Scroll size={14} /> <strong>1차 근거 자료:</strong> {claim.primarySources.join(' • ')}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

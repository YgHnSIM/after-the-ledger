import React, { useState } from 'react';
import { COMPARATIVE_ESSAYS } from '../data/essays';
import { CIVILIZATIONS } from '../data/civilizations';
import { BookOpen, CheckCircle2, ArrowRight, Share2, Feather } from 'lucide-react';

interface ThemesViewProps {
  initialEssayId?: string;
}

export const ThemesView: React.FC<ThemesViewProps> = ({ initialEssayId }) => {
  const [activeEssayId, setActiveEssayId] = useState<string>(
    initialEssayId || COMPARATIVE_ESSAYS[0].id
  );

  const currentEssay =
    COMPARATIVE_ESSAYS.find((e) => e.id === activeEssayId) || COMPARATIVE_ESSAYS[0];

  return (
    <div className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">고대 문자문화 8대 연구 에세이</h1>
        <p className="section-subtitle">
          회계, 분류 목록, 왕권 제의, 호메로스 정서, 성서 전승, 보존 편향, 우가리트 통제 사례를 관통하는 비교 논문 집성입니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '2rem' }}>
        {/* ESSAY LIST SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {COMPARATIVE_ESSAYS.map((essay) => {
            const isActive = essay.id === activeEssayId;
            return (
              <div
                key={essay.id}
                className={`card ${isActive ? 'card-hover' : ''}`}
                onClick={() => setActiveEssayId(essay.id)}
                style={{
                  cursor: 'pointer',
                  padding: '1rem',
                  background: isActive ? 'var(--bg-surface)' : 'var(--bg-card)',
                  borderColor: isActive ? 'var(--text-primary)' : 'var(--border-color)',
                  borderLeft: isActive ? '4px solid var(--text-primary)' : '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.2rem' }}>
                  ESSAY {essay.order}
                </div>
                <div style={{ fontWeight: isActive ? 700 : 600, fontSize: '0.95rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
                  {essay.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {essay.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* ESSAY READER CONTENT */}
        <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-surface)' }}>
          {/* HEADER */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {currentEssay.civilizationsDiscussed.map((cId) => (
                  <span key={cId} className={`civ-tag civ-${cId}`}>
                    {CIVILIZATIONS[cId]?.nameKo}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-cinzel)', fontWeight: 600 }}>
                ESSAY {currentEssay.order} • 약 4분 읽기
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '0.5rem', lineHeight: 1.25 }}>
              {currentEssay.title}
            </h1>
            <div style={{ fontSize: '1.18rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
              {currentEssay.subtitle}
            </div>
          </div>

          {/* KEY TAKEAWAYS BOX */}
          <div
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-color)',
              padding: '1.35rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div className="font-cinzel" style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
              핵심 연구 요약 (Key Takeaways)
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {currentEssay.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.45rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--civ-mesopotamia)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ESSAY BODY TEXT WITH DROP CAP */}
          <article className="drop-cap" style={{ fontSize: '1.08rem', lineHeight: 1.85, color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
            {currentEssay.content}
          </article>
        </div>
      </div>
    </div>
  );
};

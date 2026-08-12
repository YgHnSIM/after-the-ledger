import React from 'react';
import { SCRIBAL_INSTITUTIONS } from '../data/institutions';
import { CIVILIZATIONS } from '../data/civilizations';
import { GraduationCap, BookOpen, Scroll, Award, CheckCircle2 } from 'lucide-react';

export const InstitutionsView: React.FC = () => {
  return (
    <div className="main-container">
      {/* HEADER */}
      <section style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-surface-elevated)', padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          <GraduationCap size={15} style={{ color: 'var(--civ-mesopotamia)' }} />
          <span className="font-cinzel">SCRIBAL INSTITUTIONS & KNOWLEDGE PRODUCTION</span>
        </div>
        <h1 className="section-title">
          <span className="title-phrase">서기관 교육 및 </span>{' '}
          <span className="title-phrase">지식 생산 제도 (Scribal Institutions)</span>
        </h1>
        <p className="section-subtitle">
          <span className="title-phrase">고대 문자의 쓰임새를 결정지은 것은 부호의 단순함(알파벳 여부)이 아니라, </span>{' '}
          <span className="title-phrase">서기관을 교육하고 관리한 <strong>국가·신전의 제도(Institutions)</strong>였습니다. </span>{' '}
          <span className="title-phrase">문명별 {SCRIBAL_INSTITUTIONS.length}대 기록 생산 제도를 대조합니다.</span>
        </p>
      </section>

      {/* INSTITUTION CARDS LIST */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {SCRIBAL_INSTITUTIONS.map((inst) => {
          const civInfo = CIVILIZATIONS[inst.civilization];
          return (
            <div
              key={inst.id}
              className="card"
              style={{
                borderTop: `4px solid ${civInfo?.accentColor || 'var(--civ-mesopotamia)'}`,
                background: 'var(--bg-surface)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className={`civ-tag civ-${inst.civilization}`}>
                    {civInfo?.nameKo}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-cinzel)', fontWeight: 600 }}>
                    {inst.periodBCE}
                  </span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.25rem' }}>
                  {inst.nameKo}
                </h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1rem', fontFamily: 'monospace' }}>
                  {inst.nameNative} • {inst.primaryLocation}
                </div>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {inst.description}
                </p>

                {/* CURRICULUM LIST */}
                <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <BookOpen size={14} style={{ color: civInfo?.accentColor }} />
                    <span>서기관 커리큘럼 및 수련 항목</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem' }}>
                    {inst.curriculum.map((curr, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={13} style={{ color: civInfo?.accentColor, marginTop: '3px', flexShrink: 0 }} />
                        <span>{curr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* HISTORICAL IMPACT */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '0.5rem', fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>문문화사적 의의:</strong> {inst.historicalImpact}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { GREEK_DIALECT_EXAMPLES, SCRIPT_GENEALOGY } from '../data/greekDialects';
import { Feather, ArrowRight, Layers, HelpCircle } from 'lucide-react';

export const GreekLanguageView: React.FC = () => {
  return (
    <div className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">그리스 방언 & 문자 계통 탐구 (Greek Dialects & Script Genealogy)</h1>
        <p className="section-subtitle">
          호메로스 서사시 방언, 고전 아티카어, 헬레니즘 코이네어 텍스트 비교와 아브자드에서 알파벳으로의 진화를 대조합니다.
        </p>
      </div>

      {/* SECTION 1: GREEK DIALECT COMPARISON MATRIX */}
      <section className="card" style={{ marginBottom: '3rem', background: 'var(--bg-surface)' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          1. 미케네 Linear B — 호메로스어 — 아티카어 — 코이네 텍스트 비교
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
          그리스 문자문화의 역사 속에서 동일한 개념과 단어가 시대별로 어떻게 표기되었는지 비교합니다.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface-elevated)', borderBottom: '2px solid var(--border-color)' }}>
                <th style={{ padding: '0.75rem 1rem' }}>개념 / 의미</th>
                <th style={{ padding: '0.75rem 1rem' }}>Linear B (c. 1300 BCE)</th>
                <th style={{ padding: '0.75rem 1rem' }}>호메로스 그리스어 (c. 750 BCE)</th>
                <th style={{ padding: '0.75rem 1rem' }}>고전 아티카어 (c. 450 BCE)</th>
                <th style={{ padding: '0.75rem 1rem' }}>헬레니즘 코이네 (c. 100 BCE)</th>
              </tr>
            </thead>
            <tbody>
              {GREEK_DIALECT_EXAMPLES.map((ex) => (
                <tr key={ex.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem', fontWeight: 700 }}>
                    <div>{ex.phraseConcept}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}>{ex.koreanTranslation}</div>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--civ-greece)', fontWeight: 600 }}>{ex.mycenaeanLinearB}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{ex.homericGreek}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{ex.archaicClassicalAttic}</td>
                  <td style={{ padding: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{ex.hellenisticKoine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* GRAMMATICAL & CULTURAL INSIGHTS */}
        <div style={{ marginTop: '1.5rem', background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.5rem' }}>언어 및 문화적 진화 해석</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {GREEK_DIALECT_EXAMPLES.map((ex) => (
              <li key={ex.id} style={{ marginBottom: '0.35rem' }}>
                • <strong>{ex.phraseConcept}:</strong> {ex.grammaticalNotes}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 2: SCRIPT GENEALOGY (ABJAD TO ALPHABET) */}
      <section className="card" style={{ background: 'var(--bg-surface)' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          2. 페니키아 아브자드에서 알파벳으로의 계통도 (Script Genealogy)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
          자음 전용 표기에서 자음+모음 완전 표기로의 혁명적 진화 경로를 보여줍니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {SCRIPT_GENEALOGY.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                background: 'var(--bg-surface-elevated)',
                padding: '1rem',
                borderTop: '3px solid var(--civ-greece)',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.2rem' }}>
                {item.era}
              </div>
              <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>
                {item.name}
              </h4>
              <div style={{ fontSize: '0.8rem', color: 'var(--civ-greece)', fontWeight: 600, marginBottom: '0.35rem' }}>
                {item.type}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                지역: {item.region}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Compass, Scale, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-surface)',
        padding: '3rem 2rem 2rem 2rem',
        marginTop: '4rem',
        color: 'var(--text-secondary)',
        fontSize: '0.88rem'
      }}
    >
      <div className="main-container" style={{ padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              장부 이후 (After the Ledger)
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>
              고대 문명에서 문자가 등장하거나 새로운 문자체계가 도입된 뒤, 인간은 경제·행정 기록을 넘어 무엇을 대규모로 기록하기 시작했는가를 탐구하는 고대 문자문화 비교 연구 아틀라스.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '0.75rem' }}>주요 연구 탐색</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li><button onClick={() => onSelectTab('compare')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>동기화 타임라인 비교</button></li>
              <li><button onClick={() => onSelectTab('civilizations')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>네 문명 & 우가리트 서사</button></li>
              <li><button onClick={() => onSelectTab('claims')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>학술 가설 판정 카드</button></li>
              <li><button onClick={() => onSelectTab('themes')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>8대 비교 에세이 집성</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '0.75rem' }}>학술 원칙 & 출처</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li><button onClick={() => onSelectTab('methodology')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>4가지 텍스트 단위 & 4가지 연대 벡터</button></li>
              <li><button onClick={() => onSelectTab('sources')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>Grade A/B 출처 (DCCLT, CDLI, IAA, UCL)</button></li>
              <li><button onClick={() => onSelectTab('greek')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>그리스 방언 & 문자 계통도</button></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div>
            © 2026 장부 이후 — 고대 문자문화 비교 연구 아틀라스. All academic data sourced under CC BY-SA 4.0 / Public Domain.
          </div>
          <div>
            최종 검토 및 데이터 업데이트: 2026-08-12
          </div>
        </div>
      </div>
    </footer>
  );
};

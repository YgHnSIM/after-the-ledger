import React from 'react';
import { Scale, ShieldCheck, Clock, Layers, Scroll, AlertTriangle } from 'lucide-react';
import { PRESERVATION_BIAS_DATA } from '../data/essays';

export const MethodologyView: React.FC = () => {
  return (
    <div className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">연구 방법론 & 보존 편향 한계 (Methodology)</h1>
        <p className="section-subtitle">
          본 아틀라스의 학술적 정의, 비교 단위, 연대 벡터, 고고학적 보존 편향 통제 원칙을 밝힙니다.
        </p>
      </div>

      {/* SECTION 1: 4 TEXT UNITS */}
      <section className="card" style={{ marginBottom: '2rem', background: 'var(--bg-surface)' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          1. 텍스트 비교 4대 범주 (Four Text Units)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
          “거대한 텍스트”를 하나의 수치로 묶지 않고 4가지 범주로 나누어 비교합니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--civ-greece)', marginBottom: '0.35rem' }}>1. 단일 작품 (Single Work)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              《일리아스》, 《길가메시 서사시》, 《바알 서사시》처럼 하나의 통일된 저작이나 이야기 단위로 인식되는 문학 텍스트.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--civ-egypt)', marginBottom: '0.35rem' }}>2. 문헌 집성체 (Text Collection)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              피라미드 텍스트, 관 텍스트, 엔헤두안나 찬가처럼 여러 독립된 주문이나 찬가 단위가 모인 집합체.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--civ-mesopotamia)', marginBottom: '0.35rem' }}>3. 문서군·코퍼스 (Site Corpus)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              우루크 점토판 아카이브, 필로스 Linear B 문서군, 메토네 비문처럼 특정 장소나 출토지 문서 전체.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--civ-israel)', marginBottom: '0.35rem' }}>4. 전승 전통 (Transmission Tradition)</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              히브리 성서 사본 계통, 바빌로니아 어휘목록 복제처럼 여러 세대의 복사·편집을 거친 지식 전통.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 DATES VECTOR */}
      <section className="card" style={{ marginBottom: '2rem', background: 'var(--bg-surface)' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          2. 성서 및 문헌의 4중 연대 벡터 (The 4 Dates Vector)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
          성서 및 고대 텍스트 레코드에는 4 종류의 서로 다른 연대가 존재하며 이를 구별해야 오류를 막을 수 있습니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
          <div style={{ borderLeft: '3px solid #137333', paddingLeft: '0.75rem' }}>
            <strong>1. 사건 연대 (Event Date):</strong> 텍스트가 서술하는 역사적 시대 (e.g. 출애굽 사건, 트로이 전쟁 추정 시기)
          </div>
          <div style={{ borderLeft: '3px solid #0369a1', paddingLeft: '0.75rem' }}>
            <strong>2. 구성 연대 (Composition Date):</strong> 구전이나 최초 구성이 노래나 시로 만들어진 시기
          </div>
          <div style={{ borderLeft: '3px solid #b45309', paddingLeft: '0.75rem' }}>
            <strong>3. 편집 연대 (Redaction Date):</strong> 오경 사제나 알렉산드리아 학자가 정본으로 편집·합친 시기
          </div>
          <div style={{ borderLeft: '3px solid #7e22ce', paddingLeft: '0.75rem' }}>
            <strong>4. 사본 제작 연대 (Witness Date):</strong> 오늘날 우리가 만질 수 있는 물리적 유물(케테프 힌놈 은판, 사해문서) 제작 연대
          </div>
        </div>
      </section>

      {/* SECTION 3: PRESERVATION BIAS MATRIX */}
      <section className="card" style={{ marginBottom: '2rem', background: 'var(--bg-surface)' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          3. 고고학적 보존 편향 매트릭스 (Preservation Bias Matrix)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
          각 기록 매체의 물리적 특성과 토양 환경에 따라 생존율이 달라지므로 출토 수량을 당대 작성량과 직접 등가 처리하지 않습니다.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface-elevated)', borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem' }}>기록 매체</th>
                <th style={{ padding: '0.75rem' }}>보존 생존율</th>
                <th style={{ padding: '0.75rem' }}>유리한 환경</th>
                <th style={{ padding: '0.75rem' }}>파괴 조건</th>
                <th style={{ padding: '0.75rem' }}>역설적 보존 사례</th>
              </tr>
            </thead>
            <tbody>
              {PRESERVATION_BIAS_DATA.map((pb, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 700 }}>{pb.material}</td>
                  <td style={{ padding: '0.75rem' }}>{pb.survivalRate}</td>
                  <td style={{ padding: '0.75rem' }}>{pb.favorableConditions}</td>
                  <td style={{ padding: '0.75rem' }}>{pb.destructiveConditions}</td>
                  <td style={{ padding: '0.75rem', fontStyle: 'italic' }}>{pb.paradoxExample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: SOURCE GRADING HIERARCHY */}
      <section className="card" style={{ background: 'var(--bg-surface)' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          4. 출처 등급 체계 (Source Hierarchy)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem', fontSize: '0.88rem' }}>
          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <span className="status-badge status-sure" style={{ marginBottom: '0.35rem' }}>Grade A</span>
            <div style={{ fontWeight: 700, margin: '0.2rem 0' }}>유물 소장기관 / 코퍼스 DB</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>CDLI, DCCLT, ETCSL, 이스라엘 고고학청 사해문서 DB, 대영박물관, 루브르 소장 유물.</p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <span className="status-badge status-likely" style={{ marginBottom: '0.35rem' }}>Grade B</span>
            <div style={{ fontWeight: 700, margin: '0.2rem 0' }}>동료평가 논문 및 단행본</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>Cambridge Univ Press, Antiquity, Oxford Studies, Harvard Semitic Studies 학술서.</p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <span className="status-badge status-debated" style={{ marginBottom: '0.35rem' }}>Grade C</span>
            <div style={{ fontWeight: 700, margin: '0.2rem 0' }}>대학·박물관 학술 해설</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>UCL Digital Egypt, Penn Museum 전시 해설, 이스라엘 박물관 컬렉션 설명.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

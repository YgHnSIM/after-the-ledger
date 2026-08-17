import React, { useState } from 'react';
import { CIVILIZATIONS } from '../data/civilizations';
import { ARTIFACTS } from '../data/artifacts';
import { CivilizationId } from '../types';
import { Globe, Scroll, BookOpen, Layers, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';

interface CivilizationDetailViewProps {
  initialCivId?: CivilizationId;
  onNavigateArtifact?: (id: string) => void;
}

export const CivilizationDetailView: React.FC<CivilizationDetailViewProps> = ({
  initialCivId = 'mesopotamia',
  onNavigateArtifact
}) => {
  const [activeCivId, setActiveCivId] = useState<CivilizationId>(initialCivId);

  const currentCiv = CIVILIZATIONS[activeCivId] || CIVILIZATIONS['mesopotamia'];
  const civArtifacts = ARTIFACTS.filter((a) => a.civilization === activeCivId);

  return (
    <div className="main-container">
      {/* CIV SELECTION TABS */}
      <div className="tabs-header" style={{ marginBottom: '2rem' }}>
        {Object.values(CIVILIZATIONS).map((civ) => (
          <button
            key={civ.id}
            className={`tab-btn ${activeCivId === civ.id ? 'active' : ''}`}
            onClick={() => setActiveCivId(civ.id as CivilizationId)}
            style={{
              borderBottomColor: activeCivId === civ.id ? civ.accentColor : 'transparent',
              fontWeight: activeCivId === civ.id ? 700 : 500
            }}
          >
            {civ.nameKo}
          </button>
        ))}
      </div>

      {/* CIV HEADER BANNER */}
      <div
        className="card"
        style={{
          marginBottom: '2rem',
          borderLeft: `6px solid ${currentCiv.accentColor}`,
          background: 'var(--bg-surface)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className={`civ-tag civ-${currentCiv.id}`}>{currentCiv.nameKo}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{currentCiv.scriptName}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
              {currentCiv.nameKo} 문자문화 서사 (Narrative)
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontStyle: 'italic', maxWidth: '800px' }}>
              “{currentCiv.oneSentenceSummary}”
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
            <div><strong>문자 도입:</strong> c. {currentCiv.scriptEmergenceBCE} BCE</div>
            <div><strong>주요 매체:</strong> {currentCiv.primaryMedia}</div>
            <div><strong>고유 차별점:</strong> {currentCiv.differentiator}</div>
          </div>
        </div>
      </div>

      {/* TWO COLUMN CONTENT: DEEP NARRATIVE & STAGES */}
      <div className="grid-responsive-2col" style={{ marginBottom: '3rem' }}>

        {/* NARRATIVE MAIN COLUMN */}
        <div>
          <section className="card" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              핵심 연구 질문: {currentCiv.keyQuestion}
            </h2>
            <div style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
              {currentCiv.overviewNarrative}
            </div>
          </section>

          {/* KEY DISCOVERIES & EVIDENCE */}
          <section className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              주요 고고학 발굴 증거 (Key Discoveries)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {currentCiv.keyDiscoveries.map((disc, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.65rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: currentCiv.accentColor, marginTop: '3px', flexShrink: 0 }} />
                  <span>{disc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CIV SPECIFIC DEEP DIVE NOTES */}
          {activeCivId === 'mesopotamia' && (
            <section className="card" style={{ background: 'var(--bg-surface-elevated)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--civ-mesopotamia)' }}>
                DCCLT (Digital Corpus of Cuneiform Lexical Texts) 분석 노트
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                수메르 쐐기문자 데이터베이스 분석은 회계 점토판과 표준 직업목록(ED Lu A)이 완전히 동일한 우루크 IV 층위에서 발굴되었음을 입증한다. 서기관들은 단순한 재산 관리를 넘어 세상을 규칙화하고 분류하는 관료적 지성으로 문자를 시작했다.
              </p>
            </section>
          )}

          {activeCivId === 'egypt' && (
            <section className="card" style={{ background: 'var(--bg-surface-elevated)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--civ-egypt)' }}>
                피라미드 텍스트 → 관 텍스트 → 사자의 서 파피루스 진화론
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                고왕국 우나스 피라미드 내벽에 새겨진 성각문자는 오직 파라오 영생을 위한 주문이었다. 이 텍스트는 중왕국 귀족의 목제 관 내부(Coffin Texts)로 이동하고, 신왕국 파피루스 사자의 서(Book of the Dead)로 대중화되며 1,500년에 걸쳐 매체와 이용 주체를 확장시켰다.
              </p>
            </section>
          )}

          {activeCivId === 'greece' && (
            <section className="card" style={{ background: 'var(--bg-surface-elevated)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--civ-greece)' }}>
                Linear B 궁전 파괴와 400년 암흑기 후의 알파벳 재출현
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                BCE 1200년 필로스 궁전 화재 시 Linear B 문해력은 전면 소멸했다. BCE 8세기 새로 수용된 그리스 알파벳은 장부가 아니라 디필론 암포라와 네스토르의 잔처럼 시적 유희, 음주 향연, 개인 소유 표기로 극적 반등했다.
              </p>
            </section>
          )}

          {activeCivId === 'israel-judah' && (
            <section className="card" style={{ background: 'var(--bg-surface-elevated)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--civ-israel)' }}>
                사공편집(사건·구성·편집·사본) 4가지 연대 벡터 분리
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                케테프 힌놈 은제 부적(c. 600 BCE)은 민수기 축복문 구절이 새겨진 최고(最古) 사본이나 성서 전집이 아니다. 쿰란 사해문서(230여 성서 사본)는 고대 이스라엘이 하나의 고정된 원본이 아닌 유연한 정경 이본 문화를 유지했음을 입증한다.
              </p>
            </section>
          )}

          {activeCivId === 'ugarit' && (
            <section className="card" style={{ background: 'var(--bg-surface-elevated)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--civ-ugarit)' }}>
                연구 통제 사례 (Control Case) — 문자 구조보다 제도의 우위
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                우가리트 사람들은 30개 기호의 알파벳 쐐기문자를 발명했음에도, 외교와 국제 협정에는 수백 개 기호의 아카드 음절 쐐기문자를 사용했다. 단순한 문자 구조가 장르를 결정짓는 것이 아니라, 언어와 외교 제도가 문자의 쓰임새를 지배한다.
              </p>
            </section>
          )}
        </div>

        {/* SIDEBAR: STAGES & ARTIFACTS LIST */}
        <div>
          {/* 5 DEVELOPMENT STAGES */}
          <section className="card" style={{ marginBottom: '1.5rem', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              문자문화 5단계 발전 과정
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {currentCiv.stages.map((stg) => (
                <div key={stg.stage} style={{ borderLeft: `3px solid ${currentCiv.accentColor}`, paddingLeft: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <span>단계 {stg.stage}</span>
                    <span>{stg.bcePeriod}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.2rem' }}>
                    {stg.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {stg.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ARTIFACTS IN THIS CIV */}
          <section className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
              소속 대표 유물 ({civArtifacts.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {civArtifacts.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onNavigateArtifact && onNavigateArtifact(art.id)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    background: 'var(--bg-surface-elevated)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{art.titleKo}</span>
                  <ArrowRight size={12} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

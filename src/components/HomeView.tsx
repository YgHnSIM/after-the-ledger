import React, { useState } from 'react';
import { CIVILIZATIONS } from '../data/civilizations';
import { COMPARATIVE_ESSAYS } from '../data/essays';
import { ArrowRight, Clock, ShieldCheck, Scale, Scroll, BookOpen, Sparkles, HelpCircle } from 'lucide-react';

interface HomeViewProps {
  onNavigateTab: (tab: string, param?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateTab }) => {
  const [timeMode, setTimeMode] = useState<'absolute' | 'relative'>('absolute');

  const civList = Object.values(CIVILIZATIONS);

  return (
    <div className="main-container">
      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', margin: '1.5rem 0 3.5rem 0' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-highlight)',
            padding: '0.4rem 1.1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Sparkles size={14} style={{ color: 'var(--civ-mesopotamia)' }} />
          <span className="font-cinzel">EXHIBITION ATLAS • ANCIENT COMPARATIVE EPIGRAPHY</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: '3.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)', maxWidth: '1020px', margin: '0 auto 1.25rem auto', letterSpacing: '-0.025em', fontWeight: 700 }}>
          <span className="title-phrase">장부 이후 — </span>{' '}
          <span className="title-phrase">고대 문명은 무엇을 기록하기 시작했는가?</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '840px', margin: '0 auto 2.25rem auto', lineHeight: 1.6 }}>
          <span className="title-phrase">문자·권력·기억·종교·문학의 탄생을 대조하는 </span>{' '}
          <span className="title-phrase"><strong style={{ color: 'var(--text-primary)' }}>고대 문자문화 비교 연구 아틀라스</strong></span>
        </p>

        {/* MUSEUM EXHIBITION STATISTICS METRIC BANNER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            fontSize: '0.88rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--civ-mesopotamia)' }}>28</span>
            <span>핵심 유물·사본</span>
          </div>
          <span style={{ color: 'var(--border-highlight)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--civ-egypt)' }}>5</span>
            <span>문명 & 대조군</span>
          </div>
          <span style={{ color: 'var(--border-highlight)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--civ-greece)' }}>3,100년</span>
            <span>비교 역사</span>
          </div>
          <span style={{ color: 'var(--border-highlight)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--civ-israel)' }}>8</span>
            <span>연구 에세이</span>
          </div>
        </div>

        {/* CENTRAL RESEARCH QUESTION CARD */}
        <div
          className="card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'left',
            background: 'var(--bg-surface)',
            borderLeft: '5px solid var(--civ-mesopotamia)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div className="font-cinzel" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>
              중심 연구 질문 (Core Research Question)
            </div>
            <HelpCircle size={18} style={{ color: 'var(--civ-mesopotamia)' }} />
          </div>

          <blockquote
            style={{
              fontSize: '1.3rem',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.65,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              margin: 0
            }}
          >
            “고대 문명에서 문자가 등장하거나 새로운 문자체계가 도입된 뒤, 인간은 경제·행정 기록을 넘어 무엇을 대규모로 기록하기 시작했으며, 그 선택은 각 사회의 문자문화와 지식체계에 대해 무엇을 보여주는가?”
          </blockquote>
        </div>
      </section>

      {/* 4 CIVILIZATIONS OVERVIEW CARDS */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <div>
            <h2 className="section-title">네 문명과 통제 사례 개관</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              문자체계의 발생과 발전 단계를 동일한 출발선에서 대조합니다.
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => onNavigateTab('compare')}>
            전체 비교 타임라인 보기 <ArrowRight size={14} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {civList.map((civ) => (
            <div
              key={civ.id}
              className="card card-hover"
              onClick={() => onNavigateTab('civilizations', civ.id)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${civ.accentColor}`
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span className={`civ-tag civ-${civ.id}`}>
                    {civ.id === 'ugarit' ? '통제 사례' : '주요 문명'}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    c. {civ.scriptEmergenceBCE} BCE
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  {civ.nameKo}
                </h3>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem', overflow: 'hidden' }}>
                  <span style={{ fontWeight: 700, color: civ.accentColor, whiteSpace: 'nowrap', flexShrink: 0 }}>문자:</span>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{civ.scriptName}</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {civ.oneSentenceSummary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <span>주 매체: {civ.primaryMedia}</span>
                <ArrowRight size={14} style={{ color: civ.accentColor }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELAPSED TIME COMPARISON CHART (ABSOLUTE VS RELATIVE) */}
      <section className="card" style={{ marginBottom: '4rem', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">문자 도입 후 대규모 비경제 기록 출현까지의 경과시간</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem' }}>
              문자가 도입된 연대(t=0)를 동일 기준점으로 고정하거나 절대연대(BCE)로 대조할 수 있습니다.
            </p>
          </div>

          <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <button
              className={`btn btn-sm ${timeMode === 'absolute' ? 'btn-primary' : ''}`}
              onClick={() => setTimeMode('absolute')}
              style={{ border: 'none' }}
            >
              절대연대 (BCE 3400-300)
            </button>
            <button
              className={`btn btn-sm ${timeMode === 'relative' ? 'btn-primary' : ''}`}
              onClick={() => setTimeMode('relative')}
              style={{ border: 'none' }}
            >
              상대연대 (t=0 도입 경과년수)
            </button>
          </div>
        </div>

        {/* CHART VISUALIZATION */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
          {timeMode === 'relative' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--civ-mesopotamia)' }}>메소포타미아 (후기 우루크 IV기 t=0 기준)</span>
                  <span><strong>t+0 년</strong> (회계 문서와 어휘목록 동시 출현)</span>
                </div>
                <div style={{ height: '16px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '12%', background: 'var(--civ-mesopotamia)', height: '100%' }}></div>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  우루크 IV기 행정 점토판과 직업목록(ED Lu A) 동시 출현 (DCCLT 데이터)
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--civ-egypt)' }}>이집트 (아비도스 U-j 묘 t=0 기준)</span>
                  <span><strong>t+900 년</strong> (피라미드 텍스트 刻文)</span>
                </div>
                <div style={{ height: '16px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '55%', background: 'var(--civ-egypt)', height: '100%' }}></div>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  선왕조 표찰(c. 3250 BCE) 후 제5왕조 우나스 피라미드 매장실 텍스트(c. 2350 BCE)
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--civ-greece)' }}>그리스 (알파벳 도입 t=0 c. 775 BCE 기준)</span>
                  <span><strong>t+35 년</strong> (디필론 비문 / 네스토르의 잔 유희시)</span>
                </div>
                <div style={{ height: '16px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '22%', background: 'var(--civ-greece)', height: '100%' }}></div>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Linear B 붕괴 후 알파벳 수용 35년 만에 시적 유희비문 극적 확산 (BCE 740년 디필론)
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--civ-israel)' }}>이스라엘·유다 (고대 히브리 분화 t=0 c. 950 BCE 기준)</span>
                  <span><strong>t+350 년</strong> (케테프 힌놈 부적 및 포로기 성서 편집)</span>
                </div>
                <div style={{ height: '16px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '40%', background: 'var(--civ-israel)', height: '100%' }}></div>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  게제르 달력(c. 925 BCE) 후 케테프 힌놈 은제 부적(c. 600 BCE) 및 쿰란 사해문서(c. 150 BCE)
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.5rem' }}>
                <span>기원전 3400 BCE</span>
                <span>BCE 2500</span>
                <span>BCE 1500</span>
                <span>BCE 800</span>
                <span>기원전 300 BCE</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--civ-mesopotamia)' }}>메소포타미아</span>
                <div style={{ height: '20px', background: 'rgba(200, 100, 50, 0.2)', border: '1px solid var(--civ-mesopotamia)', borderRadius: 'var(--radius-sm)', position: 'relative', width: '90%' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '1px', fontSize: '0.72rem', fontWeight: 600 }}>우루크 점토판 ~ 길가메시 표준판 (3300 ~ 650 BCE)</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--civ-egypt)' }}>이집트</span>
                <div style={{ height: '20px', background: 'rgba(27, 138, 144, 0.2)', border: '1px solid var(--civ-egypt)', borderRadius: 'var(--radius-sm)', position: 'relative', width: '85%', marginLeft: '5%' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '1px', fontSize: '0.72rem', fontWeight: 600 }}>아비도스 표찰 ~ 사자의 서 파피루스 (3250 ~ 1200 BCE)</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--civ-greece)' }}>그리스</span>
                <div style={{ height: '20px', background: 'rgba(29, 78, 216, 0.2)', border: '1px solid var(--civ-greece)', borderRadius: 'var(--radius-sm)', position: 'relative', width: '40%', marginLeft: '50%' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '1px', fontSize: '0.72rem', fontWeight: 600 }}>Linear B (1400BCE) & Alphabet (775~300 BCE)</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--civ-israel)' }}>이스라엘·유다</span>
                <div style={{ height: '20px', background: 'rgba(126, 34, 206, 0.2)', border: '1px solid var(--civ-israel)', borderRadius: 'var(--radius-sm)', position: 'relative', width: '30%', marginLeft: '65%' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '1px', fontSize: '0.72rem', fontWeight: 600 }}>게제르 달력 ~ 쿰란 사해문서 (950 ~ 150 BCE)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RESEARCH METHODOLOGY PRINCIPLES */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title">“최초”라는 말은 무엇을 뜻하는가? — 4대 연구 학술 원칙</h2>
        <p className="section-subtitle">
          이 웹사이트는 성급한 최초 단정을 경계하고, 텍스트와 유물의 사실성을 아래 4가지 원칙으로 규정합니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
              <ShieldCheck size={18} style={{ color: '#137333' }} />
              <span>1. “현존하는 가장 이른 증거”</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              "최초의 문학" 대신 "현재까지 확인된 가장 이른 자료"로 표현합니다. 유물의 존재 여부 옆에는 `확실`, `유력`, `논쟁 중`, `알 수 없음` 등 학학적 합의 상태를 기재합니다.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
              <Scale size={18} style={{ color: '#0369a1' }} />
              <span>2. 4가지 텍스트 비교 단위</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              (1) 단일 작품, (2) 문헌 집성체, (3) 출토 코퍼스, (4) 전승 전통을 구분합니다. "무엇이 거대한가"는 사용자가 정의 기준을 바꿈에 따라 비교 결과가 전환됩니다.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
              <Clock size={18} style={{ color: '#b45309' }} />
              <span>3. 성서/문헌의 4중 연대 벡터</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              (1) 사건 연대, (2) 구전·구성 연대, (3) 편집 연대, (4) 현존 사본 제작 연대를 엄격히 분리하여, 케테프 힌놈 은제 부적이나 쿰란 사해문서를 원본과 혼동하지 않게 합니다.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
              <Scroll size={18} style={{ color: '#7e22ce' }} />
              <span>4. 보존 편향(Preservation Bias)</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              점토판은 불에 구워져 수만 점이 보존된 반면 파피루스와 가죽은 부식되었습니다. "현존 자료 없음"을 "당시 존재하지 않았음"과 명확히 구분합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 8 COMPARATIVE ESSAYS PREVIEW GRID */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <div>
            <h2 className="section-title">비교 에세이 & 주제 탐구</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              고대 문자문화의 8가지 핵심 주제를 엄밀한 학술 근거로 분석합니다.
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => onNavigateTab('themes')}>
            에세이 전체 읽기 <BookOpen size={14} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {COMPARATIVE_ESSAYS.map((essay) => (
            <div
              key={essay.id}
              className="card card-hover"
              onClick={() => onNavigateTab('themes', essay.id)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem' }}>
                  ESSAY {essay.order}
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', fontFamily: 'var(--font-serif)' }}>
                  {essay.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                  {essay.subtitle}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {essay.summary}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                {essay.civilizationsDiscussed.map((cId) => (
                  <span key={cId} className={`civ-tag civ-${cId}`} style={{ fontSize: '0.72rem' }}>
                    {CIVILIZATIONS[cId]?.nameKo}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

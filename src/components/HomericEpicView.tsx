import React, { useState } from 'react';
import { HOMERIC_BOOKS, HOMERIC_CHARACTERS, HOMERIC_CONCEPTS, COMPARATIVE_EPIC_MATRIX } from '../data/homer';
import { BookOpen, Shield, Feather, Sparkles, Scale, CheckCircle2, Award, Quote, Flame, Compass } from 'lucide-react';

export const HomericEpicView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'books' | 'characters' | 'concepts' | 'matrix' | 'problem'>('books');
  const [selectedEpic, setSelectedEpic] = useState<'all' | 'iliad' | 'odyssey'>('all');
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const filteredBooks = HOMERIC_BOOKS.filter(b => selectedEpic === 'all' || b.epic === selectedEpic);

  return (
    <div className="main-container">
      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', margin: '1rem 0 2.5rem 0' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-highlight)', padding: '0.4rem 1.1rem', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          <Sparkles size={14} style={{ color: 'var(--civ-greece)' }} />
          <span className="font-cinzel">HOMERIC EPICS MASTERY ATLAS • ILIAD & ODYSSEY</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', maxWidth: '980px', margin: '0 auto 1rem auto', letterSpacing: '-0.02em', fontWeight: 700 }}>
          <span className="title-phrase">호메로스 서사시 독파 아틀라스 — </span>{' '}
          <span className="title-phrase">《일리아스》 & 《오뒷세이아》</span>
        </h1>
        <p style={{ fontSize: '1.18rem', color: 'var(--text-secondary)', maxWidth: '840px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
          <span className="title-phrase">펠레우스의 아들의 <strong style={{ color: 'var(--text-primary)' }}>파멸적 분노(Mēnis)</strong>부터</span>{' '}
          <span className="title-phrase">20년 만의 <strong style={{ color: 'var(--text-primary)' }}>고향 귀환(Nostos)</strong>까지 — </span>{' '}
          <span className="title-phrase">문명사적 구전 전통과 근동 비교를 통해 호메로스 원전을 깊이 있게 독파합니다.</span>
        </p>

        {/* SUB-SECTION NAV BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button
            className={`btn ${activeSection === 'books' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('books')}
          >
            <BookOpen size={16} /> 48개 권별 독파 요약
          </button>
          <button
            className={`btn ${activeSection === 'characters' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('characters')}
          >
            <Shield size={16} /> 영웅 수식어구 & 인물 도감
          </button>
          <button
            className={`btn ${activeSection === 'concepts' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('concepts')}
          >
            <Feather size={16} /> 호메로스 {HOMERIC_CONCEPTS.length}대 사상 개념어
          </button>
          <button
            className={`btn ${activeSection === 'matrix' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('matrix')}
          >
            <Scale size={16} /> 근동 비교 서사시 1:1 대조
          </button>
          <button
            className={`btn ${activeSection === 'problem' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('problem')}
          >
            <Flame size={16} /> 호메로스 문제 & 정전사
          </button>
        </div>
      </section>

      {/* SECTION 1: BOOKS OVERVIEW */}
      {activeSection === 'books' && (
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title" style={{ margin: 0 }}>권별 핵심 구조 및 명구절 (Book-by-Book Guide)</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
                《일리아스》 24권과 《오뒷세이아》 24권의 서사적 전환점과 그리스어 원문-직역 텍스트를 탐색합니다.
              </p>
            </div>

            {/* EPIC FILTER */}
            <div style={{ display: 'flex', gap: '0.4rem', background: 'var(--bg-surface-elevated)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <button
                className={`btn btn-sm ${selectedEpic === 'all' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSelectedEpic('all')}
              >
                전체 서사시
              </button>
              <button
                className={`btn btn-sm ${selectedEpic === 'iliad' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSelectedEpic('iliad')}
              >
                《일리아스》 (Iliad)
              </button>
              <button
                className={`btn btn-sm ${selectedEpic === 'odyssey' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSelectedEpic('odyssey')}
              >
                《오뒷세이아》 (Odyssey)
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredBooks.map((book) => (
              <div
                key={`${book.epic}-${book.bookNumber}`}
                className="card"
                style={{
                  borderLeft: `5px solid ${book.epic === 'iliad' ? 'var(--civ-mesopotamia)' : 'var(--civ-greece)'}`,
                  background: 'var(--bg-surface)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`civ-tag ${book.epic === 'iliad' ? 'civ-mesopotamia' : 'civ-greece'}`}>
                      {book.epic === 'iliad' ? '일리아스 (Iliad)' : '오뒷세이아 (Odyssey)'}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-cinzel)', fontWeight: 700, color: 'var(--text-muted)' }}>
                      BOOK {book.bookNumber}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.35rem' }}>
                  {book.titleKo}
                </h3>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1rem', fontFamily: 'serif' }}>
                  {book.titleGreek}
                </div>

                <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  {book.summary}
                </p>

                {/* KEY EVENTS LIST */}
                <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }} className="font-cinzel">
                    주요 사건 분기점 (Key Events)
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                    {book.keyEvents.map((evt, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} style={{ color: book.epic === 'iliad' ? 'var(--civ-mesopotamia)' : 'var(--civ-greece)', marginTop: '3px', flexShrink: 0 }} />
                        <span>{evt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ICONIC LINES BOX */}
                {book.iconicLines.map((line, idx) => (
                  <blockquote
                    key={idx}
                    style={{
                      background: 'var(--bg-surface-elevated)',
                      borderLeft: `4px solid ${book.epic === 'iliad' ? 'var(--civ-mesopotamia)' : 'var(--civ-greece)'}`,
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      margin: 0
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.12rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.35rem' }}>
                      “{line.greek}”
                    </div>
                    <div style={{ fontSize: '0.83rem', fontFamily: 'monospace', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                      * {line.transliteration}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      → {line.korean}
                    </div>
                  </blockquote>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: CHARACTERS & EPITHETS */}
      {activeSection === 'characters' && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>영웅 공식어구 및 인물 도감 (Formulaic Epithets & Characters)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            구전 시인(랩소도스)들이 운율(Hexameter)을 맞추기 위해 사용한 고유 수식어구(Formulaic Epithets)와 주요 인물 성격을 분석합니다.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {HOMERIC_CHARACTERS.map((char) => (
              <div key={char.id} className="card" style={{ background: 'var(--bg-surface)', borderTop: '4px solid var(--civ-greece)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', margin: 0 }}>
                    {char.nameKo}
                  </h3>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'serif', color: 'var(--text-muted)' }}>
                    {char.nameGreek}
                  </span>
                </div>

                {/* FORMULAIC EPITHET BADGE */}
                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-highlight)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }} className="font-cinzel">
                    영웅 공식 수식어구 (Formulaic Epithet)
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--civ-mesopotamia)', fontFamily: 'var(--font-serif)' }}>
                    {char.epithet}
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <strong>신분 및 역할:</strong> {char.role}
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                  {char.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: CORE CONCEPTS */}
      {activeSection === 'concepts' && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>호메로스 {HOMERIC_CONCEPTS.length}대 사상 개념어 (Core Homeric Lexicon)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            《일리아스》와 《오뒷세이아》 원전의 인간관, 도덕관, 세계관을 관통하는 {HOMERIC_CONCEPTS.length}개 핵심 그리스어 개념어를 정밀 분석합니다.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {HOMERIC_CONCEPTS.map((c) => (
              <div key={c.id} className="card" style={{ background: 'var(--bg-surface)', borderLeft: '4px solid var(--civ-israel-judah)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: 0 }}>
                    {c.termKo}
                  </h3>
                  <span style={{ fontSize: '1.1rem', fontFamily: 'serif', fontWeight: 700, color: 'var(--civ-israel-judah)' }}>
                    {c.termGreek} ({c.termTransliteration})
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {c.definition}
                </p>

                <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', color: 'var(--text-secondary)', borderLeft: '3px solid var(--border-highlight)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>원문 활용 예시:</strong> {c.exampleInHomer}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: COMPARATIVE MATRIX */}
      {activeSection === 'matrix' && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>그리스 서사시 vs 근동 비교 서사시 1:1 대조 행렬 (Comparative Matrix)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            호메로스 서사시와 메소포타미아 《길가메시 서사시》, 이집트 《사누헤 이야기》, 우가리트 《바알 서사시》를 동지중해 문화권 맥락에서 나란히 대조합니다.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {COMPARATIVE_EPIC_MATRIX.map((item) => (
              <div key={item.id} className="card" style={{ background: 'var(--bg-surface)', borderTop: '4px solid var(--civ-mesopotamia)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--civ-mesopotamia)' }}>
                  {item.theme}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                  {/* GREEK SIDE */}
                  <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--civ-greece)', textTransform: 'uppercase', marginBottom: '0.35rem' }} className="font-cinzel">
                      🏛️ 그리스 서사시 (Homer)
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{item.greekEpicConcept}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.iliadOdysseyManifestation}</div>
                  </div>

                  {/* NEAR EAST SIDE */}
                  <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--civ-mesopotamia)', textTransform: 'uppercase', marginBottom: '0.35rem' }} className="font-cinzel">
                      🏺 근동 서사시 (Near East Parallel)
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.nearEasternParallel}</div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', fontSize: '0.9rem', color: 'var(--text-primary)', background: 'var(--bg-surface-elevated)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  <strong style={{ color: 'var(--civ-israel-judah)' }}>💡 문예사적 비교 통찰:</strong> {item.comparativeInsight}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: HOMERIC PROBLEM & TRANSMISSION */}
      {activeSection === 'problem' && (
        <section style={{ marginBottom: '4rem' }}>
          <div className="card" style={{ background: 'var(--bg-surface)', padding: '2.25rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              구전에서 정본까지: "호메로스 문제(The Homeric Problem)"와 전승사
            </h2>

            <div style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                <strong>1. 패리-로드 구전 공식 가설 (Parry-Lord Oral-Formulaic Theory):</strong><br />
                20세기 초 밀만 패리(Milman Parry)와 앨버트 로드(Albert Lord)는 유고슬라비아의 구전 시인(Guslar) 연구를 통해 호메로스 서사시의 수많은 영웅 수식어구(예: '발이 빠른 아킬레우스', '빛나는 헥토르')가 문자 작성용이 아니라 <strong>즉흥 가창 시 6보격 운율(Hexameter)을 즉석에서 맞추기 위한 구전 기억 도구(Formulae)</strong>였음을 증명했습니다.
              </p>

              <p>
                <strong>2. 아테네 페이시스트라토스 정서 기획 (Peisistratid Recension, c. 530 BCE):</strong><br />
                수백 년간 지역 랩소도스(Rhapsodes)들에 의해 구전 변형되던 서사시는 BCE 6세기 아테네의 참주 페이시스트라토스 시대에 파나테나이아 축제 낭송용 표준 정본으로 통합·고정되었습니다. 이는 서사시가 국가 차원의 통합 정전(Canon)으로 격상되었음을 의미합니다.
              </p>

              <p>
                <strong>3. 알렉산드리아 학파와 텍스트 비평 기호 (Alexandrian Philology):</strong><br />
                BCE 3세기 알렉산드리아 도서관의 총서지관들(제노도토스, 아리스토파네스, 아리스타르코스)은 수많은 사본 이본(Variants)을 비교하여 <strong>위작이나 후대 삽입행 옆에 오벨로스(Obelos —) 및 아스테리스코스(*) 기호</strong>를 쳐서 인류 최초의 문헌학적 텍스트 비평(Textual Criticism)을 완성했습니다.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

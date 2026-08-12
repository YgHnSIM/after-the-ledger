import React, { useState } from 'react';
import { HOMERIC_BOOKS, HOMERIC_CHARACTERS, HOMERIC_CONCEPTS, COMPARATIVE_EPIC_MATRIX } from '../data/homer';
import { HOMERIC_SCHOLARSHIP_RECORDS, NEAR_EASTERN_PARALLELS, LINEAR_B_COMPARISONS } from '../data/homerScholarship';
import { BookOpen, Shield, Feather, Sparkles, Scale, GraduationCap, Globe, Library, Milestone, CheckCircle2, Award, Quote, Flame } from 'lucide-react';


export const HomericEpicView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'books' | 'characters' | 'concepts' | 'matrix' | 'scholarship' | 'problem'>('scholarship');
  const [activeScholarshipTab, setActiveScholarshipTab] = useState<'all' | 'oral' | 'near-east' | 'linear-b' | 'textual'>('all');
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
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', maxWidth: '960px' }}>
          <div className="segmented-control">
            <button
              className={`segmented-btn ${activeSection === 'scholarship' ? 'active' : ''}`}
              onClick={() => setActiveSection('scholarship')}
            >
              <GraduationCap size={16} /> <span>세계 고전학·비교학 성과</span>
            </button>

            <button
              className={`segmented-btn ${activeSection === 'books' ? 'active' : ''}`}
              onClick={() => setActiveSection('books')}
            >
              <BookOpen size={16} /> <span>{HOMERIC_BOOKS.length}개 권별 가이드</span>
            </button>
            <button
              className={`segmented-btn ${activeSection === 'characters' ? 'active' : ''}`}
              onClick={() => setActiveSection('characters')}
            >
              <Shield size={16} /> <span>영웅 수식어구</span>
            </button>
            <button
              className={`segmented-btn ${activeSection === 'concepts' ? 'active' : ''}`}
              onClick={() => setActiveSection('concepts')}
            >
              <Feather size={16} /> <span>10대 사상 개념어</span>
            </button>
            <button
              className={`segmented-btn ${activeSection === 'matrix' ? 'active' : ''}`}
              onClick={() => setActiveSection('matrix')}
            >
              <Scale size={16} /> <span>근동 비교 대조</span>
            </button>
            <button
              className={`segmented-btn ${activeSection === 'problem' ? 'active' : ''}`}
              onClick={() => setActiveSection('problem')}
            >
              <Milestone size={16} /> <span>전승사 요약</span>
            </button>

          </div>
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

      {/* SECTION: GLOBAL HOMERIC SCHOLARSHIP & COMPARATIVE PHILOLOGY */}
      {activeSection === 'scholarship' && (
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 className="section-title" style={{ marginBottom: '0.35rem' }}>
              세계 고전학 & 근동 비교 필놀로지 연구 아카이브 (Homeric Scholarship)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              18세기 F.A. Wolf 분석파부터 Parry-Lord 구전 공식설, M.L. West 근동 서사시 교섭론, 미케네 Linear B 해독 및 알렉산드리아 도서관 비평학까지의 전세계 핵심 연구 성과를 대조합니다.
            </p>
          </div>

          {/* SCHOLARSHIP SUBTABS */}
          <div className="scholarship-subtabs">
            <button
              className={`scholarship-subtab-btn ${activeScholarshipTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveScholarshipTab('all')}
            >
              <Globe size={15} /> <span>전체 연구 성과 종합</span>
            </button>
            <button
              className={`scholarship-subtab-btn ${activeScholarshipTab === 'oral' ? 'active' : ''}`}
              onClick={() => setActiveScholarshipTab('oral')}
            >
              <GraduationCap size={15} /> <span>구전 공식설 & 학쟁 (Parry-Lord)</span>
            </button>
            <button
              className={`scholarship-subtab-btn ${activeScholarshipTab === 'near-east' ? 'active' : ''}`}
              onClick={() => setActiveScholarshipTab('near-east')}
            >
              <Scale size={15} /> <span>동·서 지중해 근동 비교 (M.L. West)</span>
            </button>
            <button
              className={`scholarship-subtab-btn ${activeScholarshipTab === 'linear-b' ? 'active' : ''}`}
              onClick={() => setActiveScholarshipTab('linear-b')}
            >
              <Milestone size={15} /> <span>미케네 Linear B 어휘 (Wanax)</span>
            </button>
            <button
              className={`scholarship-subtab-btn ${activeScholarshipTab === 'textual' ? 'active' : ''}`}
              onClick={() => setActiveScholarshipTab('textual')}
            >
              <Library size={15} /> <span>알렉산드리아 비평 & 파피루스 사본</span>
            </button>
          </div>

          {/* SUBTAB CONTENT 1: ORAL FORMULAIC & SCHOLARSHIP RECORDS */}
          {(activeScholarshipTab === 'all' || activeScholarshipTab === 'oral' || activeScholarshipTab === 'textual') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {HOMERIC_SCHOLARSHIP_RECORDS.filter(rec => {
                if (activeScholarshipTab === 'oral') return rec.category === 'oral-formulaic' || rec.category === 'homeric-question' || rec.category === 'neoanalysis';
                if (activeScholarshipTab === 'textual') return rec.category === 'textual-criticism';
                return true;
              }).map(rec => (
                <div key={rec.id} className="scholarship-card" style={{ borderLeft: '4px solid var(--civ-greece)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <span className="status-badge" style={{ background: 'rgba(30, 64, 175, 0.12)', color: 'var(--civ-greece)', border: '1px solid rgba(30, 64, 175, 0.25)', marginBottom: '0.4rem', display: 'inline-block' }}>
                        {rec.categoryLabel}
                      </span>
                      <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: '0.25rem 0 0.15rem 0', color: 'var(--text-primary)' }}>
                        {rec.titleKo}
                      </h3>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-cinzel)', fontWeight: 600 }}>
                      👤 {rec.scholarName} ({rec.yearOrEra})
                    </span>
                  </div>

                  <div style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                    <strong>핵심 연구 명제:</strong> {rec.coreThesis}
                  </div>

                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: 'var(--bg-surface-elevated)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', lineHeight: 1.5 }}>
                    <strong>🔍 연구 근거 및 사료 분석:</strong> {rec.evidenceDescription}
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--civ-greece)', lineHeight: 1.5 }}>
                    <strong>💡 호메로스 학술 영향:</strong> {rec.impactOnHomer}
                  </div>

                  <div className="scholarship-citation-box">
                    📖 학술 사료 출처 (Citation): {rec.citation}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SUBTAB CONTENT 2: NEAR EASTERN PARALLELS */}
          {(activeScholarshipTab === 'all' || activeScholarshipTab === 'near-east') && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--civ-mesopotamia)' }}>
                🏺 동·서 지중해 근동 서사시 교섭 연구 (Near Eastern Epic Parallels - M.L. West)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {NEAR_EASTERN_PARALLELS.map(ne => (
                  <div key={ne.id} className="near-eastern-parallel-card" style={{ borderLeft: '4px solid var(--civ-mesopotamia)' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.35rem 0', color: 'var(--text-primary)' }}>
                        {ne.motifTitle}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {ne.nearEasternWork} ({ne.nearEasternEra}) ↔ {ne.homericWork}
                      </div>
                    </div>

                    <div className="parallel-grid">
                      <div className="parallel-box parallel-box-ne">
                        <strong style={{ color: 'var(--civ-mesopotamia)', display: 'block', marginBottom: '0.35rem' }}>
                          🏺 근동 사료 (Near East):
                        </strong>
                        {ne.nearEasternEvidence}
                      </div>
                      <div className="parallel-box parallel-box-homer">
                        <strong style={{ color: 'var(--civ-greece)', display: 'block', marginBottom: '0.35rem' }}>
                          🏛️ 호메로스 사료 (Homer):
                        </strong>
                        {ne.homericEvidence}
                      </div>
                    </div>

                    <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', background: 'var(--bg-surface-elevated)', padding: '0.85rem', borderRadius: 'var(--radius-md)', lineHeight: 1.5 }}>
                      <strong style={{ color: 'var(--civ-israel)' }}>💡 서양고전학 비교 분석:</strong> {ne.comparativeAnalysis}
                    </div>

                    <div className="scholarship-citation-box">
                      📖 학술 사료 출처: {ne.citation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUBTAB CONTENT 3: LINEAR B MYCENAEAN COMPARISONS */}
          {(activeScholarshipTab === 'all' || activeScholarshipTab === 'linear-b') && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--civ-greece)' }}>
                📜 청동기 미케네 Linear B 점토판 어휘 ↔ 호메로스 시어 대조 (Mycenean Grammar & Wanax)
              </h3>
              <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                <table className="linear-b-table">
                  <thead>
                    <tr>
                      <th>미케네 Linear B (c. 1400 BCE)</th>
                      <th>호메로스 시어 (c. 800 BCE)</th>
                      <th>청동기-철기 역동 및 역사언어학적 해설</th>
                      <th>발굴 점토판 참조</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LINEAR_B_COMPARISONS.map(lb => (
                      <tr key={lb.id}>
                        <td>
                          <div style={{ fontWeight: 700, color: 'var(--civ-greece)', fontSize: '0.95rem' }}>{lb.linearBTerm}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-cinzel)' }}>{lb.linearBTransliteration}</div>
                          <div style={{ fontSize: '0.82rem', marginTop: '0.25rem' }}>{lb.linearBMeaning}</div>
                        </td>
                        <td>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{lb.homericTerm}</div>
                          <div style={{ fontSize: '0.82rem', marginTop: '0.25rem' }}>{lb.homericMeaning}</div>
                        </td>
                        <td style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {lb.historicalShift}
                        </td>
                        <td style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          {lb.tabletReference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
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

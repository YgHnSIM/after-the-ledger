import React, { useState, useEffect } from 'react';
import { COMPARATIVE_ESSAYS } from '../data/essays';
import { CIVILIZATIONS } from '../data/civilizations';
import { ARTIFACTS } from '../data/artifacts';
import { PrimarySourceRef, ComparativeEssay } from '../types';
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scale,
  Compass,
  ExternalLink,
  Layers,
  ChevronRight,
  Hash,
  Bookmark,
  Calendar,
  Building2,
  FileText,
  Search,
  Quote,
  ShieldCheck,
  Library
} from 'lucide-react';

interface ThemesViewProps {
  initialEssayId?: string;
  onNavigateArtifact?: (id: string) => void;
  onNavigateEssay?: (id: string) => void;
}

export const ThemesView: React.FC<ThemesViewProps> = ({
  initialEssayId,
  onNavigateArtifact,
  onNavigateEssay
}) => {
  const [activeEssayId, setActiveEssayId] = useState<string>(
    initialEssayId || COMPARATIVE_ESSAYS[0].id
  );

  // Sync initialEssayId if passed as prop/URL param
  useEffect(() => {
    if (initialEssayId && COMPARATIVE_ESSAYS.some(e => e.id === initialEssayId)) {
      setActiveEssayId(initialEssayId);
    }
  }, [initialEssayId]);

  const currentEssay: ComparativeEssay =
    COMPARATIVE_ESSAYS.find((e) => e.id === activeEssayId) || COMPARATIVE_ESSAYS[0];

  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);

  // Auto-select first primary source when essay changes
  useEffect(() => {
    if (currentEssay.primarySources && currentEssay.primarySources.length > 0) {
      setActiveSourceId(currentEssay.primarySources[0].id);
    } else {
      setActiveSourceId(null);
    }
  }, [activeEssayId, currentEssay]);

  const activeSource: PrimarySourceRef | undefined = currentEssay.primarySources?.find(
    (s) => s.id === activeSourceId
  ) || currentEssay.primarySources?.[0];

  const handleSelectEssay = (essayId: string) => {
    setActiveEssayId(essayId);
    if (onNavigateEssay) {
      onNavigateEssay(essayId);
    }
  };

  const scrollToSection = (secId: string) => {
    const el = document.getElementById(secId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="main-container">
      {/* PAGE HEADER */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <BookOpen size={20} style={{ color: 'var(--accent-primary)' }} />
          <span className="font-cinzel" style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-primary)' }}>
            COMPARATIVE EPIGRAPHY & LITERACY MONOGRAPHS
          </span>
        </div>
        <h1 className="section-title">고대 문자문화 {COMPARATIVE_ESSAYS.length}대 연구 에세이</h1>
        <p className="section-subtitle">
          회계와 목록의 동시성, 왕권 제의, 호메로스 정서 기획, 성서 4중 연대 벡터, 보존 편향의 착시, 우가리트 서기관 제도를 관통하는 21세기 디지털 비문학 기반 비교 모노그래프 집성입니다.
        </p>
      </div>

      {/* TOP ESSAY RESPONSIVE GRID SELECTOR (NO CLIPPING, ALL 8 VISIBLE) */}
      <div className="essay-selector-grid">
        {COMPARATIVE_ESSAYS.map((essay) => {
          const isActive = essay.id === activeEssayId;
          return (
            <button
              key={essay.id}
              onClick={() => handleSelectEssay(essay.id)}
              className={`essay-selector-card ${isActive ? 'active' : ''}`}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className="font-cinzel" style={{ fontSize: '0.72rem', fontWeight: 700, color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
                    ESSAY {essay.order}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {essay.readingTimeMinutes || 6}분 읽기
                  </span>
                </div>
                <div style={{ fontWeight: isActive ? 700 : 600, fontSize: '0.92rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {essay.title}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {essay.civilizationsDiscussed.map((cId) => (
                  <span key={cId} className={`civ-tag civ-${cId}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                    {CIVILIZATIONS[cId]?.nameKo || cId}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* SPLIT VIEWER LAYOUT */}
      <div className="essay-split-layout">
        {/* LEFT 60%: ACADEMIC MONOGRAPH READER */}
        <div className="card" style={{ padding: '2.25rem', background: 'var(--bg-surface)' }}>
          {/* ESSAY HEADER */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                {currentEssay.civilizationsDiscussed.map((cId) => (
                  <span key={cId} className={`civ-tag civ-${cId}`}>
                    {CIVILIZATIONS[cId]?.nameKo}
                  </span>
                ))}
              </div>
              <span className="font-cinzel" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                ESSAY {currentEssay.order} OF {COMPARATIVE_ESSAYS.length} • 약 {currentEssay.readingTimeMinutes || 6}분 완독
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.3rem', marginBottom: '0.6rem', lineHeight: 1.25, color: 'var(--text-primary)' }}>
              {currentEssay.title}
            </h1>
            <div style={{ fontSize: '1.18rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', lineHeight: 1.45 }}>
              {currentEssay.subtitle}
            </div>

            {/* TABLE OF CONTENTS PILLS */}
            {currentEssay.sections && currentEssay.sections.length > 0 && (
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem', fontFamily: 'var(--font-cinzel)' }}>
                  목차 바로가기 (TABLE OF CONTENTS)
                </div>
                <div className="toc-pill-track">
                  {currentEssay.sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className="toc-pill-btn"
                    >
                      {sec.order}. {sec.headingKo.replace(/^\d+\.\s*/, '').substring(0, 16)}...
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* KEY TAKEAWAYS BOX */}
          <div
            style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--accent-primary)',
              padding: '1.35rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div className="font-cinzel" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} /> 핵심 연구 테제 (Key Takeaways)
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {currentEssay.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.55rem', fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ESSAY STRUCTURED SECTIONS */}
          {currentEssay.sections && currentEssay.sections.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {currentEssay.sections.map((sec) => (
                <section key={sec.id} id={sec.id} style={{ scrollMarginTop: '90px' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.55rem', color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                      {sec.headingKo}
                    </h2>
                    {sec.subheadingKo && (
                      <div style={{ fontSize: '0.92rem', color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.02em' }}>
                        {sec.subheadingKo}
                      </div>
                    )}
                  </div>

                  <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)', whiteSpace: 'pre-line', marginBottom: '1.25rem' }}>
                    {sec.content}
                  </div>

                  {/* 3-TIER ORIGINAL SCRIPT QUOTE BOX */}
                  {sec.originalQuote && (
                    <div className="essay-original-script-box">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.4rem' }}>
                        <span className="font-cinzel" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Quote size={14} /> 1차 사료 원문 및 학술 전사 (Primary Inscription)
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          {sec.originalQuote.sourceCitation}
                        </span>
                      </div>

                      {/* Tier 1: Original Glyph */}
                      <div
                        className="ancient-script-display"
                        style={{
                          fontSize: '1.35rem',
                          color: 'var(--text-primary)',
                          margin: '0.6rem 0',
                          padding: '0.5rem 0.75rem',
                          background: 'var(--bg-card)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-color)',
                          overflowX: 'auto',
                          lineHeight: 1.6
                        }}
                      >
                        {sec.originalQuote.originalScript}
                      </div>

                      {/* Tier 2: Transliteration */}
                      <div style={{ fontSize: '0.88rem', fontFamily: 'monospace', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.5rem', whiteSpace: 'pre-line' }}>
                        {sec.originalQuote.transliteration}
                      </div>

                      {/* Tier 3: Korean Translation */}
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.55, borderLeft: '2px solid var(--border-highlight)', paddingLeft: '0.6rem' }}>
                        {sec.originalQuote.translationKo}
                      </div>
                    </div>
                  )}

                  {/* SCHOLARLY CALLOUT BOX */}
                  {sec.scholarlyCallout && (
                    <div className={`essay-callout-box essay-callout-${sec.scholarlyCallout.type}`}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem' }}>
                        {sec.scholarlyCallout.type === 'theory-debate' && <Scale size={16} style={{ color: '#d97706' }} />}
                        {sec.scholarlyCallout.type === 'epigraphic-discovery' && <Sparkles size={16} style={{ color: '#107e84' }} />}
                        {sec.scholarlyCallout.type === 'comparative-insight' && <Compass size={16} style={{ color: '#6b21a8' }} />}
                        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                          {sec.scholarlyCallout.titleKo}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                        {sec.scholarlyCallout.bodyKo}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <article className="drop-cap" style={{ fontSize: '1.08rem', lineHeight: 1.85, color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
              {currentEssay.content}
            </article>
          )}

          {/* SCHOLARLY DEBATES ACCORDION / CARD */}
          {currentEssay.scholarlyDebates && currentEssay.scholarlyDebates.length > 0 && (
            <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Scale size={20} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>
                  20/21세기 핵심 학술 논쟁 (Scholarly Debates)
                </h3>
              </div>

              {currentEssay.scholarlyDebates.map((deb) => (
                <div
                  key={deb.id}
                  style={{
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.35rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.02rem', color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    {deb.topic}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>
                    {/* Thesis A */}
                    <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '0.78rem', color: '#c85a24', fontWeight: 700, marginBottom: '0.3rem' }}>
                        가설 A: {deb.thesisA.scholarOrSchool} ({deb.thesisA.eraOrYear})
                      </div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.45 }}>
                        {deb.thesisA.claimKo}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <strong>핵심 근거:</strong> {deb.thesisA.keyEvidence}
                      </div>
                    </div>

                    {/* Thesis B */}
                    <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '0.78rem', color: '#107e84', fontWeight: 700, marginBottom: '0.3rem' }}>
                        가설 B: {deb.thesisB.scholarOrSchool} ({deb.thesisB.eraOrYear})
                      </div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.45 }}>
                        {deb.thesisB.claimKo}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <strong>핵심 근거:</strong> {deb.thesisB.keyEvidence}
                      </div>
                    </div>
                  </div>

                  {/* Consensus */}
                  <div style={{ background: 'rgba(184, 134, 11, 0.08)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(184, 134, 11, 0.25)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>학계 합의 상태 (Consensus):</strong> {deb.consensusStatus}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BIBLIOGRAPHY SECTION */}
          {currentEssay.bibliography && currentEssay.bibliography.length > 0 && (
            <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Library size={18} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                  학술 참고문헌 및 사료 출처 (Bibliography)
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentEssay.bibliography.map((bib) => (
                  <div
                    key={bib.id}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      padding: '0.6rem 0.85rem',
                      background: 'var(--bg-surface-elevated)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.88rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div>
                      <span className={`essay-grade-pill ${bib.sourceGrade === 'Grade A' ? 'essay-grade-a' : 'essay-grade-b'}`} style={{ marginRight: '0.6rem' }}>
                        {bib.sourceGrade}
                      </span>
                      <strong style={{ color: 'var(--text-primary)' }}>{bib.author}</strong> ({bib.year}). <em>{bib.title}</em>. {bib.publication}
                    </div>
                    {bib.urlOrDoi && (
                      <a
                        href={bib.urlOrDoi}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.78rem', textDecoration: 'none' }}
                      >
                        원문 링크 <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CROSS-REFERENCING ESSAYS */}
          {currentEssay.crossRefEssayIds && currentEssay.crossRefEssayIds.length > 0 && (
            <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, fontFamily: 'var(--font-cinzel)', marginBottom: '0.75rem' }}>
                연관 연구 에세이 바로가기 (CROSS-REFERENCED ESSAYS)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
                {currentEssay.crossRefEssayIds.map((cRefId) => {
                  const refEssay = COMPARATIVE_ESSAYS.find((e) => e.id === cRefId);
                  if (!refEssay) return null;
                  return (
                    <div
                      key={refEssay.id}
                      onClick={() => handleSelectEssay(refEssay.id)}
                      className="card card-hover"
                      style={{
                        cursor: 'pointer',
                        padding: '0.85rem 1rem',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        ESSAY {refEssay.order}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                        {refEssay.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT 40%: LIVE PRIMARY SOURCE & ARTIFACT INSPECTOR */}
        <div className="essay-source-inspector-sticky">
          <div className="card" style={{ padding: '1.65rem', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
            {/* INSPECTOR HEADER */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Layers size={18} style={{ color: 'var(--accent-primary)' }} />
                <h3 className="font-cinzel" style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, letterSpacing: '0.04em' }}>
                  1차 사료 인스펙터 (Source Inspector)
                </h3>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {currentEssay.primarySources?.length || 0}점 수록
              </span>
            </div>

            {/* SOURCE SELECTOR TABS */}
            {currentEssay.primarySources && currentEssay.primarySources.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {currentEssay.primarySources.map((src, idx) => {
                  const isSrcActive = src.id === (activeSource?.id || currentEssay.primarySources![0].id);
                  return (
                    <button
                      key={src.id}
                      onClick={() => setActiveSourceId(src.id)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: isSrcActive ? 700 : 500,
                        background: isSrcActive ? 'var(--accent-primary)' : 'var(--bg-surface-elevated)',
                        color: isSrcActive ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid',
                        borderColor: isSrcActive ? 'var(--accent-primary)' : 'var(--border-color)',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      사료 {idx + 1}: {src.nameKo.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            )}

            {/* ACTIVE SOURCE DETAIL CARD */}
            {activeSource ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Title & Grade */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className={`essay-grade-pill ${activeSource.sourceGrade === 'Grade A' ? 'essay-grade-a' : 'essay-grade-b'}`}>
                      {activeSource.sourceGrade}
                    </span>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'monospace', color: 'var(--accent-primary)' }}>
                      {activeSource.catalogNo}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', margin: '0 0 0.2rem 0' }}>
                    {activeSource.nameKo}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {activeSource.nameEnOrOriginal}
                  </div>
                </div>

                {/* Institution & Epigraphy Method */}
                <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                    <Building2 size={14} style={{ color: 'var(--accent-primary)' }} />
                    <span><strong>소장:</strong> {activeSource.institution}</span>
                  </div>
                  {activeSource.epigraphyMethod && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                      <Sparkles size={14} style={{ color: '#107e84' }} />
                      <span><strong>판독 기법:</strong> {activeSource.epigraphyMethod}</span>
                    </div>
                  )}
                </div>

                {/* 4-Dates Vector Mini Badges */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem', fontFamily: 'var(--font-cinzel)' }}>
                    4중 연대 벡터 (4-DATES VECTOR)
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.78rem' }}>
                    <div style={{ background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>사건 (Event)</div>
                      <div style={{ fontWeight: 600 }}>{activeSource.dateVector.eventDateBCE ? `BCE ${activeSource.dateVector.eventDateBCE}` : '—'}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>구성 (Composition)</div>
                      <div style={{ fontWeight: 600 }}>{activeSource.dateVector.compositionDateBCE ? `BCE ${activeSource.dateVector.compositionDateBCE}` : '—'}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>편집 (Redaction)</div>
                      <div style={{ fontWeight: 600 }}>{activeSource.dateVector.redactionDateBCE ? `BCE ${activeSource.dateVector.redactionDateBCE}` : '—'}</div>
                    </div>
                    <div style={{ background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-primary)' }}>
                      <div style={{ color: 'var(--accent-primary)', fontSize: '0.68rem', fontWeight: 700 }}>사본 (Witness)</div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{typeof activeSource.dateVector.witnessDateBCE === 'number' ? `BCE ${activeSource.dateVector.witnessDateBCE}` : activeSource.dateVector.witnessDateBCE}</div>
                    </div>
                  </div>
                </div>

                {/* Original Inscription Box */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem', fontFamily: 'var(--font-cinzel)' }}>
                    비문 원문 및 직역 (INSCRIPTION)
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <div className="ancient-script-display" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.5 }}>
                      {activeSource.originalScript}
                    </div>
                    <div style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                      {activeSource.transliteration}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.4rem' }}>
                      {activeSource.translationKo}
                    </div>
                  </div>
                </div>

                {/* Epigraphic Notes */}
                {activeSource.notes && (
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, background: 'var(--bg-surface-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>사료 해제:</strong> {activeSource.notes}
                  </div>
                )}

                {/* Action button: Navigate to Artifact in Atlas */}
                {activeSource.artifactId && (
                  <button
                    onClick={() => onNavigateArtifact && onNavigateArtifact(activeSource.artifactId!)}
                    className="button button-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.84rem',
                      padding: '0.65rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      cursor: 'pointer'
                    }}
                  >
                    아틀라스 유물 뷰어로 이동 <ChevronRight size={16} />
                  </button>
                )}
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '2rem 0' }}>
                등록된 1차 사료 정보를 불러오는 중입니다.
              </div>
            )}

            {/* RELATED ATLAS ARTIFACTS SECTION */}
            {currentEssay.relatedArtifactIds && currentEssay.relatedArtifactIds.length > 0 && (
              <div style={{ marginTop: '1.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, fontFamily: 'var(--font-cinzel)', marginBottom: '0.65rem' }}>
                  연관 아틀라스 유물 ({currentEssay.relatedArtifactIds.length})
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {currentEssay.relatedArtifactIds.map((artId) => {
                    const art = ARTIFACTS.find((a) => a.id === artId);
                    if (!art) return null;
                    return (
                      <div
                        key={art.id}
                        onClick={() => onNavigateArtifact && onNavigateArtifact(art.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.6rem 0.75rem',
                          background: 'var(--bg-surface-elevated)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-color)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                        className="card-hover"
                      >
                        <div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {art.titleKo}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {art.titleNative} • {art.dateBasis}
                          </div>
                        </div>
                        <ChevronRight size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

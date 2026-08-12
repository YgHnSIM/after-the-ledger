import { ARTIFACTS } from '../data/artifacts';
import { CIVILIZATIONS } from '../data/civilizations';
import { LARGE_TEXT_DEFINITIONS, PRESERVATION_BIAS_DATA } from '../data/essays';
import { ArtifactRecord, GenreCategory, ConfidenceLevel } from '../types';
import { Sliders, Filter, Eye, Layers, Scroll, ArrowRight, ShieldCheck, X, BookOpen, AlertTriangle } from 'lucide-react';
import React, { useState } from 'react';

interface CompareViewProps {
  onSelectArtifact: (artifactId: string) => void;
}

export const CompareView: React.FC<CompareViewProps> = ({ onSelectArtifact }) => {
  const [timeMode, setTimeMode] = useState<'absolute' | 'relative'>('absolute');
  const [selectedGenre, setSelectedGenre] = useState<GenreCategory | 'all'>('all');
  const [selectedConfidence, setSelectedConfidence] = useState<ConfidenceLevel | 'all'>('all');
  const [activeLargeTextDef, setActiveLargeTextDef] = useState<string>('single-work');
  const [showPreservationBiasOverlay, setShowPreservationBiasOverlay] = useState<boolean>(false);
  const [selectedArtifactDrawer, setSelectedArtifactDrawer] = useState<ArtifactRecord | null>(null);

  // Genre labels
  const genres: { id: GenreCategory | 'all'; label: string }[] = [
    { id: 'all', label: '모든 장르' },
    { id: 'economic-admin', label: '경제·행정' },
    { id: 'knowledge-lexical', label: '지식·목록·교육' },
    { id: 'royal-monumental', label: '왕권·기념·외교' },
    { id: 'religious-funerary', label: '종교·장례·제의' },
    { id: 'law-codes', label: '법·규범' },
    { id: 'epic-poetry', label: '서사·시·문학' },
    { id: 'personal-letters', label: '편지·일상·유희' },
  ];

  // Filter artifacts
  const filteredArtifacts = ARTIFACTS.filter((a) => {
    if (selectedGenre !== 'all' && a.genre !== selectedGenre) return false;
    if (selectedConfidence !== 'all' && a.confidence !== selectedConfidence) return false;
    return true;
  });

  const activeDefObj = LARGE_TEXT_DEFINITIONS.find((d) => d.id === activeLargeTextDef) || LARGE_TEXT_DEFINITIONS[0];

  const getCivArtifacts = (civId: string) => filteredArtifacts.filter((a) => a.civilization === civId);

  return (
    <div className="main-container">
      {/* HEADER & CONTROLS */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">고대 문자문화 비교 동기화 아틀라스</h1>
        <p className="section-subtitle">
          네 문명과 우가리트 통제 사례의 시간축, 텍스트 형태, 보존 편향, 연구 가설을 나란히 대조합니다.
        </p>

        {/* PRIMARY CONTROLS TOOLBAR */}
        <div
          className="card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            background: 'var(--bg-surface)',
            padding: '1.25rem'
          }}
        >
          {/* TOP ROW: TIME SCALE & OVERLAYS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                <Sliders size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                시간축 기준:
              </span>
              <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', padding: '0.2rem', border: '1px solid var(--border-color)' }}>
                <button
                  className={`btn btn-sm ${timeMode === 'absolute' ? 'btn-primary' : ''}`}
                  onClick={() => setTimeMode('absolute')}
                  style={{ border: 'none' }}
                >
                  절대 연대 (BCE 3400 ~ 300)
                </button>
                <button
                  className={`btn btn-sm ${timeMode === 'relative' ? 'btn-primary' : ''}`}
                  onClick={() => setTimeMode('relative')}
                  style={{ border: 'none' }}
                >
                  상대 연대 (t=0 문자 수용 시점)
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                className={`btn btn-sm ${showPreservationBiasOverlay ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setShowPreservationBiasOverlay(!showPreservationBiasOverlay)}
              >
                <Eye size={15} />
                <span>보존 편향 레이어 {showPreservationBiasOverlay ? '켜짐' : '꺼짐'}</span>
              </button>
            </div>
          </div>

          {/* GENRE FILTERS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginRight: '0.5rem' }}>
              <Filter size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> 장르 필터:
            </span>
            {genres.map((g) => (
              <button
                key={g.id}
                className={`btn btn-sm ${selectedGenre === g.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedGenre(g.id)}
                style={{ padding: '0.25rem 0.65rem', fontSize: '0.82rem' }}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* CONFIDENCE FILTER */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.82rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)', marginRight: '0.5rem' }}>
              확실성 등급:
            </span>
            <button
              className={`btn btn-sm ${selectedConfidence === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedConfidence('all')}
              style={{ padding: '0.2rem 0.5rem' }}
            >
              전체
            </button>
            <button
              className={`status-badge status-sure ${selectedConfidence === 'sure' ? 'active' : ''}`}
              onClick={() => setSelectedConfidence(selectedConfidence === 'sure' ? 'all' : 'sure')}
              style={{ cursor: 'pointer' }}
            >
              확실 (Sure)
            </button>
            <button
              className={`status-badge status-likely ${selectedConfidence === 'likely' ? 'active' : ''}`}
              onClick={() => setSelectedConfidence(selectedConfidence === 'likely' ? 'all' : 'likely')}
              style={{ cursor: 'pointer' }}
            >
              유력 (Likely)
            </button>
            <button
              className={`status-badge status-debated ${selectedConfidence === 'debated' ? 'active' : ''}`}
              onClick={() => setSelectedConfidence(selectedConfidence === 'debated' ? 'all' : 'debated')}
              style={{ cursor: 'pointer' }}
            >
              논쟁 중 (Debated)
            </button>
          </div>
        </div>
      </div>

      {/* "LARGE TEXT" DEFINITION TOGGLE PANEL */}
      <section className="card" style={{ marginBottom: '2rem', background: 'var(--bg-surface-elevated)', borderLeft: '4px solid #1d4ed8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Layers size={18} style={{ color: '#1d4ed8' }} />
          <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
            “거대 텍스트” 정의 전환기 (Large Text Definition Toggle)
          </h3>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          “무엇이 가장 이른 거대 텍스트인가?”라는 질문은 정의 기준에 따라 결과가 달라집니다. 아래 7개 기준을 전환해보세요.
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {LARGE_TEXT_DEFINITIONS.map((def) => (
            <button
              key={def.id}
              className={`btn btn-sm ${activeLargeTextDef === def.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveLargeTextDef(def.id)}
            >
              {def.nameKo}
            </button>
          ))}
        </div>

        {/* ACTIVE DEFINITION INSIGHT CARD */}
        <div style={{ background: 'var(--bg-surface)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>선택된 기준: {activeDefObj.nameKo}</span>
            <span className="status-badge status-sure">최우선 문명: {activeDefObj.winnerCivilization}</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>영향 및 평가:</strong> {activeDefObj.impactExplanation} (대표 유물: <em>{activeDefObj.exampleArtifact}</em>)
          </p>
        </div>
      </section>

      {/* PRESERVATION BIAS OVERLAY NOTICE (WHEN TURNED ON) */}
      {showPreservationBiasOverlay && (
        <section className="card" style={{ marginBottom: '2rem', background: '#fef3c7', borderColor: '#fde68a', color: '#78350f' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            <AlertTriangle size={20} />
            <span>고고학적 보존 편향 레이어 (Preservation Bias Overlay Active)</span>
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1rem' }}>
            아래 타임라인에서 <strong>점토판(메소포타미아·우가리트)</strong>은 화재 시 불에 구워져 수만 점이 살아남은 반면, <strong>파피루스(이집트)</strong>와 <strong>가죽 두루마리(이스라엘)</strong>는 습기 차 찬 토양에서 부식되었습니다. 타임라인 상의 빈 공간은 "당시 기록이 존재하지 않았음"이 아니라 "매체가 부식되어 소멸했음"을 시뮬레이션합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.8rem' }}>
            {PRESERVATION_BIAS_DATA.map((bias) => (
              <div key={bias.material} style={{ background: 'rgba(255,255,255,0.7)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontWeight: 700 }}>{bias.material}</div>
                <div>생존율: {bias.survivalRate}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>{bias.biasImpact}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SYNCHRONIZED MULTI-LANE TIMELINE */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>
            문명별 동기화 타임라인 레인 (Synchronized Lanes)
          </h2>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            총 {filteredArtifacts.length}개 유물 레코드 정렬됨
          </span>
        </div>

        {/* CHRONOLOGICAL VISUAL RULER BAR */}
        <div className="card" style={{ marginBottom: '1.5rem', background: 'var(--bg-surface-elevated)', padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'var(--font-cinzel)', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span>c. 3400 BCE (우루크)</span>
            <span>c. 2500 BCE (피라미드)</span>
            <span>c. 1400 BCE (Linear B/우가리트)</span>
            <span>c. 800 BCE (알파벳)</span>
            <span>c. 300 BCE (사해문서)</span>
          </div>
          <div style={{ position: 'relative', height: '8px', background: 'var(--border-color)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '0%', width: '100%', height: '100%', background: 'linear-gradient(90deg, #c85a24, #107e84 35%, #1e40af 65%, #6b21a8 85%, #d97706 100%)', opacity: 0.85 }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.values(CIVILIZATIONS).map((civ) => {
            const artifacts = getCivArtifacts(civ.id);
            return (
              <div
                key={civ.id}
                className="card"
                style={{
                  borderTop: `4px solid ${civ.accentColor}`,
                  background: 'var(--bg-surface)'
                }}
              >
                {/* LANE HEADER */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <div>
                    <span className={`civ-tag civ-${civ.id}`} style={{ marginRight: '0.5rem' }}>
                      {civ.nameKo}
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      문자 도입: {civ.scriptEmergenceBCE > 0 ? `BCE ${civ.scriptEmergenceBCE}년경` : `${civ.scriptEmergenceBCE}`} ({civ.scriptName})
                    </span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {artifacts.length}개 유물 레코드 표시 중
                  </span>
                </div>

                {/* ARTIFACT ITEMS IN LANE */}
                {artifacts.length === 0 ? (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', padding: '1rem 0' }}>
                    선택한 필터 조건에 해당하는 유물이 없습니다.
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                    {artifacts.map((artifact) => {
                      const relativeYears = civ.scriptEmergenceBCE - artifact.dateStartBCE;
                      return (
                        <div
                          key={artifact.id}
                          className="card card-hover"
                          onClick={() => setSelectedArtifactDrawer(artifact)}
                          style={{
                            padding: '1rem',
                            cursor: 'pointer',
                            background: 'var(--bg-card)',
                            borderLeft: `3px solid ${civ.accentColor}`
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                            <span className={`status-badge status-${artifact.confidence}`}>
                              {artifact.confidence === 'sure' && '확실'}
                              {artifact.confidence === 'likely' && '유력'}
                              {artifact.confidence === 'debated' && '논쟁 중'}
                              {artifact.confidence === 'unknown' && '알 수 없음'}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              {timeMode === 'absolute'
                                ? `BCE ${artifact.dateStartBCE}년경`
                                : `t+${Math.max(0, relativeYears)}년`}
                            </span>
                          </div>

                          <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
                            {artifact.titleKo}
                          </h4>

                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                            {artifact.genreLabel} • {artifact.materialLabel}
                          </div>

                          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {artifact.summary}
                          </p>

                          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.5rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            <span>단위: {artifact.textUnitLabel}</span>
                            <ArrowRight size={12} style={{ color: civ.accentColor }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ARTIFACT SIDE DRAWER MODAL */}
      {selectedArtifactDrawer && (
        <div className="modal-overlay" onClick={() => setSelectedArtifactDrawer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span className={`civ-tag civ-${selectedArtifactDrawer.civilization}`} style={{ marginBottom: '0.5rem' }}>
                  {CIVILIZATIONS[selectedArtifactDrawer.civilization]?.nameKo}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.25rem' }}>
                  {selectedArtifactDrawer.titleKo}
                </h2>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  {selectedArtifactDrawer.titleNative}
                </div>
              </div>
              <button className="icon-btn" onClick={() => setSelectedArtifactDrawer(null)}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
              <div><strong>문자체계:</strong> {selectedArtifactDrawer.script}</div>
              <div><strong>기록 언어:</strong> {selectedArtifactDrawer.language}</div>
              <div><strong>기록 매체:</strong> {selectedArtifactDrawer.materialLabel}</div>
              <div><strong>장르 분류:</strong> {selectedArtifactDrawer.genreLabel}</div>
              <div><strong>유물 제작 연대:</strong> {selectedArtifactDrawer.witnessDateBCE}</div>
              <div><strong>확실성 수준:</strong> {selectedArtifactDrawer.confidence} ({selectedArtifactDrawer.confidenceReason})</div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>상세 해설 (Historical Context)</h4>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {selectedArtifactDrawer.description}
              </p>
            </div>

            <div style={{ marginBottom: '1.25rem', background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>보존 특이사항 & 편향 (Preservation Notes)</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                {selectedArtifactDrawer.preservationNotes}
              </p>
            </div>

            {selectedArtifactDrawer.sources.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>A/B급 출처 및 인용 (Sources)</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                  {selectedArtifactDrawer.sources.map((src) => (
                    <li key={src.id} style={{ marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                      <strong>[{src.gradeLabel}]</strong> {src.title} — {src.authorOrInstitution} {src.year && `(${src.year})`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

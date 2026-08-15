import React, { useState, useRef } from 'react';
import { CIVILIZATIONS } from '../data/civilizations';
import { COMPARATIVE_ESSAYS } from '../data/essays';
import { ArrowRight, Clock, ShieldCheck, Scale, Scroll, BookOpen, Sparkles, HelpCircle } from 'lucide-react';

interface EventNode {
  id: string;
  yearBCE: number;
  title: string;
  detail: string;
}

interface CivTimeline {
  id: string;
  name: string;
  icon: string;
  colorVar: string;
  startBCE: number;
  endBCE: number;
  spanText: string;
  events: EventNode[];
  curatorNote: string;
}

const TIMELINE_DATA: CivTimeline[] = [
  {
    id: 'mesopotamia',
    name: '메소포타미아',
    icon: '🏛️',
    colorVar: 'var(--civ-mesopotamia)',
    startBCE: 3300,
    endBCE: 650,
    spanText: 'c. 3300 ~ 650 BCE',
    events: [
      { id: 'mes-1', yearBCE: 3300, title: '우루크 IV기 점토판', detail: '인류 최초 행정 회계 기록 및 수메르 서기 지식 체계 형성 (DCCLT 데이터)' },
      { id: 'mes-2', yearBCE: 2600, title: '어휘목록 (ED Lu A)', detail: '사물·직업 분류 표준 어휘집 및 서기관 관료 교육 코퍼스' },
      { id: 'mes-3', yearBCE: 650, title: '길가메시 서사시 완본', detail: '아슈르바니팔 도서관 12번째 점토판 완본 서사시 전승' }
    ],
    curatorNote: '우루크 IV기 회계 점토판 출토와 동시에 사물·직업 분류 어휘목록이 병존하여 수천 년간 서기관 관료 교육 지식체계로 지속 발전함.'
  },
  {
    id: 'egypt',
    name: '이집트',
    icon: '⚱️',
    colorVar: 'var(--civ-egypt)',
    startBCE: 3250,
    endBCE: 1250,
    spanText: 'c. 3250 ~ 1250 BCE',
    events: [
      { id: 'egy-1', yearBCE: 3250, title: '아비도스 U-j 표찰', detail: '선왕조 왕권 세입 세출 및 상징 표찰' },
      { id: 'egy-2', yearBCE: 2350, title: '피라미드 텍스트', detail: '제5왕조 우나스 피라미드 매장실 벽면 성각문자 영혼 제의 刻文' },
      { id: 'egy-3', yearBCE: 1250, title: '사자의 서 파피루스', detail: '신왕조 파피루스 코퍼스 및 사후세계 영혼 가이드' }
    ],
    curatorNote: '왕권 표상 및 영혼 제의의 비공개성이 결합하여 피라미드 매장실 벽면 刻文 및 사자의 서 파피루스 전통으로 확립됨.'
  },
  {
    id: 'ugarit',
    name: '우가리트',
    icon: '⚓',
    colorVar: 'var(--civ-ugarit)',
    startBCE: 1400,
    endBCE: 1180,
    spanText: 'c. 1400 ~ 1180 BCE',
    events: [
      { id: 'uga-1', yearBCE: 1400, title: '30자 알파벳 점토판', detail: '세계 최초 알파벳 순서(Abgad) 점토판 서사시' },
      { id: 'uga-2', yearBCE: 1180, title: '도시 화재 파괴 레이어', detail: '해양민족 침공 청동기 붕괴기 도시 멸망' }
    ],
    curatorNote: '동일한 점토 매체에서 현지어 서사시용 30자 알파벳과 외교통상용 음절 쐐기문자가 명확한 기능 분업을 이룬 연구 대조 사례.'
  },
  {
    id: 'greece',
    name: '그리스',
    icon: '🦉',
    colorVar: 'var(--civ-greece)',
    startBCE: 1400,
    endBCE: 300,
    spanText: 'c. 1400 ~ 300 BCE',
    events: [
      { id: 'gre-1', yearBCE: 1400, title: '미케네 Linear B 점토판', detail: '음절 문자 관료 행정 기록 (크노소스/필로스)' },
      { id: 'gre-2', yearBCE: 750, title: '디필론 비문/네스토르 잔', detail: '알파벳 도입 후 35년 만의 서사시 및 유희시 비문' }
    ],
    curatorNote: '미케네 궁전 행정 붕괴 후 백년의 문자 공백기를 거쳐, 모음 표기 음성 알파벳 수용 35년 만에 유희시 비문으로 대중 확산.'
  },
  {
    id: 'israel',
    name: '이스라엘·유다',
    icon: '✡️',
    colorVar: 'var(--civ-israel)',
    startBCE: 950,
    endBCE: 150,
    spanText: 'c. 950 ~ 150 BCE',
    events: [
      { id: 'isr-1', yearBCE: 925, title: '게제르 달력', detail: '고대 히브리 음설 알파벳 농경 절기 파피루스/석판' },
      { id: 'isr-2', yearBCE: 600, title: '케테프 힌놈 은제 부적', detail: '현존 최공 히브리 성서 아론의 축복 구절 刻文' },
      { id: 'isr-3', yearBCE: 150, title: '쿰란 사해문서 롤', detail: '히브리 성서 전승 사본 코퍼스' }
    ],
    curatorNote: '사본 생산 및 편집 연대, 구전 전승 인대의 4중 구조 속에서 텍스트의 유연성과 경전화 정경화 과정이 공존함.'
  }
];

const bceToPct = (yearBCE: number): number => {
  return Math.max(0, Math.min(100, ((3400 - yearBCE) / 3300) * 100));
};

const RULER_MARKS = [
  { label: '3400 BCE', year: 3400 },
  { label: '3000 BCE', year: 3000 },
  { label: '2500 BCE', year: 2500 },
  { label: '2000 BCE', year: 2000 },
  { label: '1500 BCE', year: 1500 },
  { label: '1000 BCE', year: 1000 },
  { label: '500 BCE', year: 500 },
  { label: '100 BCE', year: 100 }
];

interface EraSpotlight {
  id: string;
  yearBCE: number;
  label: string;
  badge: string;
  title: string;
  period: string;
  curatorInsight: string;
  keyArtifacts: string[];
}

const ERA_SPOTLIGHTS: EraSpotlight[] = [
  {
    id: 'era-3400',
    yearBCE: 3400,
    label: '3400 BCE 문자탄생전야',
    badge: '🏛️ 제1기',
    title: '문자의 발생과 회계·기록 혁명',
    period: 'c. 3400 ~ 3100 BCE',
    curatorInsight: '메소포타미아 우루크 IV기 점토판과 이집트 아비도스 U-j 표찰이 동시대에 출현하며, 수량 계수·세입 관리 및 왕권 상징을 위한 인류 최초의 문자 시스템이 성립된 시대입니다.',
    keyArtifacts: ['우루크 IV기 점토판 (수메르)', '아비도스 U-j 표찰 (이집트)']
  },
  {
    id: 'era-2500',
    yearBCE: 2500,
    label: '2500 BCE 피라미드·어휘목록',
    badge: '📜 제2기',
    title: '거대 문헌 집성 & 지식 분류 코퍼스',
    period: 'c. 2600 ~ 2350 BCE',
    curatorInsight: '수메르 슈루팍/파라 어휘목록(ED Lu A)을 통한 전문 서기관 양성과 제5왕조 우나스 피라미드 텍스트의 종교·제의 성각문자가 대규모로 축적되며 국가 관료제의 문자 독점이 완성된 시대입니다.',
    keyArtifacts: ['어휘목록 ED Lu A (수메르)', '피라미드 텍스트 (이집트)']
  },
  {
    id: 'era-1400',
    yearBCE: 1400,
    label: '1400 BCE 청동기/Linear B/우가리트',
    badge: '⚓ 제3기',
    title: '후기 청동기 국제 외교 & 음절/알파벳 분업',
    period: 'c. 1400 ~ 1180 BCE',
    curatorInsight: '미케네 궁전의 Linear B 음절문자 관료 행정과 우가리트의 30자 설형 알파벳 서사시·외교 점토판이 공존한 시대로, 지중해 전역의 활발한 교역과 문자 분업이 정점에 달했습니다.',
    keyArtifacts: ['미케네 Linear B 점토판 (그리스)', '30자 알파벳 점토판 (우가리트)']
  },
  {
    id: 'era-750',
    yearBCE: 750,
    label: '750 BCE 알파벳 혁명 & 서사시',
    badge: '✒️ 제4기',
    title: '음성 알파벳 확산과 서사시·유희시 비문',
    period: 'c. 750 ~ 600 BCE',
    curatorInsight: '모음 표기를 완성한 고대 그리스 알파벳이 디필론 비문과 네스토르 잔 등 유희·가창 서사시로 대중 확산되고, 이스라엘 은제 부적 등 사적 비문이 刻文되며 문자가 관료 독점을 탈피한 시대입니다.',
    keyArtifacts: ['디필론 비문/네스토르 잔 (그리스)', '케테프 힌놈 은제 부적 (이스라엘)']
  },
  {
    id: 'era-150',
    yearBCE: 150,
    label: '150 BCE 사해문서 & 경전화',
    badge: '✡️ 제5기',
    title: '사해문서 전승과 고대 텍스트 정경화',
    period: 'c. 300 ~ 150 BCE',
    curatorInsight: '쿰란 사해문서 두루마리와 알렉산드리아 도서관의 텍스트 교정 전통 속에서 히브리 성서와 호메로스 서사시가 최종 판본으로 집대성되고 정경화(Canonization)된 시대입니다.',
    keyArtifacts: ['쿰란 사해문서 롤 (이스라엘)', '길가메시 서사시 완본 (메소포타미아)']
  }
];

type EventTier = 'tier-top-near' | 'tier-top-far' | 'tier-bottom-near' | 'tier-bottom-far';

const computeAbsoluteEventTiers = (
  events: EventNode[],
  pctCalc: (yearBCE: number) => number
): Map<string, { tierClass: EventTier; isTop: boolean }> => {
  const tierMap = new Map<string, { tierClass: EventTier; isTop: boolean }>();

  let lastTopNearPct = -999;
  let lastTopFarPct = -999;
  let lastBottomNearPct = -999;
  let lastBottomFarPct = -999;

  const SAFE_GAP = 14;

  events.forEach((ev, idx) => {
    const pct = pctCalc(ev.yearBCE);
    const preferTop = idx % 2 === 0;

    let chosenTier: EventTier;

    if (preferTop) {
      if (pct - lastTopNearPct >= SAFE_GAP) {
        chosenTier = 'tier-top-near';
        lastTopNearPct = pct;
      } else if (pct - lastTopFarPct >= SAFE_GAP) {
        chosenTier = 'tier-top-far';
        lastTopFarPct = pct;
      } else if (pct - lastBottomNearPct >= SAFE_GAP) {
        chosenTier = 'tier-bottom-near';
        lastBottomNearPct = pct;
      } else {
        chosenTier = 'tier-bottom-far';
        lastBottomFarPct = pct;
      }
    } else {
      if (pct - lastBottomNearPct >= SAFE_GAP) {
        chosenTier = 'tier-bottom-near';
        lastBottomNearPct = pct;
      } else if (pct - lastBottomFarPct >= SAFE_GAP) {
        chosenTier = 'tier-bottom-far';
        lastBottomFarPct = pct;
      } else if (pct - lastTopNearPct >= SAFE_GAP) {
        chosenTier = 'tier-top-near';
        lastTopNearPct = pct;
      } else {
        chosenTier = 'tier-top-far';
        lastTopFarPct = pct;
      }
    }

    const isTop = chosenTier.startsWith('tier-top');
    tierMap.set(ev.id, { tierClass: chosenTier, isTop });
  });

  return tierMap;
};

export const UnifiedTimelineMatrix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);
  const [activeEraId, setActiveEraId] = useState<string | null>('era-3400');
  const [needlePct, setNeedlePct] = useState<number | null>(bceToPct(3400));
  const [hoveredYear, setHoveredYear] = useState<number | null>(3400);
  const [selectedEvent, setSelectedEvent] = useState<{ civName: string; event: EventNode } | null>(null);

  const activeEra = ERA_SPOTLIGHTS.find((e) => e.id === activeEraId) || null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tracksRef.current) return;
    const rect = tracksRef.current.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const pct = (offsetX / rect.width) * 100;
    setNeedlePct(pct);

    const year = Math.round(3400 - (pct / 100) * 3300);
    setHoveredYear(year);
  };

  const handleMouseLeave = () => {
    if (activeEra) {
      setNeedlePct(bceToPct(activeEra.yearBCE));
      setHoveredYear(activeEra.yearBCE);
    } else {
      setNeedlePct(null);
      setHoveredYear(null);
    }
  };

  const jumpToEra = (era: EraSpotlight) => {
    if (activeEraId === era.id) {
      // Toggle off spotlight
      setActiveEraId(null);
      setNeedlePct(null);
      setHoveredYear(null);
      return;
    }

    setActiveEraId(era.id);
    setSelectedEvent(null);
    const pct = bceToPct(era.yearBCE);
    setNeedlePct(pct);
    setHoveredYear(era.yearBCE);

    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const stickyHeader = container.querySelector('.matrix-civ-label-col') as HTMLElement | null;
    const stickyWidth = stickyHeader ? stickyHeader.offsetWidth : 180;
    
    // Total track width inside scroll container
    const totalScrollWidth = container.scrollWidth;
    const trackWidth = Math.max(1, totalScrollWidth - stickyWidth);
    
    // Center within visible track viewport
    const visibleViewportWidth = Math.max(1, container.clientWidth - stickyWidth);
    const targetScrollLeft = (pct / 100) * trackWidth - (visibleViewportWidth / 2);
    
    const maxScrollLeft = Math.max(0, totalScrollWidth - container.clientWidth);
    const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, targetScrollLeft));

    container.scrollTo({
      left: clampedScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className="unified-timeline-wrapper">
      {/* MOBILE / QUICK JUMP CHIPS BAR */}
      <div className="era-quick-chips-bar">
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Sparkles size={14} style={{ color: 'var(--accent-gold, #eab308)' }} /> 주요 시대 빠른 탐색:
        </span>
        {ERA_SPOTLIGHTS.map((era) => {
          const isActive = activeEraId === era.id;
          return (
            <button
              key={era.id}
              className={`era-chip-btn ${isActive ? 'active' : ''}`}
              onClick={() => jumpToEra(era)}
            >
              <span>{era.label}</span>
            </button>
          );
        })}
      </div>

      {/* HORIZONTALLY SCROLLABLE TIMELINE MATRIX CANVAS */}
      <div className="timeline-matrix-scroll-container" ref={scrollRef}>
        <div className="timeline-matrix-inner">
          {/* HEADER RULER ROW */}
          <div className="matrix-ruler-row">
            <div className="matrix-civ-label-col">
              <span>문명 및 시대 스케일</span>
            </div>
            <div className="matrix-tracks-area">
              <div className="matrix-ruler-ticks">
                {RULER_MARKS.map((mark) => {
                  const pct = bceToPct(mark.year);
                  return (
                    <div
                      key={mark.year}
                      className="matrix-ruler-mark-item"
                      style={{
                        left: `${pct}%`,
                        transform: pct === 0 ? 'translateX(0%)' : pct >= 95 ? 'translateX(-100%)' : 'translateX(-50%)'
                      }}
                    >
                      <span>{mark.label}</span>
                      <div className="matrix-ruler-tick-line" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MAIN TRACK MATRIX BODY */}
          <div
            className="matrix-lanes-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* OVERLAYS (Prescript zone, Vertical grid lines, Needle) */}
            <div className="matrix-track-interactive-overlay" ref={tracksRef}>
              {/* PRE-SCRIPT ERA ZONE (3400~3300 BCE) */}
              <div className="matrix-prescript-zone">
                <span className="prescript-tag">문자 도입 전야</span>
              </div>

              {/* VERTICAL GRID LINES */}
              {RULER_MARKS.map((mark) => (
                <div
                  key={`grid-${mark.year}`}
                  className="matrix-grid-line"
                  style={{ left: `${bceToPct(mark.year)}%` }}
                />
              ))}

              {/* INTERACTIVE CROSSHAIR TIME NEEDLE */}
              {needlePct !== null && (
                <div className="matrix-time-needle" style={{ left: `${needlePct}%` }}>
                  <div
                    className="matrix-time-needle-head"
                    style={{
                      transform:
                        needlePct < 10
                          ? 'translateX(0%)'
                          : needlePct > 90
                          ? 'translateX(-100%)'
                          : 'translateX(-50%)'
                    }}
                  >
                    {hoveredYear !== null
                      ? hoveredYear > 3300
                        ? `c. ${hoveredYear} BCE (문자 전야)`
                        : `c. ${hoveredYear} BCE`
                      : ''}
                  </div>
                </div>
              )}
            </div>

            {/* CIVILIZATION LANES */}
            {TIMELINE_DATA.map((civ) => {
              const startPct = bceToPct(civ.startBCE);
              const endPct = bceToPct(civ.endBCE);
              const barWidthPct = endPct - startPct;
              const tiers = computeAbsoluteEventTiers(civ.events, bceToPct);

              return (
                <div key={civ.id} className="matrix-lane-row">
                  <div className="matrix-lane-civ-header">
                    <div className="matrix-civ-name" style={{ color: civ.colorVar }}>
                      <span>{civ.icon}</span>
                      <span>{civ.name}</span>
                    </div>
                    <div className="matrix-civ-span">{civ.spanText}</div>
                  </div>

                  <div className="matrix-lane-track-body">
                    {/* SPAN BAR */}
                    <div
                      className="matrix-span-bar"
                      style={{
                        left: `${startPct}%`,
                        width: `${barWidthPct}%`,
                        background: `linear-gradient(90deg, ${civ.colorVar} 0%, rgba(255,255,255,0.15) 100%)`
                      }}
                    />

                    {/* EVENT CHIPS */}
                    {civ.events.map((ev) => {
                      const evPct = bceToPct(ev.yearBCE);
                      const isHovered = hoveredYear !== null && Math.abs(hoveredYear - ev.yearBCE) < 70;
                      const isSelected = selectedEvent?.event.id === ev.id;
                      const isSpotlighted = activeEra !== null && Math.abs(activeEra.yearBCE - ev.yearBCE) <= 300;
                      const tierInfo = tiers.get(ev.id) || { tierClass: 'tier-top-near', isTop: true };

                      let alignClass = 'align-center';
                      if (evPct < 8) {
                        alignClass = 'align-left';
                      } else if (evPct > 92) {
                        alignClass = 'align-right';
                      }

                      return (
                        <div
                          key={ev.id}
                          className={`matrix-stagger-chip ${tierInfo.tierClass} ${alignClass} ${isHovered || isSelected ? 'active' : ''} ${isSpotlighted ? 'spotlight-highlight' : ''}`}
                          style={{ left: `${evPct}%`, color: civ.colorVar }}
                          onClick={() => setSelectedEvent({ civName: civ.name, event: ev })}
                        >
                          {tierInfo.isTop ? (
                            <>
                              <div className="matrix-event-label-chip">
                                <span className="year-badge">{ev.yearBCE}BCE</span>
                                <span>{ev.title}</span>
                              </div>
                              <div className="matrix-event-stem" />
                              <div className="matrix-event-pin-dot" />
                            </>
                          ) : (
                            <>
                              <div className="matrix-event-pin-dot" />
                              <div className="matrix-event-stem" />
                              <div className="matrix-event-label-chip">
                                <span className="year-badge">{ev.yearBCE}BCE</span>
                                <span>{ev.title}</span>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HOVER / SELECTED EVENT DETAILS & CROSS-CIV COMPARISON HUD */}
      {selectedEvent ? (
        <div className="mobile-hud-sheet">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div>
              <span className="font-cinzel" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                {selectedEvent.civName} • c. {selectedEvent.event.yearBCE} BCE
              </span>
              <h4 style={{ margin: '0.2rem 0 0 0', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {selectedEvent.event.title}
              </h4>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setSelectedEvent(null)}
              style={{ padding: '0.2rem 0.5rem', fontSize: '0.78rem' }}
            >
              ✕ 닫기
            </button>
          </div>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {selectedEvent.event.detail}
          </p>
        </div>
      ) : activeEra ? (
        <div className="mobile-hud-sheet era-spotlight-hud">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="era-badge-tag">{activeEra.badge}</span>
                <span className="font-cinzel" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  {activeEra.period}
                </span>
              </div>
              <h4 style={{ margin: '0.3rem 0 0 0', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', fontWeight: 700 }}>
                {activeEra.title}
              </h4>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setActiveEraId(null);
                setNeedlePct(null);
                setHoveredYear(null);
              }}
              style={{ padding: '0.2rem 0.5rem', fontSize: '0.78rem' }}
            >
              ✕ 탐색 해제
            </button>
          </div>
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {activeEra.curatorInsight}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>🏛️ 동시대 대표 유물:</span>
            {activeEra.keyArtifacts.map((art, idx) => (
              <span key={idx} className="era-key-artifact-tag">
                {art}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

// ==========================================================================
// RELATIVE CHRONOLOGY (t=0 ELAPSED YEARS) TIMELINE MATRIX
// ==========================================================================

const relYearsToPct = (years: number): number => {
  if (years <= 0) return 0;
  if (years <= 100) {
    // 0 to 100 years -> 0% to 26% (gives ample breathing room for early dense milestones)
    return (years / 100) * 26;
  }
  if (years <= 500) {
    // 100 to 500 years -> 26% to 62%
    return 26 + ((years - 100) / 400) * 36;
  }
  // 500 to 1500 years -> 62% to 100%
  return Math.min(100, 62 + ((years - 500) / 1000) * 38);
};

const pctToRelYears = (pct: number): number => {
  if (pct <= 0) return 0;
  if (pct <= 26) {
    return Math.round((pct / 26) * 100);
  }
  if (pct <= 62) {
    return Math.round(100 + ((pct - 26) / 36) * 400);
  }
  return Math.round(500 + ((pct - 62) / 38) * 1000);
};

const RELATIVE_RULER_MARKS = [
  { label: 't = 0', years: 0 },
  { label: 't + 50년', years: 50 },
  { label: 't + 100년', years: 100 },
  { label: 't + 250년', years: 250 },
  { label: 't + 500년', years: 500 },
  { label: 't + 750년', years: 750 },
  { label: 't + 1000년', years: 1000 },
  { label: 't + 1500년+', years: 1500 }
];

interface RelativeSpotlight {
  id: string;
  targetYears: number;
  label: string;
  badge: string;
  title: string;
  periodSummary: string;
  curatorInsight: string;
  comparisonHighlight: string;
  keyArtifacts: string[];
}

const RELATIVE_SPOTLIGHTS: RelativeSpotlight[] = [
  {
    id: 'rel-greece-jump',
    targetYears: 35,
    label: '⚡ t+35년 그리스 문학 직행',
    badge: '⚡ 초고속 도약',
    title: '그리스 알파벳: 도입 35년 만의 서사·유희시 폭발',
    periodSummary: 't+35년 (c. 740 BCE) • 페니키아 모음 수용 직후',
    curatorInsight: 'BCE 775년 페니키아 모음 도입 후 불과 35년 만인 BCE 740년 디필론 도기 비문과 네스토르의 잔에 6보격 서사시 구절이 刻文되었습니다. 왕실 서기관의 독점 없이 귀족 연회(Symposion) 문화와 결합하여 대중적으로 폭발했습니다.',
    comparisonHighlight: '고대 문명 중 유일하게 행정 장부 단계를 건너뛰고 개인 가창·음주 유희시로 직행한 사례',
    keyArtifacts: ['디필론 도기 비문 (BCE 740)', '네스토르의 잔 (BCE 735)']
  },
  {
    id: 'rel-meso-lexical',
    targetYears: 0,
    label: '📜 t+0년 수메르 어휘목록 동시출현',
    badge: '📜 지식 분류',
    title: '메소포타미아: 문자 탄생과 동시에 직업·어휘목록 출현',
    periodSummary: 't=0년 (c. 3300 BCE) • 후기 우루크 IV기 층위',
    curatorInsight: '우루크 IV기(c. 3300 BCE) 점토판 층위에서는 경제 회계 점토판(85%)뿐 아니라 서기관 교육용 직업 표준목록인 ED Lu A(어휘목록 15%)가 동시대에 출토됩니다. 문자는 탄생 순간부터 관료 양성 교육과 일체화되었습니다.',
    comparisonHighlight: '단순 회계 장부뿐 아니라 서기관 학교 교육을 위한 표준 지식 분류 코퍼스가 t=0에 함께 탄생',
    keyArtifacts: ['우루크 IV기 행정판 (BCE 3300)', 'ED Lu A 직업목록 (BCE 3300)']
  },
  {
    id: 'rel-israel-canon',
    targetYears: 450,
    label: '✨ t+450년 이스라엘 포로기 경전화',
    badge: '✨ 정체성 보존',
    title: '이스라엘·유다: 국가 붕괴의 위기 속에서 성서 경전 집대성',
    periodSummary: 't+450년 (c. 500 BCE) • 바빌론 포로기/페르시아기',
    curatorInsight: '초기 게제르 달력(c. 925 BCE)의 소박한 농경 기록에서 출발하여, BCE 586년 남유다 멸망과 바빌론 유수라는 초유의 위기 속에서 국가와 성전을 잃은 공동체가 문자로써 신앙과 역사를 보존하기 위해 신명기계 역사서와 토라를 경전으로 편찬했습니다.',
    comparisonHighlight: '농경 달력(t+25)에서 제사장 부적(t+350)을 거쳐, 바빌론 포로기(t+450)라는 망국 위기 속에서 경전화 완성',
    keyArtifacts: ['게제르 달력 (BCE 925)', '케테프 힌놈 부적 (BCE 600)', '쿰란 사해문서 (BCE 150)']
  },
  {
    id: 'rel-egypt-monument',
    targetYears: 900,
    label: '🏛️ t+900년 이집트 피라미드 종교문헌화',
    badge: '🏛️ 영생 기념물',
    title: '이집트: 900년에 걸친 왕권 기념과 영생 텍스트 집성',
    periodSummary: 't+900년 (c. 2350 BCE) • 제5왕조 우나스 피라미드',
    curatorInsight: '아비도스 U-j 묘의 초기 상아 꼬리표(c. 3250 BCE) 이후, 문자는 약 900년 동안 왕의 이름과 승전 도상, 신전 제의에 독점적으로 사용되다가 제5왕조 우나스 피라미드(c. 2350 BCE) 내부 전체를 성각문자 영생 주문으로 가득 채우는 기념비적 종교 텍스트로 완성되었습니다.',
    comparisonHighlight: '초기 세무 꼬리표(t=0)에서 나르메르 팔레트(t+250)를 거쳐 거대 피라미드 매장실 주문(t+900)으로 완결',
    keyArtifacts: ['아비도스 U-j 표찰 (BCE 3250)', '나르메르 팔레트 (BCE 3000)', '우나스 피라미드 텍스트 (BCE 2350)']
  }
];

interface RelativeEventNode {
  id: string;
  elapsedYears: number;
  title: string;
  actualBCE: string;
  stage: string;
  detail: string;
}

interface RelativeCivData {
  id: string;
  name: string;
  t0Origin: string;
  icon: string;
  colorVar: string;
  maxElapsedYears: number;
  events: RelativeEventNode[];
}

const RELATIVE_TIMELINE_DATA: RelativeCivData[] = [
  {
    id: 'greece',
    name: '그리스 (알파벳 혁신)',
    t0Origin: 't=0: c. 775 BCE (알파벳 도입)',
    icon: '🏛️',
    colorVar: 'var(--civ-greece)',
    maxElapsedYears: 500,
    events: [
      {
        id: 'gr-0',
        elapsedYears: 0,
        title: '알파벳 체계 수용',
        actualBCE: 'c. 775 BCE',
        stage: 't=0 (체계 수용)',
        detail: '페니키아 자음 전용 아브자드에서 그리스어 모음 음소를 표기하는 완전 음소 알파벳 체계 창안.'
      },
      {
        id: 'gr-35',
        elapsedYears: 35,
        title: '디필론 비문·네스토르 잔',
        actualBCE: 'c. 740 BCE',
        stage: 't+35년 (유희시 직행)',
        detail: '도입 불과 35년 만에 도기 위에 음주와 춤 경연을 노래하는 6보격 유희 서사시 刻文.'
      },
      {
        id: 'gr-75',
        elapsedYears: 75,
        title: '호메로스 서사시 고정',
        actualBCE: 'c. 700 BCE',
        stage: 't+75년 (서사시 집대성)',
        detail: '수백 년간 구전되던 《일리아스》와 《오뒷세이아》가 알파벳 문자로 최초 필사·고정.'
      },
      {
        id: 'gr-325',
        elapsedYears: 325,
        title: '고전기 비극·철학',
        actualBCE: 'c. 450 BCE',
        stage: 't+325년 (고전문학 만개)',
        detail: '아테네 민주정의 시민 비극 경연, 헤로도토스·투키디데스의 비판적 역사 서술 및 플라톤 철학.'
      }
    ]
  },
  {
    id: 'mesopotamia',
    name: '메소포타미아 (수메르)',
    t0Origin: 't=0: c. 3300 BCE (우루크 IV기)',
    icon: '🏛️',
    colorVar: 'var(--civ-mesopotamia)',
    maxElapsedYears: 1500,
    events: [
      {
        id: 'meso-0',
        elapsedYears: 0,
        title: '우루크 장부 & 직업목록',
        actualBCE: 'c. 3300 BCE',
        stage: 't=0 (경제회계 & 어휘목록 동시출현)',
        detail: '신전 곡물·가축 수량 출납 장부(85%)와 서기관 교육용 직업 위계 표준목록(ED Lu A, 15%)이 동시 출현.'
      },
      {
        id: 'meso-700',
        elapsedYears: 700,
        title: '슈루팍 잠언 (지혜문학)',
        actualBCE: 'c. 2600 BCE',
        stage: 't+700년 (초기 지혜문학)',
        detail: '파라 층위에서 출토된 인류 최초의 교훈 지혜문학 단편. 부자간의 훈계 전승.'
      },
      {
        id: 'meso-1200',
        elapsedYears: 1200,
        title: '우르남무 법전·슈기 찬가',
        actualBCE: 'c. 2100 BCE',
        stage: 't+1200년 (법전 및 왕실시)',
        detail: '우르 제3왕조 시기 왕권 정당성을 선포하는 최초의 성문법전과 신격화된 왕 찬양시.'
      },
      {
        id: 'meso-1500',
        elapsedYears: 1500,
        title: '길가메시 서사시 완본',
        actualBCE: 'c. 1200 BCE',
        stage: 't+1500년+ (대서사 완결)',
        detail: '신-레케-운닌니 사제에 의해 12개 점토판으로 집대성된 메소포타미아 불후의 영웅 서사시.'
      }
    ]
  },
  {
    id: 'israel',
    name: '이스라엘·유다',
    t0Origin: 't=0: c. 950 BCE (고대 히브리 문자)',
    icon: '📜',
    colorVar: 'var(--civ-israel)',
    maxElapsedYears: 850,
    events: [
      {
        id: 'isr-0',
        elapsedYears: 0,
        title: '고대 히브리 문자 분화',
        actualBCE: 'c. 950 BCE',
        stage: 't=0 (알파벳 정착)',
        detail: '페니키아 서북셈어 공통 서체에서 남부 레반트 고유의 고대 히브리 서체로 독자 분화.'
      },
      {
        id: 'isr-25',
        elapsedYears: 25,
        title: '게제르 농경 달력',
        actualBCE: 'c. 925 BCE',
        stage: 't+25년 (농경 습자판)',
        detail: '월별 농사 주기를 기록한 석회암 판. 지방 서기관 학교의 습자 훈련용 추정.'
      },
      {
        id: 'isr-350',
        elapsedYears: 350,
        title: '케테프 힌놈 은제 부적',
        actualBCE: 'c. 600 BCE',
        stage: 't+350년 (제의/호신문)',
        detail: '민수기 제사장 축복문이 초소형 은판에 음각된 사적 부적. 현존 최고(最古)의 성서 구절.'
      },
      {
        id: 'isr-450',
        elapsedYears: 450,
        title: '포로기 성서 본문 편집',
        actualBCE: 'c. 500 BCE',
        stage: 't+450년 (신학적 경전화)',
        detail: '바빌론 유수 망국 위기 속에서 민족 정체성과 신앙을 수호하기 위한 역사서·토라 대규모 편집.'
      },
      {
        id: 'isr-800',
        elapsedYears: 800,
        title: '쿰란 사해문서 집대성',
        actualBCE: 'c. 150 BCE',
        stage: 't+800년 (성서 사본 전승)',
        detail: '사해 광야 동굴에서 발견된 히브리 성서 전권 사본과 종파 문서. 정경화의 결정적 물적 증거.'
      }
    ]
  },
  {
    id: 'egypt',
    name: '이집트',
    t0Origin: 't=0: c. 3250 BCE (아비도스 U-j)',
    icon: '🏺',
    colorVar: 'var(--civ-egypt)',
    maxElapsedYears: 1500,
    events: [
      {
        id: 'egy-0',
        elapsedYears: 0,
        title: '아비도스 U-j 묘 표찰',
        actualBCE: 'c. 3250 BCE',
        stage: 't=0 (세무 원산지)',
        detail: '기름 항아리에 부착된 상아 꼬리표. 왕실 조세 공납지의 명칭을 표음 기호로 표기.'
      },
      {
        id: 'egy-250',
        elapsedYears: 250,
        title: '나르메르 팔레트 (왕권)',
        actualBCE: 'c. 3000 BCE',
        stage: 't+250년 (왕권 도상)',
        detail: '상·하 이집트 통일 왕권의 군사적 승리와 신성한 권위를 과시하는 화장판 릴리프 비문.'
      },
      {
        id: 'egy-900',
        elapsedYears: 900,
        title: '우나스 피라미드 텍스트',
        actualBCE: 'c. 2350 BCE',
        stage: 't+900년 (영생 주문 刻文)',
        detail: '파라오의 사후 영생과 태양신 승천을 기원하는 종교 제의문이 피라미드 석벽 전체에 刻文.'
      },
      {
        id: 'egy-1300',
        elapsedYears: 1300,
        title: '시누헤 이야기 (문학)',
        actualBCE: 'c. 1950 BCE',
        stage: 't+1300년 (고전문학 서사)',
        detail: '망명 관료의 고난과 파라오의 은혜로 귀환하는 자전적 문학 서사. 이집트 세속 문학의 금자탑.'
      },
      {
        id: 'egy-1500',
        elapsedYears: 1500,
        title: '사자의 서 파피루스',
        actualBCE: 'c. 1250 BCE',
        stage: 't+1500년+ (파피루스 대중화)',
        detail: '심장 무게 달기 등 사후세계 오시리스 심판을 통과하기 위한 지침서가 파피루스 롤로 상용화.'
      }
    ]
  },
  {
    id: 'ugarit',
    name: '우가리트 (통제 사례)',
    t0Origin: 't=0: c. 1400 BCE (설형 알파벳)',
    icon: '⚓',
    colorVar: '#0ea5e9',
    maxElapsedYears: 220,
    events: [
      {
        id: 'ug-0',
        elapsedYears: 0,
        title: '30자 쐐기 알파벳 창안',
        actualBCE: 'c. 1400 BCE',
        stage: 't=0 (알파벳 발명)',
        detail: '점토판 매체에 적합하도록 쐐기 기호로 음소 알파벳 30자를 독창적으로 고안.'
      },
      {
        id: 'ug-50',
        elapsedYears: 50,
        title: '바알 서사시 필사',
        actualBCE: 'c. 1350 BCE',
        stage: 't+50년 (신화 서사시)',
        detail: '대사제 아텐푸를라누의 지도 하에 필사자 일리밀쿠가 점토판에 기록한 카난 신화 대서사.'
      },
      {
        id: 'ug-220',
        elapsedYears: 220,
        title: '도시 화재로 문자 소멸',
        actualBCE: 'c. 1180 BCE',
        stage: 't+220년 (문명 단절)',
        detail: '바다 민족의 침공과 화재로 왕궁 아카이브 소실. 구운 점토판은 보존되었으나 문자 전통 소멸.'
      }
    ]
  }
];

interface ComputedTierInfo {
  tierClass: EventTier;
  isTop: boolean;
}

/**
 * Dynamic collision-aware 4-tier slotting algorithm:
 * Inspects all events in a lane, converts their elapsedYears to horizontal percentage (pct),
 * and assigns tiers (top-near, top-far, bottom-near, bottom-far) so that adjacent items
 * within an 18% distance NEVER occupy the same vertical level.
 */
const computeEventTiers = (
  events: RelativeEventNode[],
  pctCalc: (years: number) => number
): Map<string, ComputedTierInfo> => {
  const tierMap = new Map<string, ComputedTierInfo>();

  let lastTopNearPct = -999;
  let lastTopFarPct = -999;
  let lastBottomNearPct = -999;
  let lastBottomFarPct = -999;

  const SAFE_GAP = 18;

  events.forEach((ev, idx) => {
    const pct = pctCalc(ev.elapsedYears);
    const preferTop = idx % 2 === 0;

    let chosenTier: EventTier;

    if (preferTop) {
      if (pct - lastTopNearPct >= SAFE_GAP) {
        chosenTier = 'tier-top-near';
        lastTopNearPct = pct;
      } else if (pct - lastTopFarPct >= SAFE_GAP) {
        chosenTier = 'tier-top-far';
        lastTopFarPct = pct;
      } else if (pct - lastBottomNearPct >= SAFE_GAP) {
        chosenTier = 'tier-bottom-near';
        lastBottomNearPct = pct;
      } else {
        chosenTier = 'tier-bottom-far';
        lastBottomFarPct = pct;
      }
    } else {
      if (pct - lastBottomNearPct >= SAFE_GAP) {
        chosenTier = 'tier-bottom-near';
        lastBottomNearPct = pct;
      } else if (pct - lastBottomFarPct >= SAFE_GAP) {
        chosenTier = 'tier-bottom-far';
        lastBottomFarPct = pct;
      } else if (pct - lastTopNearPct >= SAFE_GAP) {
        chosenTier = 'tier-top-near';
        lastTopNearPct = pct;
      } else {
        chosenTier = 'tier-top-far';
        lastTopFarPct = pct;
      }
    }

    const isTop = chosenTier.startsWith('tier-top');
    tierMap.set(ev.id, { tierClass: chosenTier, isTop });
  });

  return tierMap;
};

export const RelativeTimelineMatrix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);
  const [activeSpotlightId, setActiveSpotlightId] = useState<string | null>('rel-greece-jump');
  const [needlePct, setNeedlePct] = useState<number | null>(relYearsToPct(35));
  const [hoveredYears, setHoveredYears] = useState<number | null>(35);
  const [selectedEvent, setSelectedEvent] = useState<{ civName: string; event: RelativeEventNode } | null>(null);

  const activeSpotlight = RELATIVE_SPOTLIGHTS.find((s) => s.id === activeSpotlightId) || null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tracksRef.current) return;
    const rect = tracksRef.current.getBoundingClientRect();
    if (e.clientX < rect.left) {
      setNeedlePct(0);
      setHoveredYears(0);
      return;
    }
    const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const pct = (offsetX / rect.width) * 100;
    setNeedlePct(pct);

    const years = pctToRelYears(pct);
    setHoveredYears(years);
  };

  const handleMouseLeave = () => {
    if (activeSpotlight) {
      const pct = relYearsToPct(activeSpotlight.targetYears);
      setNeedlePct(pct);
      setHoveredYears(activeSpotlight.targetYears);
    } else {
      setNeedlePct(null);
      setHoveredYears(null);
    }
  };

  const jumpToSpotlight = (spotlight: RelativeSpotlight) => {
    if (activeSpotlightId === spotlight.id) {
      setActiveSpotlightId(null);
      setNeedlePct(null);
      setHoveredYears(null);
      return;
    }

    setActiveSpotlightId(spotlight.id);
    setSelectedEvent(null);
    const pct = relYearsToPct(spotlight.targetYears);
    setNeedlePct(pct);
    setHoveredYears(spotlight.targetYears);

    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const stickyHeader = container.querySelector('.matrix-civ-label-col') as HTMLElement | null;
    const stickyWidth = stickyHeader ? stickyHeader.offsetWidth : 180;
    
    const totalScrollWidth = container.scrollWidth;
    const trackWidth = Math.max(1, totalScrollWidth - stickyWidth);
    
    const visibleViewportWidth = Math.max(1, container.clientWidth - stickyWidth);
    const targetScrollLeft = (pct / 100) * trackWidth - (visibleViewportWidth / 2);
    
    const maxScrollLeft = Math.max(0, totalScrollWidth - container.clientWidth);
    const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, targetScrollLeft));

    container.scrollTo({
      left: clampedScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className="unified-timeline-wrapper">
      {/* QUICK RELATIVE SPOTLIGHT BUTTONS BAR */}
      <div className="era-quick-chips-bar">
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Sparkles size={14} style={{ color: 'var(--accent-gold, #eab308)' }} />
          <span>도입 경과속도 핵심 비교:</span>
        </span>
        {RELATIVE_SPOTLIGHTS.map((spot) => {
          const isActive = activeSpotlightId === spot.id;
          return (
            <button
              key={spot.id}
              className={`era-chip-btn ${isActive ? 'active' : ''}`}
              onClick={() => jumpToSpotlight(spot)}
            >
              <span>{spot.label}</span>
            </button>
          );
        })}
      </div>

      {/* HORIZONTALLY SCROLLABLE RELATIVE TIMELINE CANVAS */}
      <div className="timeline-matrix-scroll-container" ref={scrollRef}>
        <div className="timeline-matrix-inner">
          {/* HEADER RULER ROW */}
          <div className="matrix-ruler-row">
            <div className="matrix-civ-label-col">
              <span>문명별 t=0 도입기준</span>
            </div>
            <div className="matrix-tracks-area">
              <div className="matrix-ruler-ticks">
                {RELATIVE_RULER_MARKS.map((mark) => {
                  const pct = relYearsToPct(mark.years);
                  return (
                    <div
                      key={mark.years}
                      className="matrix-ruler-mark-item"
                      style={{
                        left: `${pct}%`,
                        transform: pct === 0 ? 'translateX(0%)' : pct >= 95 ? 'translateX(-100%)' : 'translateX(-50%)'
                      }}
                    >
                      <span>{mark.label}</span>
                      <div className="matrix-ruler-tick-line" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MAIN TRACK MATRIX BODY */}
          <div
            className="matrix-lanes-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* OVERLAYS (Grid lines, Needle) */}
            <div className="matrix-track-interactive-overlay" ref={tracksRef}>
              {/* VERTICAL GRID LINES */}
              {RELATIVE_RULER_MARKS.map((mark) => (
                <div
                  key={`grid-rel-${mark.years}`}
                  className="matrix-grid-line"
                  style={{ left: `${relYearsToPct(mark.years)}%` }}
                />
              ))}

              {/* INTERACTIVE TIME NEEDLE */}
              {needlePct !== null && (
                <div className="matrix-time-needle" style={{ left: `${needlePct}%` }}>
                  <div
                    className="matrix-time-needle-head"
                    style={{
                      transform:
                        needlePct < 10
                          ? 'translateX(0%)'
                          : needlePct > 90
                          ? 'translateX(-100%)'
                          : 'translateX(-50%)'
                    }}
                  >
                    {hoveredYears !== null ? `t + ${hoveredYears}년 경과` : ''}
                  </div>
                </div>
              )}
            </div>

            {/* CIVILIZATION LANES */}
            {RELATIVE_TIMELINE_DATA.map((civ) => {
              const barWidthPct = relYearsToPct(civ.maxElapsedYears);
              const tiers = computeEventTiers(civ.events, relYearsToPct);

              return (
                <div key={civ.id} className="matrix-lane-row">
                  <div className="matrix-lane-civ-header">
                    <div className="matrix-civ-name" style={{ color: civ.colorVar }}>
                      <span>{civ.icon}</span>
                      <span>{civ.name}</span>
                    </div>
                    <div className="matrix-civ-span" style={{ fontSize: '0.66rem' }}>{civ.t0Origin}</div>
                  </div>

                  <div className="matrix-lane-track-body">
                    {/* SPAN BAR */}
                    <div
                      className="matrix-span-bar"
                      style={{
                        left: '0%',
                        width: `${barWidthPct}%`,
                        background: `linear-gradient(90deg, ${civ.colorVar} 0%, rgba(255,255,255,0.15) 100%)`
                      }}
                    />

                    {/* EVENT CHIPS (DYNAMIC 4-TIER SLOTTED) */}
                    {civ.events.map((ev) => {
                      const evPct = relYearsToPct(ev.elapsedYears);
                      const isHovered = hoveredYears !== null && Math.abs(hoveredYears - ev.elapsedYears) < 30;
                      const isSelected = selectedEvent?.event.id === ev.id;
                      const isSpotlighted = activeSpotlight !== null && Math.abs(activeSpotlight.targetYears - ev.elapsedYears) <= 100;
                      const tierInfo = tiers.get(ev.id) || { tierClass: 'tier-top-near', isTop: true };

                      let alignClass = 'align-center';
                      if (evPct < 8) {
                        alignClass = 'align-left';
                      } else if (evPct > 92) {
                        alignClass = 'align-right';
                      }

                      return (
                        <div
                          key={ev.id}
                          className={`matrix-stagger-chip ${tierInfo.tierClass} ${alignClass} ${isHovered || isSelected ? 'active' : ''} ${isSpotlighted ? 'spotlight-highlight' : ''}`}
                          style={{ left: `${evPct}%`, color: civ.colorVar }}
                          onClick={() => setSelectedEvent({ civName: civ.name, event: ev })}
                        >
                          {tierInfo.isTop ? (
                            <>
                              <div className="matrix-event-label-chip">
                                <span className="year-badge">t+{ev.elapsedYears}년</span>
                                <span>{ev.title}</span>
                              </div>
                              <div className="matrix-event-stem" />
                              <div className="matrix-event-pin-dot" />
                            </>
                          ) : (
                            <>
                              <div className="matrix-event-pin-dot" />
                              <div className="matrix-event-stem" />
                              <div className="matrix-event-label-chip">
                                <span className="year-badge">t+{ev.elapsedYears}년</span>
                                <span>{ev.title}</span>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HOVER / SELECTED EVENT DETAILS & CROSS-CIV COMPARISON HUD */}
      {selectedEvent ? (
        <div className="mobile-hud-sheet">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <div>
              <span className="font-cinzel" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                {selectedEvent.civName} • {selectedEvent.event.stage} ({selectedEvent.event.actualBCE})
              </span>
              <h4 style={{ margin: '0.2rem 0 0 0', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {selectedEvent.event.title}
              </h4>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setSelectedEvent(null)}
              style={{ padding: '0.2rem 0.5rem', fontSize: '0.78rem' }}
            >
              ✕ 닫기
            </button>
          </div>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {selectedEvent.event.detail}
          </p>
        </div>
      ) : activeSpotlight ? (
        <div className="mobile-hud-sheet era-spotlight-hud">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="era-badge-tag">{activeSpotlight.badge}</span>
                <span className="font-cinzel" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  {activeSpotlight.periodSummary}
                </span>
              </div>
              <h4 style={{ margin: '0.3rem 0 0 0', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', fontWeight: 700 }}>
                {activeSpotlight.title}
              </h4>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setActiveSpotlightId(null);
                setNeedlePct(null);
                setHoveredYears(null);
              }}
              style={{ padding: '0.2rem 0.5rem', fontSize: '0.78rem' }}
            >
              ✕ 탐색 해제
            </button>
          </div>
          <div style={{ marginBottom: '0.6rem', fontSize: '0.86rem', color: 'var(--accent-gold, #eab308)', fontWeight: 600 }}>
            💡 {activeSpotlight.comparisonHighlight}
          </div>
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            {activeSpotlight.curatorInsight}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>🏛️ 핵심 실증 사료:</span>
            {activeSpotlight.keyArtifacts.map((art, idx) => (
              <span key={idx} className="era-key-artifact-tag">
                {art}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {/* 4-PILLAR COMPARATIVE SYNTHESIS SUMMARY */}
      <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.75rem' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Scale size={18} style={{ color: 'var(--civ-greece)' }} />
          <span>비교 분석: 왜 문명마다 비경제 기록 출현 속도가 극적으로 다른가?</span>
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0 0 1.25rem 0' }}>
          알파벳 여부라는 단순 부호 차이를 넘어, 서기관 계급의 성격, 기록 매체의 비용, 그리고 국가·종교 제도의 요구가 경과시간의 격차를 결정지었습니다.
        </p>

        <div className="relative-summary-grid">
          <div className="relative-summary-card" style={{ borderLeft: '4px solid var(--civ-greece)' }}>
            <div>
              <div className="relative-speed-badge">⚡ 초고속 (t+35년)</div>
              <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>그리스: 시민 연회와 가창 시가</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.75rem 0' }}>
                왕실 관료 독점 없이 24자 모음 알파벳이 귀족 심포시온(연회) 문화와 결합하여, 도입 즉시 개인 유희시 및 구전 서사시 기록으로 직행했습니다.
              </p>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem' }}>
              매체: 도기 파편·음각 / 독점도: 없음(대중적)
            </div>
          </div>

          <div className="relative-summary-card" style={{ borderLeft: '4px solid var(--civ-mesopotamia)' }}>
            <div>
              <div className="relative-speed-badge" style={{ color: 'var(--civ-mesopotamia)', borderColor: 'var(--civ-mesopotamia)' }}>📜 동시 출현 (t=0년)</div>
              <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>메소포타미아: 서기관 교육 표준목록</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.75rem 0' }}>
                문자 발생과 동시에 직업 어휘목록(ED Lu A)이 탄생하여, 수백 년간 신전 관료 서기관 학교(에둡바)의 제도적 재생산 도구로 작동했습니다.
              </p>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem' }}>
              매체: 점토판(저렴·영구보존) / 독점도: 에둡바 전문서기
            </div>
          </div>

          <div className="relative-summary-card" style={{ borderLeft: '4px solid var(--civ-israel)' }}>
            <div>
              <div className="relative-speed-badge" style={{ color: 'var(--civ-israel)', borderColor: 'var(--civ-israel)' }}>✨ 위기 속 경전화 (t+450년)</div>
              <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>이스라엘: 망국 위기와 성서 전승</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.75rem 0' }}>
                바빌론 유수라는 국가 붕괴 위기 속에서 물리적 신전을 대신하여 신앙과 역사를 보존하기 위해 문자로써 성서 경전을 집대성했습니다.
              </p>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem' }}>
              매체: 가죽/양피지 두루마리 / 독점도: 제사장·율법학자
            </div>
          </div>

          <div className="relative-summary-card" style={{ borderLeft: '4px solid var(--civ-egypt)' }}>
            <div>
              <div className="relative-speed-badge" style={{ color: 'var(--civ-egypt)', borderColor: 'var(--civ-egypt)' }}>🏛️ 900년 완성 (t+900년)</div>
              <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>이집트: 왕권 제의와 피라미드 영생</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.75rem 0' }}>
                선왕조 세무 꼬리표 이후 900년간 파라오의 신성한 이름과 군사 승전 기념비에 독점되다가, 피라미드 영생 주문으로 장대하게 완결되었습니다.
              </p>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem' }}>
              매체: 석비 릴리프·파피루스 / 독점도: 생명의 집(신전)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {civList.map((civ) => (
            <div
              key={civ.id}
              className="card card-hover glass-card"
              onClick={() => onNavigateTab('civilizations', civ.id)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${civ.accentColor}`,
                padding: '1.5rem',
                minHeight: '260px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className={`civ-tag civ-${civ.id}`}>
                    {civ.id === 'ugarit' || civ.id === 'china' ? '통제 사례' : '주요 문명'}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    c. {civ.scriptEmergenceBCE} BCE
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.45rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {civ.nameKo}
                </h3>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 700, color: civ.accentColor, whiteSpace: 'nowrap', flexShrink: 0 }}>문자:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{civ.scriptName}</span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {civ.oneSentenceSummary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <span>주 매체: {civ.primaryMedia}</span>
                <ArrowRight size={15} style={{ color: civ.accentColor }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELAPSED TIME COMPARISON CHART (ABSOLUTE VS RELATIVE) */}
      <section className="card glass-card" style={{ marginBottom: '4rem', marginTop: '3.5rem', padding: '2.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <h2 className="section-title" style={{ fontSize: '1.65rem', marginBottom: '0.4rem' }}>
              문자 도입 후 대규모 비경제 기록 출현까지의 경과시간
            </h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem', lineHeight: 1.5 }}>
              문자가 도입된 연대(t=0)를 동일 출발선으로 고정하거나, 3,100년 간의 절대연대(BCE) 스케일 상에서 각 문명별 문자 발전 단계를 대조합니다.
            </p>
          </div>

          <div style={{ display: 'flex', background: 'var(--bg-surface-elevated)', padding: '0.3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', flexShrink: 0 }}>
            <button
              className={`btn btn-sm ${timeMode === 'absolute' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setTimeMode('absolute')}
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: timeMode === 'absolute' ? 700 : 500 }}
            >
              절대연대 (BCE 3400~300)
            </button>
            <button
              className={`btn btn-sm ${timeMode === 'relative' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setTimeMode('relative')}
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: timeMode === 'relative' ? 700 : 500 }}
            >
              상대연대 (t=0 도입 경과년수)
            </button>
          </div>
        </div>

        {/* CHART VISUALIZATION */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.75rem' }}>
          {timeMode === 'relative' ? (
            <RelativeTimelineMatrix />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* UNIFIED INTERACTIVE TIMELINE MATRIX (BCE 3400 - 300) */}
              <UnifiedTimelineMatrix />
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

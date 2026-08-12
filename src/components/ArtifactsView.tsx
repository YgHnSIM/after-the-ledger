import React, { useState } from 'react';
import { ARTIFACTS } from '../data/artifacts';
import { CIVILIZATIONS } from '../data/civilizations';
import { ArtifactRecord, CivilizationId, GenreCategory, MaterialType } from '../types';
import { Scroll, Search, Filter, ArrowRight, ShieldCheck, X, FileText, Layers } from 'lucide-react';

interface ArtifactsViewProps {
  initialArtifactId?: string;
}

export const ArtifactsView: React.FC<ArtifactsViewProps> = ({ initialArtifactId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCiv, setSelectedCiv] = useState<CivilizationId | 'all'>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType | 'all'>('all');
  const [selectedModalArtifact, setSelectedModalArtifact] = useState<ArtifactRecord | null>(
    initialArtifactId ? ARTIFACTS.find((a) => a.id === initialArtifactId) || null : null
  );

  const filteredArtifacts = ARTIFACTS.filter((a) => {
    if (selectedCiv !== 'all' && a.civilization !== selectedCiv) return false;
    if (selectedMaterial !== 'all' && a.material !== selectedMaterial) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = a.titleKo.toLowerCase().includes(q) || a.titleNative.toLowerCase().includes(q);
      const matchScript = a.script.toLowerCase().includes(q);
      const matchSummary = a.summary.toLowerCase().includes(q);
      if (!matchTitle && !matchScript && !matchSummary) return false;
    }
    return true;
  });

  // SVG Graphics generator for Artifact types
  const renderArtifactSvgGraphic = (type?: string) => {
    switch (type) {
      case 'tablet':
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <defs>
              <linearGradient id="clayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            <rect x="25" y="10" width="150" height="80" rx="10" fill="url(#clayGrad)" stroke="#78350f" strokeWidth="2" />
            {/* Grid & Cuneiform Wedges */}
            <line x1="35" y1="28" x2="165" y2="28" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="35" y1="48" x2="165" y2="48" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="35" y1="68" x2="165" y2="68" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="80" y1="15" x2="80" y2="85" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="130" y1="15" x2="130" y2="85" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <text x="55" y="24" fill="#fef3c7" fontSize="10" fontFamily="monospace">🔻► 🔻▶</text>
            <text x="105" y="24" fill="#fef3c7" fontSize="10" fontFamily="monospace">◄🔻 ►▶</text>
            <text x="145" y="24" fill="#fef3c7" fontSize="10" fontFamily="monospace">🔻🔻</text>
            <text x="55" y="44" fill="#fef3c7" fontSize="10" fontFamily="monospace">►▶ 🔻►</text>
            <text x="105" y="44" fill="#fef3c7" fontSize="10" fontFamily="monospace">🔻🔻 ◄►</text>
            <text x="55" y="64" fill="#fef3c7" fontSize="10" fontFamily="monospace">◄▶ ►▶</text>
            <text x="105" y="64" fill="#fef3c7" fontSize="10" fontFamily="monospace">🔻► 🔻▶</text>
            <rect x="140" y="70" width="30" height="15" rx="3" fill="#fef3c7" opacity="0.9" />
            <text x="155" y="81" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">점토판</text>
          </svg>
        );
      case 'papyrus':
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <defs>
              <linearGradient id="papyrusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ca8a04" />
                <stop offset="10%" stopColor="#fef08a" />
                <stop offset="90%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            {/* Scroll End Handles */}
            <rect x="15" y="5" width="10" height="90" rx="3" fill="#854d0e" />
            <rect x="175" y="5" width="10" height="90" rx="3" fill="#854d0e" />
            {/* Papyrus Body */}
            <rect x="23" y="10" width="154" height="80" fill="url(#papyrusGrad)" stroke="#a16207" strokeWidth="1.5" />
            {/* Hieroglyphic Cartouche */}
            <rect x="40" y="20" width="35" height="60" rx="15" fill="none" stroke="#854d0e" strokeWidth="1.5" />
            <line x1="40" y1="80" x2="75" y2="80" stroke="#854d0e" strokeWidth="2" />
            <text x="57" y="42" textAnchor="middle" fill="#854d0e" fontSize="14">𓇳</text>
            <text x="57" y="60" textAnchor="middle" fill="#854d0e" fontSize="12">𓏤 𓅓</text>
            {/* Hieratic Column lines */}
            <line x1="90" y1="20" x2="160" y2="20" stroke="#854d0e" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="90" y1="35" x2="160" y2="35" stroke="#854d0e" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="90" y1="50" x2="160" y2="50" stroke="#854d0e" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="90" y1="65" x2="160" y2="65" stroke="#854d0e" strokeWidth="1.2" strokeDasharray="3 2" />
            <rect x="125" y="72" width="40" height="14" rx="3" fill="#854d0e" opacity="0.9" />
            <text x="145" y="82" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">파피루스</text>
          </svg>
        );
      case 'stone':
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <defs>
              <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            {/* Arched Stele Contour */}
            <path d="M 50 90 L 50 35 Q 100 5 150 35 L 150 90 Z" fill="url(#stoneGrad)" stroke="#1e293b" strokeWidth="2" />
            {/* Gold Engraved Sun & Wings Motif */}
            <circle cx="100" cy="30" r="8" fill="#eab308" />
            <path d="M 80 30 Q 90 25 100 30 Q 110 25 120 30" fill="none" stroke="#eab308" strokeWidth="1.5" />
            {/* Chiseled Inscription lines */}
            <line x1="65" y1="48" x2="135" y2="48" stroke="#fef08a" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
            <line x1="65" y1="60" x2="135" y2="60" stroke="#fef08a" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
            <line x1="65" y1="72" x2="135" y2="72" stroke="#fef08a" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
            <rect x="85" y="78" width="30" height="10" rx="2" fill="#eab308" />
            <text x="100" y="86" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">석비 刻文</text>
          </svg>
        );
      case 'silver':
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <defs>
              <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            {/* Coiled Silver Sheet Scroll */}
            <rect x="40" y="15" width="120" height="70" rx="4" fill="url(#silverGrad)" stroke="#475569" strokeWidth="1.5" />
            <ellipse cx="40" cy="50" rx="6" ry="35" fill="#94a3b8" stroke="#334155" strokeWidth="1" />
            <ellipse cx="160" cy="50" rx="6" ry="35" fill="#e2e8f0" stroke="#334155" strokeWidth="1" />
            {/* Micro Paleo-Hebrew Inscriptions */}
            <text x="55" y="38" fill="#334155" fontSize="10" fontFamily="serif" fontWeight="bold">𐤉𐤄𐤅𐤄 𐤉1𐤓𐤊</text>
            <text x="55" y="55" fill="#334155" fontSize="10" fontFamily="serif" fontWeight="bold">𐤅𐤉9𐤌𐤓𐤊 𐤔c𐤅𐤌</text>
            <rect x="110" y="68" width="42" height="12" rx="2" fill="#334155" />
            <text x="131" y="77" textAnchor="middle" fill="#f8fafc" fontSize="7" fontWeight="bold">은제 부적</text>
          </svg>
        );
      case 'pottery':
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <defs>
              <linearGradient id="potteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            {/* Terracotta Shard / Amphora Outline */}
            <path d="M 40 20 C 70 10, 130 10, 160 20 C 180 50, 150 85, 120 90 C 80 90, 30 75, 40 20 Z" fill="url(#potteryGrad)" stroke="#1d4ed8" strokeWidth="2" />
            {/* Red Figure Artwork Lines */}
            <path d="M 60 30 Q 100 20 140 30" fill="none" stroke="#f97316" strokeWidth="2" />
            <text x="100" y="55" textAnchor="middle" fill="#fef08a" fontSize="11" fontFamily="serif" fontStyle="italic">호메로스 춤 유희시 비문</text>
            <text x="100" y="70" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="monospace">ΑΒΓΔ ΕΖΗΘ ΙΚΛΜ</text>
            <rect x="75" y="78" width="50" height="10" rx="2" fill="#f97316" />
            <text x="100" y="86" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">도기 (Ostracon)</text>
          </svg>
        );
      case 'linear-b':
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <defs>
              <linearGradient id="linearbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            {/* Palm Leaf Long Tablet */}
            <rect x="15" y="30" width="170" height="40" rx="6" fill="url(#linearbGrad)" stroke="#78350f" strokeWidth="2" />
            <line x1="25" y1="50" x2="175" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            {/* Linear B signs & Chariot Ideogram */}
            <text x="35" y="45" fill="#fef3c7" fontSize="10" fontFamily="serif">𐀷 𐀙 𐀏</text>
            <text x="85" y="45" fill="#fef3c7" fontSize="10" fontFamily="serif">𐀀 𐀁 𐀂</text>
            <circle cx="150" cy="43" r="5" fill="none" stroke="#fef3c7" strokeWidth="1.5" />
            <line x1="145" y1="43" x2="155" y2="43" stroke="#fef3c7" strokeWidth="1" />
            <text x="35" y="63" fill="#fef3c7" fontSize="9" fontFamily="sans-serif">Chariot wheels = 2</text>
            <rect x="135" y="55" width="45" height="12" rx="2" fill="#78350f" />
            <text x="157" y="64" textAnchor="middle" fill="#fef3c7" fontSize="7" fontWeight="bold">Linear B 필로스</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 200 100" width="100%" height="100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <rect x="0" y="0" width="200" height="100" fill="var(--bg-surface-elevated)" />
            <rect x="40" y="20" width="120" height="60" rx="4" fill="#64748b" opacity="0.3" stroke="#475569" strokeWidth="2" />
            <text x="100" y="55" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="bold">유물 (Artifact)</text>
          </svg>
        );
    }
  };

  return (
    <div className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">고대 유물 및 텍스트 데이터베이스 ({ARTIFACTS.length}건)</h1>
        <p className="section-subtitle">
          메소포타미아, 이집트, 그리스, 이스라엘·유다, 우가리트의 핵심 유물과 사본 레코드를 정밀 탐색합니다.
        </p>

        {/* SEARCH & FILTERS BAR */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-surface)' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-surface-elevated)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Search size={18} style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="제목, 명문, 문자체계, 연대 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '0.9rem' }}
              />
            </div>

            {/* CIV FILTER */}
            <select
              value={selectedCiv}
              onChange={(e) => setSelectedCiv(e.target.value as CivilizationId | 'all')}
              style={{ padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '0.88rem' }}
            >
              <option value="all">모든 문명</option>
              {Object.values(CIVILIZATIONS).map((c) => (
                <option key={c.id} value={c.id}>{c.nameKo}</option>
              ))}
            </select>

            {/* MATERIAL FILTER */}
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value as MaterialType | 'all')}
              style={{ padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '0.88rem' }}
            >
              <option value="all">모든 재료</option>
              <option value="clay-tablet">점토판 (Clay Tablet)</option>
              <option value="stone-monument">석비·석조 (Stone)</option>
              <option value="papyrus">파피루스 (Papyrus)</option>
              <option value="parchment-leather">가죽/양피지 (Parchment)</option>
              <option value="ostracon">도기 파편 (Ostracon)</option>
              <option value="metal-scroll">금속판/은제 (Metal)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ARTIFACTS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {filteredArtifacts.map((artifact) => {
          const civInfo = CIVILIZATIONS[artifact.civilization];
          return (
            <div
              key={artifact.id}
              className="card card-hover"
              onClick={() => setSelectedModalArtifact(artifact)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${civInfo?.accentColor || 'var(--border-color)'}`
              }}
            >
              <div>
                {/* SVG ILLUSTRATION GRAPHIC */}
                <div style={{ marginBottom: '0.75rem' }}>
                  {renderArtifactSvgGraphic(artifact.svgGraphicType)}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className={`civ-tag civ-${artifact.civilization}`}>{civInfo?.nameKo}</span>
                  <span className={`status-badge status-${artifact.confidence}`}>
                    {artifact.confidence === 'sure' && '확실'}
                    {artifact.confidence === 'likely' && '유력'}
                    {artifact.confidence === 'debated' && '논쟁 중'}
                    {artifact.confidence === 'unknown' && '알 수 없음'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
                  {artifact.titleKo}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                  {artifact.titleNative}
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {artifact.summary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.65rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <span>{artifact.witnessDateBCE}</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>상세보기 <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAIL MODAL */}
      {selectedModalArtifact && (
        <div className="modal-overlay" onClick={() => setSelectedModalArtifact(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span className={`civ-tag civ-${selectedModalArtifact.civilization}`} style={{ marginBottom: '0.5rem' }}>
                  {CIVILIZATIONS[selectedModalArtifact.civilization]?.nameKo}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginTop: '0.25rem' }}>
                  {selectedModalArtifact.titleKo}
                </h2>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  {selectedModalArtifact.titleNative}
                </div>
              </div>
              <button className="icon-btn" onClick={() => setSelectedModalArtifact(null)}>
                <X size={18} />
              </button>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              {renderArtifactSvgGraphic(selectedModalArtifact.svgGraphicType)}
            </div>

            {/* METADATA GRID TABLE */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
              <div><strong>문자체계:</strong> {selectedModalArtifact.script}</div>
              <div><strong>언어:</strong> {selectedModalArtifact.language}</div>
              <div><strong>재료:</strong> {selectedModalArtifact.materialLabel}</div>
              <div><strong>장르:</strong> {selectedModalArtifact.genreLabel}</div>
              <div><strong>텍스트 단위:</strong> {selectedModalArtifact.textUnitLabel}</div>
              <div><strong>유물 제작 연대:</strong> {selectedModalArtifact.witnessDateBCE}</div>
              <div><strong>구성/성립 연대:</strong> {selectedModalArtifact.compositionDateBCE || '유물 연대와 동일'}</div>
              <div><strong>출토 맥락:</strong> {selectedModalArtifact.context}</div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>역사적 가치 및 해설</h4>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {selectedModalArtifact.description}
              </p>
            </div>

            <div style={{ marginBottom: '1.25rem', background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>보존 편향 특이사항 (Preservation Notes)</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                {selectedModalArtifact.preservationNotes}
              </p>
            </div>

            {selectedModalArtifact.sources.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>학술 출처 (Grade A/B Sources)</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                  {selectedModalArtifact.sources.map((src) => (
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

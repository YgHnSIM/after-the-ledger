import React, { useState } from 'react';
import { Search, X, Scroll, ShieldCheck, BookOpen, Globe, HelpCircle, ArrowRight } from 'lucide-react';
import { ARTIFACTS } from '../data/artifacts';
import { CLAIMS } from '../data/claims';
import { COMPARATIVE_ESSAYS } from '../data/essays';
import { CIVILIZATIONS } from '../data/civilizations';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { useModalA11y } from '../hooks/useModalA11y';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: string, id: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const contentRef = useModalA11y(isOpen, onClose);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedArtifacts = trimmed
    ? ARTIFACTS.filter(
        (a) =>
          a.titleKo.toLowerCase().includes(trimmed) ||
          a.titleNative.toLowerCase().includes(trimmed) ||
          a.script.toLowerCase().includes(trimmed) ||
          a.summary.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedClaims = trimmed
    ? CLAIMS.filter(
        (c) =>
          c.claimTitle.toLowerCase().includes(trimmed) ||
          c.claimSentence.toLowerCase().includes(trimmed) ||
          c.keyResearchers.some((r) => r.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedEssays = trimmed
    ? COMPARATIVE_ESSAYS.filter(
        (e) =>
          e.title.toLowerCase().includes(trimmed) ||
          e.summary.toLowerCase().includes(trimmed) ||
          e.content.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedCivilizations = trimmed
    ? Object.values(CIVILIZATIONS).filter(
        (c) =>
          c.nameKo.toLowerCase().includes(trimmed) ||
          c.oneSentenceSummary.toLowerCase().includes(trimmed) ||
          c.scriptName.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedGlossary = trimmed
    ? GLOSSARY_ITEMS.filter(
        (g) =>
          g.term.toLowerCase().includes(trimmed) ||
          g.definition.toLowerCase().includes(trimmed)
      )
    : [];

  const hasResults =
    matchedArtifacts.length > 0 ||
    matchedClaims.length > 0 ||
    matchedEssays.length > 0 ||
    matchedCivilizations.length > 0 ||
    matchedGlossary.length > 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-label="통합 검색"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '720px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <Search size={20} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="유물, 학술 가설, 시인, 성서 사본, 쐐기문자, 피라미드 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-autofocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <button className="icon-btn" data-close-btn onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
          {!trimmed && (
            <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ fontSize: '0.95rem' }}>검색어를 입력하세요. (예: "우루크", "알파벳", "피라미드", "사해문서", "호메로스")</p>
            </div>
          )}

          {trimmed && !hasResults && (
            <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>
              <p>"{query}"에 대한 검색 결과가 없습니다.</p>
            </div>
          )}

          {matchedArtifacts.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <Scroll size={15} /> 유물 및 텍스트 ({matchedArtifacts.length})
              </div>
              {matchedArtifacts.map((a) => (
                <div
                  key={a.id}
                  onClick={() => {
                    onSelectResult('artifact', a.id);
                    onClose();
                  }}
                  className="card card-hover"
                  style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{a.titleKo}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{a.script} • {a.witnessDateBCE}</div>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))}
            </div>
          )}

          {matchedClaims.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <ShieldCheck size={15} /> 학술 주장 카드 ({matchedClaims.length})
              </div>
              {matchedClaims.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    onSelectResult('claim', c.id);
                    onClose();
                  }}
                  className="card card-hover"
                  style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{c.claimTitle}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.claimSentence}</div>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))}
            </div>
          )}

          {matchedEssays.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <BookOpen size={15} /> 비교 에세이 ({matchedEssays.length})
              </div>
              {matchedEssays.map((e) => (
                <div
                  key={e.id}
                  onClick={() => {
                    onSelectResult('essay', e.id);
                    onClose();
                  }}
                  className="card card-hover"
                  style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{e.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{e.subtitle}</div>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))}
            </div>
          )}

          {matchedCivilizations.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <Globe size={15} /> 문명 ({matchedCivilizations.length})
              </div>
              {matchedCivilizations.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    onSelectResult('civilization', c.id);
                    onClose();
                  }}
                  className="card card-hover"
                  style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{c.nameKo}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.oneSentenceSummary}</div>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))}
            </div>
          )}

          {matchedGlossary.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                <HelpCircle size={15} /> 용어집 ({matchedGlossary.length})
              </div>
              {matchedGlossary.map((g) => (
                <div
                  key={g.term}
                  onClick={() => {
                    onSelectResult('sources', 'glossary');
                    onClose();
                  }}
                  className="card card-hover"
                  style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', cursor: 'pointer' }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{g.term}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{g.definition}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

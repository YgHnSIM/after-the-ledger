import React, { useState } from 'react';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { Search, ExternalLink, HelpCircle, BookOpen, Scroll } from 'lucide-react';

export const SourcesGlossaryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sources' | 'glossary'>('sources');
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const primarySources = [
    {
      id: 'src-dcclt',
      grade: 'Grade A',
      title: 'Digital Corpus of Cuneiform Lexical Texts (DCCLT)',
      institution: 'University of California, Berkeley & Penn ORACC Project',
      url: 'https://oracc.museum.upenn.edu/dcclt/',
      description: '메소포타미아 쐐기문자 어휘목록 점토판 전체의 디지털 정본 데이터베이스'
    },
    {
      id: 'src-cdli',
      grade: 'Grade A',
      title: 'Cuneiform Digital Library Initiative (CDLI)',
      institution: 'UCLA / Max Planck Institute for the History of Science',
      url: 'https://cdli.mpiwg-berlin.mpg.de/',
      description: '우루크 행정 점토판을 비롯한 30만 점 이상의 쐐기문자 점토판 고화질 아카이브'
    },
    {
      id: 'src-etcsl',
      grade: 'Grade A',
      title: 'Electronic Text Corpus of Sumerian Literature (ETCSL)',
      institution: 'University of Oxford',
      url: 'https://etcsl.orinst.ox.ac.uk/',
      description: '수메르 문학작품, 찬가, 엔헤두안나 신전 찬가 번역 및 정본 코퍼스'
    },
    {
      id: 'src-ucl-egypt',
      grade: 'Grade A/C',
      title: 'Digital Egypt for Universities',
      institution: 'University College London (UCL)',
      url: 'https://www.ucl.ac.uk/museums-static/digitalegypt/',
      description: '피라미드 텍스트, 관 텍스트, 아비도스 묘 유물에 관한 이집트학 디지털 교육 DB'
    },
    {
      id: 'src-cambridge-mycep',
      grade: 'Grade A',
      title: 'Mycenaean Epigraphy Group',
      institution: 'University of Cambridge Faculty of Classics',
      url: 'https://www.classics.cam.ac.uk/research/projects/mycep',
      description: '크노소스 및 필로스 궁전 Linear B 점토판 해독 및 연구 프로젝트'
    },
    {
      id: 'src-imj-kh',
      grade: 'Grade A',
      title: 'Ketef Hinnom Silver Scrolls Exhibition',
      institution: 'Israel Museum Jerusalem (IMJ)',
      url: 'https://www.imj.org.il/en/collections/198069-0',
      description: '케테프 힌놈 묘지 출토 은제 부적 두루마리 유물 정보 및 고고학 리포트'
    },
    {
      id: 'src-iaa-dss',
      grade: 'Grade A',
      title: 'The Leon Levy Dead Sea Scrolls Digital Library',
      institution: 'Israel Antiquities Authority (IAA)',
      url: 'https://www.deadseascrolls.org.il/',
      description: '쿰란 동굴 사해문서 900여 두루마리의 다중스펙트럼 초고화질 디지털 도서관'
    },
    {
      id: 'src-ugarit-cambridge',
      grade: 'Grade A/B',
      title: 'Contextualizing Early Writing Systems: Ugarit',
      institution: 'University of Cambridge Repository',
      url: 'https://www.repository.cam.ac.uk/',
      description: '우가리트 알파벳 쐐기문자와 아카드어 문자의 다국어 서기관 문화 분석 논문'
    }
  ];

  const filteredGlossary = GLOSSARY_ITEMS.filter((g) => {
    if (!glossaryQuery.trim()) return true;
    const q = glossaryQuery.toLowerCase();
    return g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q);
  });

  return (
    <div className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">출처 참고문헌 & 학술 용어집</h1>
        <p className="section-subtitle">
          프로젝트에 활용된 A/B급 primary DB 출처와 연구 용어를 조회할 수 있습니다.
        </p>

        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === 'sources' ? 'active' : ''}`}
            onClick={() => setActiveTab('sources')}
          >
            A급 학술 출처 및 데이터베이스 ({primarySources.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
            onClick={() => setActiveTab('glossary')}
          >
            학술 용어집 ({GLOSSARY_ITEMS.length})
          </button>
        </div>
      </div>

      {activeTab === 'sources' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {primarySources.map((src) => (
            <div key={src.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className="status-badge status-sure">{src.grade}</span>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
                  {src.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {src.institution}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {src.description}
                </p>
              </div>

              {src.url && (
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.65rem', marginTop: '0.75rem' }}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.8rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    공식 아카이브 접속 <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="card" style={{ marginBottom: '1.5rem', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-surface-elevated)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Search size={18} style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="용어 검색 (예: 아브자드, DCCLT, 오스트라콘, 보존 편향)..."
                value={glossaryQuery}
                onChange={(e) => setGlossaryQuery(e.target.value)}
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {filteredGlossary.map((item) => (
              <div key={item.term} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
                    {item.term}
                  </h3>
                  <span className="civ-tag" style={{ background: 'var(--bg-surface-elevated)', color: 'var(--text-secondary)' }}>
                    {item.category}
                  </span>
                </div>
                {item.originalTerm && (
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                    {item.originalTerm}
                  </div>
                )}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {item.definition}
                </p>
                <div style={{ background: 'var(--bg-surface-elevated)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <strong>맥락:</strong> {item.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { Compass, Search, Moon, Sun, Scroll, BookOpen, Layers, Scale, ShieldCheck, Feather, Globe, HelpCircle, GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export interface NavCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  items: {
    id: string;
    label: string;
    icon: React.ElementType;
    description: string;
  }[];
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories: NavCategory[] = [
    {
      id: 'cat-overview',
      label: '개요 & 타임라인',
      icon: Compass,
      items: [
        { id: 'home', label: '연구 아틀라스 개요', icon: Compass, description: '고대 문자문화 비교 연구 서설' },
        { id: 'compare', label: '3,100년 비교 타임라인', icon: Layers, description: '문명별 문자 발전 연대기' },
        { id: 'civilizations', label: '5대 문명 상세 연구', icon: Globe, description: '메소포타미아·이집트·그리스 등' }
      ]
    },
    {
      id: 'cat-homer',
      label: '호메로스 & 고대 문헌',
      icon: BookOpen,
      items: [
        { id: 'homer', label: '일리아스·오뒷세이아', icon: BookOpen, description: '24권 서사시·수식어·10대 개념어' },
        { id: 'artifacts', label: '28대 핵심 유물·사본 DB', icon: Scroll, description: '원문 사료 및 3D/고해상도 실증' },
        { id: 'greek', label: '그리스 언어·문자 사료', icon: Feather, description: '알파벳 전래 및 문법 고증' }
      ]
    },
    {
      id: 'cat-scholarship',
      label: '학술 비평 & 제도',
      icon: GraduationCap,
      items: [
        { id: 'claims', label: '학술 주장 카드', icon: ShieldCheck, description: '근거-반증 평가 및 학계 판정' },
        { id: 'institutions', label: '서기관·문자 관료제', icon: GraduationCap, description: '고대 서기관 훈련 및 행정 기구' },
        { id: 'themes', label: '비교 연구 에세이', icon: BookOpen, description: '8대 핵심 비교 에세이' }
      ]
    },
    {
      id: 'cat-reference',
      label: '방법론 & 출처',
      icon: HelpCircle,
      items: [
        { id: 'methodology', label: '연구 방법론', icon: Scale, description: '고고학·문헌학 대조 기준' },
        { id: 'sources', label: '1차 사료 & 용어집', icon: HelpCircle, description: '참고 문헌 및 색인' }
      ]
    }
  ];

  // Flattened nav items for mobile sheet
  const allNavItems = categories.flatMap(c => c.items);

  const mobileCoreItems = [
    { id: 'home', label: '개요', icon: Compass },
    { id: 'compare', label: '타임라인', icon: Layers },
    { id: 'homer', label: '호메로스', icon: BookOpen },
    { id: 'artifacts', label: '유물DB', icon: Scroll },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (tabId: string) => {
    onSelectTab(tabId);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-brand" onClick={() => handleSelect('home')}>
          <div className="nav-brand-title">
            <span>장부 이후</span>
            <span className="nav-brand-badge">연구 아틀라스</span>
          </div>
        </div>

        {/* DESKTOP CATEGORIZED NAV DROPDOWNS */}
        <div className="nav-links-track" ref={dropdownRef}>
          <nav style={{ width: '100%' }}>
            <ul className="nav-categories" style={{ display: 'flex', gap: '0.4rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                const isCatActive = cat.items.some(i => i.id === currentTab);
                const isOpen = activeDropdown === cat.id;

                return (
                  <li key={cat.id} style={{ position: 'relative' }}>
                    <button
                      className={`nav-cat-btn ${isCatActive ? 'active' : ''}`}
                      onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.45rem 0.8rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.88rem',
                        fontWeight: isCatActive ? 700 : 500,
                        color: isCatActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                        background: isCatActive ? 'var(--bg-surface-elevated)' : 'transparent',
                        border: '1px solid',
                        borderColor: isCatActive ? 'var(--border-highlight)' : 'transparent',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <CatIcon size={15} />
                      <span>{cat.label}</span>
                      <ChevronDown size={13} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', opacity: 0.7 }} />
                    </button>

                    {/* DROPDOWN MENU */}
                    {isOpen && (
                      <div
                        className="nav-dropdown-menu glass-card"
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 8px)',
                          left: 0,
                          minWidth: '260px',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-highlight)',
                          borderRadius: 'var(--radius-md)',
                          boxShadow: 'var(--shadow-lg)',
                          padding: '0.5rem',
                          zIndex: 200,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem'
                        }}
                      >
                        {cat.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isItemActive = currentTab === item.id;
                          return (
                            <button
                              key={item.id}
                              className={`nav-dropdown-item ${isItemActive ? 'active' : ''}`}
                              onClick={() => handleSelect(item.id)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.65rem',
                                padding: '0.6rem 0.75rem',
                                borderRadius: 'var(--radius-sm)',
                                background: isItemActive ? 'var(--bg-surface-elevated)' : 'transparent',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer',
                                width: '100%',
                                transition: 'background 0.15s ease'
                              }}
                            >
                              <ItemIcon size={16} style={{ color: isItemActive ? 'var(--accent-primary)' : 'var(--text-secondary)', flexShrink: 0 }} />
                              <div>
                                <div style={{ fontSize: '0.88rem', fontWeight: isItemActive ? 700 : 600, color: 'var(--text-primary)' }}>{item.label}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{item.description}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="nav-controls">
          <button className="icon-btn" onClick={onOpenSearch} title="검색 (Ctrl+K)">
            <Search size={18} />
          </button>

          <button className="icon-btn" onClick={onToggleDarkMode} title="테마 전환">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <nav className="mobile-bottom-nav">
        {mobileCoreItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id && !isMobileMenuOpen;
          return (
            <button
              key={item.id}
              className={`mobile-bottom-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}

        <button
          className={`mobile-bottom-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={20} />
          <span>전체 메뉴</span>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-sheet-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-sheet-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-sheet-header">
              <div className="mobile-sheet-title">
                <h3>연구 아틀라스 메뉴</h3>
                <p>전체 11개 학술 연구 파트</p>
              </div>
              <button className="icon-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mobile-sheet-grid">
              {allNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`mobile-sheet-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelect(item.id)}
                  >
                    <div className="mobile-sheet-icon">
                      <Icon size={20} />
                    </div>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

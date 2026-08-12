import React, { useState } from 'react';
import { Compass, Search, Moon, Sun, Scroll, BookOpen, Layers, Scale, ShieldCheck, Feather, Globe, HelpCircle, GraduationCap, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '개요', icon: Compass, category: '개요 및 지도' },
    { id: 'compare', label: '비교 타임라인', icon: Layers, category: '개요 및 지도' },
    { id: 'homer', label: '일리아스·오뒷세이아', icon: BookOpen, category: '고대 문헌 & 서사' },
    { id: 'civilizations', label: '문명별 연구', icon: Globe, category: '개요 및 지도' },
    { id: 'artifacts', label: '유물·텍스트 DB', icon: Scroll, category: '고대 문헌 & 서사' },
    { id: 'institutions', label: '서기관·제도', icon: GraduationCap, category: '학술 논의 & 제도' },
    { id: 'claims', label: '학술 주장 카드', icon: ShieldCheck, category: '학술 논의 & 제도' },
    { id: 'themes', label: '비교 에세이', icon: BookOpen, category: '학술 논의 & 제도' },
    { id: 'greek', label: '언어·문자', icon: Feather, category: '고대 문헌 & 서사' },
    { id: 'methodology', label: '방법론', icon: Scale, category: '가이드 & 출처' },
    { id: 'sources', label: '출처·용어집', icon: HelpCircle, category: '가이드 & 출처' },
  ];

  const mobileCoreItems = [
    { id: 'home', label: '개요', icon: Compass },
    { id: 'compare', label: '타임라인', icon: Layers },
    { id: 'artifacts', label: '유물DB', icon: Scroll },
    { id: 'homer', label: '일리아스', icon: BookOpen },
  ];

  const handleMobileSelect = (tabId: string) => {
    onSelectTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-brand" onClick={() => onSelectTab('home')}>
          <div className="nav-brand-title">
            <span>장부 이후</span>
            <span className="nav-brand-badge">연구 아틀라스</span>
          </div>
        </div>

        <div className="nav-links-track">
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      className={`nav-link-btn ${isActive ? 'active' : ''}`}
                      onClick={() => onSelectTab(item.id)}
                    >
                      <Icon size={15} />
                      <span>{item.label}</span>
                    </button>
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
              onClick={() => handleMobileSelect(item.id)}
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
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`mobile-sheet-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleMobileSelect(item.id)}
                  >
                    <div className="mobile-sheet-icon">
                      <Icon size={20} />
                    </div>
                    <div className="mobile-sheet-label-group">
                      <span className="mobile-sheet-label">{item.label}</span>
                      <span className="mobile-sheet-category">{item.category}</span>
                    </div>
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

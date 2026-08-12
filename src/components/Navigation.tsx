import React from 'react';
import { Compass, Search, Moon, Sun, Scroll, BookOpen, Layers, Scale, ShieldCheck, Feather, Globe, HelpCircle, GraduationCap } from 'lucide-react';

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
  const navItems = [
    { id: 'home', label: '개요', icon: Compass },
    { id: 'compare', label: '비교 타임라인', icon: Layers },
    { id: 'civilizations', label: '문명별 연구', icon: Globe },
    { id: 'artifacts', label: '유물·텍스트 DB', icon: Scroll },
    { id: 'institutions', label: '서기관·제도', icon: GraduationCap },
    { id: 'claims', label: '학술 주장 카드', icon: ShieldCheck },
    { id: 'themes', label: '비교 에세이', icon: BookOpen },
    { id: 'greek', label: '언어·문자', icon: Feather },
    { id: 'methodology', label: '방법론', icon: Scale },
    { id: 'sources', label: '출처·용어집', icon: HelpCircle },
  ];

  return (
    <header className="navbar">
      <div className="nav-brand" onClick={() => onSelectTab('home')}>
        <div className="nav-brand-title">
          <span>장부 이후</span>
          <span className="nav-brand-badge">연구 아틀라스</span>
        </div>
      </div>

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
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-controls">
        <button className="icon-btn" onClick={onOpenSearch} title="검색 (Ctrl+K)">
          <Search size={18} />
        </button>

        <button className="icon-btn" onClick={onToggleDarkMode} title="테마 전환">
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

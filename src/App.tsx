import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomeView } from './components/HomeView';
import { Footer } from './components/Footer';
import { CivilizationId } from './types';

const CompareView = lazy(() => import('./components/CompareView').then((m) => ({ default: m.CompareView })));
const CivilizationDetailView = lazy(() => import('./components/CivilizationDetailView').then((m) => ({ default: m.CivilizationDetailView })));
const ArtifactsView = lazy(() => import('./components/ArtifactsView').then((m) => ({ default: m.ArtifactsView })));
const ClaimsView = lazy(() => import('./components/ClaimsView').then((m) => ({ default: m.ClaimsView })));
const ThemesView = lazy(() => import('./components/ThemesView').then((m) => ({ default: m.ThemesView })));
const GreekLanguageView = lazy(() => import('./components/GreekLanguageView').then((m) => ({ default: m.GreekLanguageView })));
const MethodologyView = lazy(() => import('./components/MethodologyView').then((m) => ({ default: m.MethodologyView })));
const SourcesGlossaryView = lazy(() => import('./components/SourcesGlossaryView').then((m) => ({ default: m.SourcesGlossaryView })));
const InstitutionsView = lazy(() => import('./components/InstitutionsView').then((m) => ({ default: m.InstitutionsView })));
const HomericEpicView = lazy(() => import('./components/HomericEpicView').then((m) => ({ default: m.HomericEpicView })));
const SearchModal = lazy(() => import('./components/GlobalSearchModal').then((m) => ({ default: m.GlobalSearchModal })));

const VALID_TABS = new Set([
  'home',
  'compare',
  'homer',
  'civilizations',
  'artifacts',
  'institutions',
  'claims',
  'themes',
  'greek',
  'methodology',
  'sources',
]);

const parseHash = (): { tab: string; param?: string } => {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw) {
    return { tab: 'home' };
  }
  const [first, param] = raw.split('/');
  const tab = first && VALID_TABS.has(first) ? first : 'home';
  return { tab, param };
};

const ViewFallback: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
    <span className="font-cinzel" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
      아틀라스 불러오는 중…
    </span>
  </div>
);

export const App: React.FC = () => {
  const initial = parseHash();
  const [currentTab, setCurrentTab] = useState<string>(initial.tab);
  const [activeParam, setActiveParam] = useState<string | undefined>(initial.param);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // Sync tab state from URL hash changes (back/forward, manual edit, share links)
  useEffect(() => {
    const handleHashChange = () => {
      const { tab, param } = parseHash();
      setCurrentTab(tab);
      setActiveParam(param);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global Ctrl/Cmd+K shortcut to open the search modal
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Handle Tab Switch (persists to URL hash for shareable/back-forward state)
  const handleSelectTab = (tab: string, param?: string) => {
    setCurrentTab(tab);
    setActiveParam(param);
    const target = param ? `#/${tab}/${encodeURIComponent(param)}` : `#/${tab}`;
    if (window.location.hash !== target) {
      window.location.hash = target;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Global Search Result Select
  const handleSearchResultSelect = (type: string, id: string) => {
    if (type === 'artifact') {
      handleSelectTab('artifacts', id);
    } else if (type === 'claim') {
      handleSelectTab('claims', id);
    } else if (type === 'essay') {
      handleSelectTab('themes', id);
    } else if (type === 'civilization') {
      handleSelectTab('civilizations', id);
    } else if (type === 'sources') {
      handleSelectTab('sources');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main style={{ flex: 1 }}>
        <Suspense fallback={<ViewFallback />}>
          {currentTab === 'home' && <HomeView onNavigateTab={handleSelectTab} />}
          {currentTab === 'compare' && (
            <CompareView onSelectArtifact={(id) => handleSelectTab('artifacts', id)} />
          )}
          {currentTab === 'homer' && <HomericEpicView />}
          {currentTab === 'civilizations' && (
            <CivilizationDetailView
              initialCivId={activeParam as CivilizationId}
              onNavigateArtifact={(id) => handleSelectTab('artifacts', id)}
            />
          )}
          {currentTab === 'artifacts' && (
            <ArtifactsView initialArtifactId={activeParam} />
          )}
          {currentTab === 'institutions' && <InstitutionsView />}
          {currentTab === 'claims' && <ClaimsView />}
          {currentTab === 'themes' && (
            <ThemesView initialEssayId={activeParam} />
          )}
          {currentTab === 'greek' && <GreekLanguageView />}
          {currentTab === 'methodology' && <MethodologyView />}
          {currentTab === 'sources' && <SourcesGlossaryView />}
          {!VALID_TABS.has(currentTab) && <HomeView onNavigateTab={handleSelectTab} />}
        </Suspense>
      </main>

      <Footer onSelectTab={handleSelectTab} />

      <Suspense fallback={null}>
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectResult={handleSearchResultSelect}
        />
      </Suspense>
    </div>
  );
};

export default App;

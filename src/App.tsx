import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomeView } from './components/HomeView';
import { CompareView } from './components/CompareView';
import { CivilizationDetailView } from './components/CivilizationDetailView';
import { ArtifactsView } from './components/ArtifactsView';
import { ClaimsView } from './components/ClaimsView';
import { ThemesView } from './components/ThemesView';
import { GreekLanguageView } from './components/GreekLanguageView';
import { MethodologyView } from './components/MethodologyView';
import { SourcesGlossaryView } from './components/SourcesGlossaryView';
import { Footer } from './components/Footer';
import { CivilizationId } from './types';

import { InstitutionsView } from './components/InstitutionsView';
import { HomericEpicView } from './components/HomericEpicView';

const parseHash = (): { tab: string; param?: string } => {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [tab = 'home', param] = raw.split('/');
  return { tab, param };
};

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
      </main>

      <Footer onSelectTab={handleSelectTab} />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResultSelect}
      />
    </div>
  );
};

export default App;

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

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeParam, setActiveParam] = useState<string | undefined>(undefined);
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

  // Handle Tab Switch
  const handleSelectTab = (tab: string, param?: string) => {
    setCurrentTab(tab);
    setActiveParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Global Search Result Select
  const handleSearchResultSelect = (type: string, id: string) => {
    if (type === 'artifact') {
      setCurrentTab('artifacts');
      setActiveParam(id);
    } else if (type === 'claim') {
      setCurrentTab('claims');
      setActiveParam(id);
    } else if (type === 'essay') {
      setCurrentTab('themes');
      setActiveParam(id);
    } else if (type === 'civilization') {
      setCurrentTab('civilizations');
      setActiveParam(id);
    } else if (type === 'sources') {
      setCurrentTab('sources');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {currentTab === 'civilizations' && (
          <CivilizationDetailView
            initialCivId={activeParam as CivilizationId}
            onNavigateArtifact={(id) => handleSelectTab('artifacts', id)}
          />
        )}
        {currentTab === 'artifacts' && (
          <ArtifactsView initialArtifactId={activeParam} />
        )}
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

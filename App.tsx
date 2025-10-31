
import React, { useState } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import QuranPage from './pages/QuranPage';
import AnimePage from './pages/AnimePage';
import FmRadioPage from './pages/FmRadioPage';
import LiveTvPage from './pages/LiveTvPage';
import LiveTvChannelPage from './pages/LiveTvChannelPage';
import AboutPage from './pages/AboutPage';
import { initialQuranData, initialAnimeData, initialRadioData, initialLiveTvData } from './constants';
import type { Surah, Anime, RadioStation, LiveTvChannel } from './types';

const App: React.FC = () => {
  // Data is now sourced directly from constants, as Firebase is removed.
  // IDs are manually added for types that require them, mimicking what Firestore did.
  const [quranData] = useState<Surah[]>(initialQuranData);
  const [animeData] = useState<Anime[]>(
    initialAnimeData.map((a, index) => ({ ...a, id: `anime-${index}` })).reverse()
  );
  const [radioData] = useState<RadioStation[]>(
    initialRadioData.map((r, index) => ({ ...r, id: `radio-${index}` }))
  );
  const [liveTvData] = useState<LiveTvChannel[]>(
    initialLiveTvData.map((t, index) => ({ ...t, id: `tv-${index}` }))
  );

  const MainContent: React.FC = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const getTitle = () => {
      const { pathname } = location;
      if (pathname.startsWith('/live-tv/')) return "Live TV";
      switch(pathname) {
        case '/': return "Home";
        case '/quran': return "Quran Recitations";
        case '/anime': return "Anime Streaming";
        case '/fm-radio': return "FM Radio";
        case '/live-tv': return "Live TV";
        case '/about': return "About AhanHub";
        default: return "AhanHub";
      }
    };
    
    return (
      <div className="flex h-full bg-transparent text-gray-200">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between p-4 shrink-0 border-b border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="text-xl font-bold tracking-wider text-white">
                    Ahan<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hub</span>
                </div>
                <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 rounded-md hover:bg-slate-700/50 text-gray-300 hover:text-white"
                    aria-label="Open menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              <h1 className="hidden lg:block text-4xl font-bold mb-8 tracking-tight text-white">{getTitle()}</h1>
              <Routes>
                <Route path="/" element={<HomePage 
                    surahs={quranData.slice(0, 6)} 
                    animes={animeData.slice(0, 5)} 
                    stations={radioData.slice(0, 5)}
                    channels={liveTvData.slice(0, 5)}
                />} />
                <Route path="/quran" element={<QuranPage surahs={quranData} />} />
                <Route path="/anime" element={<AnimePage animes={animeData} />} />
                <Route path="/fm-radio" element={<FmRadioPage stations={radioData} />} />
                <Route path="/live-tv" element={<LiveTvPage channels={liveTvData} />} />
                <Route path="/live-tv/:channelId" element={<LiveTvChannelPage channels={liveTvData} />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
        </div>
      </div>
    );
  };
  
  return (
    <HashRouter>
      <MainContent />
    </HashRouter>
  );
};

export default App;
import React from 'react';
import { useLocation } from 'react-router-dom';

const IconHome: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const IconQuran: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.996h18M12 6.253a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 11.494a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM5 8.253a2.5 2.5 0 00-2.5 2.5v3.5a2.5 2.5 0 105 0v-3.5a2.5 2.5 0 00-2.5-2.5zM19 8.253a2.5 2.5 0 00-2.5 2.5v3.5a2.5 2.5 0 105 0v-3.5a2.5 2.5 0 00-2.5-2.5z" />
  </svg>
);

const IconAnime: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconRadio: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" />
  </svg>
);

const IconLiveTv: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const IconAbout: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navLinkClasses = "flex items-center space-x-3 pl-3.5 pr-4 py-3 rounded-lg transition-all duration-200";
  const activeClasses = "bg-slate-800 text-cyan-300 font-semibold border-l-2 border-cyan-400";
  const inactiveClasses = "text-gray-400 hover:bg-slate-800/50 hover:text-white border-l-2 border-transparent";

  const getClassName = (path: string, end?: boolean) => {
    const isActive = end ? location.pathname === path : location.pathname.startsWith(path);
    return `${navLinkClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeSidebar}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <aside className={`fixed lg:relative z-30 h-full w-64 bg-slate-900/60 backdrop-blur-lg p-4 flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between mb-10">
          <div className="text-2xl font-bold tracking-wider text-white">
            Ahan<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hub</span>
          </div>
          <button onClick={closeSidebar} className="lg:hidden p-1 rounded-md text-gray-400 hover:text-white hover:bg-slate-700/50" aria-label="Close menu">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          <a href="#/" onClick={closeSidebar} className={getClassName('/', true)}>
            <IconHome />
            <span>Home</span>
          </a>
          <a href="#/quran" onClick={closeSidebar} className={getClassName('/quran')}>
            <IconQuran />
            <span>Quran</span>
          </a>
          <a href="#/anime" onClick={closeSidebar} className={getClassName('/anime')}>
            <IconAnime />
            <span>Anime</span>
          </a>
          <a href="#/fm-radio" onClick={closeSidebar} className={getClassName('/fm-radio')}>
            <IconRadio />
            <span>FM Radio</span>
          </a>
           <a href="#/live-tv" onClick={closeSidebar} className={getClassName('/live-tv')}>
            <IconLiveTv />
            <span>Live TV</span>
          </a>
        </nav>
        <div className="mt-auto border-t border-slate-800 pt-2 space-y-2">
           <a href="#/about" onClick={closeSidebar} className={getClassName('/about')}>
            <IconAbout />
            <span>About Us</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
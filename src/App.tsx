import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { CITATIONS } from './constants';
import { Overview } from './pages/Overview';
import { Biography } from './pages/Biography';
import { Organization } from './pages/Organization';
import { Uprising } from './pages/Uprising';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex bg-slate-50 text-slate-900 font-sans">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
            <main className="flex-1 md:ml-64 transition-all duration-300 min-h-screen flex flex-col">
                <div className="flex-1">
                    {children}
                </div>

                {/* GLOBAL FOOTER */}
                <footer className="border-t border-slate-200 pt-12 pb-12 px-6 md:px-12 bg-white mt-auto">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-lg font-bold mb-6 text-slate-800">References & Works Cited</h3>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-xs text-slate-500">
                            {CITATIONS.map((cite) => (
                                <div key={cite.id} className="flex gap-2">
                                    <span className="font-mono font-bold text-slate-400">[{cite.id}]</span>
                                    <a href={cite.url} target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:underline transition-colors">
                                        {cite.text}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
                            © 2026 Strategic Assessment Group. Confidential Profile.
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/biography" element={<Biography />} />
                    <Route path="/organization" element={<Organization />} />
                    <Route path="/uprising" element={<Uprising />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

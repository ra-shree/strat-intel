import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Menu } from 'lucide-react';
import { CITATIONS } from './constants';
import data from './data/output.json';
import { Overview } from './pages/Overview';
import { Biography } from './pages/Biography';
import { Organization } from './pages/Organization';
import { Uprising } from './pages/Uprising';
import { Controversies } from './pages/Controversies';
import { References } from './pages/References';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const subjectName = Object.keys(data)[0];

    return (
        <div className="min-h-screen flex bg-slate-50 text-slate-900 font-sans">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
            <main className="flex-1 lg:ml-64 transition-all duration-300 min-h-screen flex flex-col">
                {/* Mobile Top Header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-30">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <span className="font-bold text-slate-800 text-sm tracking-tighter uppercase">Strategic Assessment</span>
                    </div>
                </div>

                <div className="flex-1">
                    {children}
                </div>

                {/* GLOBAL FOOTER */}
                <footer className="border-t border-slate-200 pt-12 pb-12 px-4 md:px-12 bg-white mt-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8 mb-12">
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-bold mb-4 text-slate-800">About This Assessment</h3>
                                <p className="text-sm text-slate-500 mb-4">
                                    This profile provides a comprehensive strategic assessment of {subjectName},
                                    detailing their political trajectory, key controversies, and current status
                                    within the Nepalese political landscape.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/references" className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider">
                                        View All References
                                    </Link>
                                    <Link to="/controversies" className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider">
                                        Key Controversies
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold mb-4 text-slate-800 uppercase tracking-tight">Navigation</h4>
                                <ul className="space-y-2 text-xs text-slate-500">
                                    <li><Link to="/" className="hover:text-red-600 transition-colors">Overview</Link></li>
                                    <li><Link to="/biography" className="hover:text-red-600 transition-colors">Biography</Link></li>
                                    <li><Link to="/organization" className="hover:text-red-600 transition-colors">Organization</Link></li>
                                    <li><Link to="/uprising" className="hover:text-red-600 transition-colors">2025 Uprising</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold mb-4 text-slate-800 uppercase tracking-tight">Confidentiality</h4>
                                <p className="text-xs text-slate-400 italic">
                                    INTERNAL USE ONLY. This document is part of a series of strategic assessments
                                    conducted by the Strategic Assessment Group.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                                © 2026 Strategic Assessment Group. Profile: {subjectName}.
                            </div>
                            <div className="text-slate-400 text-[10px] uppercase tracking-widest">
                                Document ID: SA-2026-NP-04-AK
                            </div>
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
                    <Route path="/controversies" element={<Controversies />} />
                    <Route path="/references" element={<References />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

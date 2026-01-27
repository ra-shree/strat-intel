import React from 'react';
import { Menu, X, Anchor, User, Building, BarChart2, AlertTriangle, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Overview', icon: <Anchor size={20} /> },
    { path: '/biography', label: 'Biography', icon: <User size={20} /> },
    { path: '/organization', label: 'Hami Nepal', icon: <Building size={20} /> },
    { path: '/uprising', label: '2025 Uprising', icon: <AlertTriangle size={20} /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-slate-900 text-white rounded-md shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 border-r border-slate-700 shadow-xl flex flex-col`}
      >
        <div className="p-6 border-b border-slate-700">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-xl font-bold tracking-tighter">THE ARCHITECT<br/><span className="text-red-500">OF DISSENT</span></h1>
            <p className="text-xs text-slate-400 mt-2">Strategic Political Assessment</p>
          </Link>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                isActive(item.path) 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <span className={isActive(item.path) ? 'text-white' : 'text-slate-400'}>{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-700">
          <p className="text-xs text-slate-500">
            Based on the report:<br/>
            "Sudan Gurung, Hami Nepal, and the Transformation of Nepali Civic Activism (2015-2026)"
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
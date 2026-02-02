import React from 'react';
import { Menu, X, Anchor, User, Building, BarChart2, AlertTriangle, FileText, ShieldAlert } from 'lucide-react';
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
    { path: '/organization', label: 'Organization', icon: <Building size={20} /> },
    { path: '/uprising', label: '2025 Uprising', icon: <AlertTriangle size={20} /> },
    { path: '/controversies', label: 'Controversies', icon: <ShieldAlert size={20} /> },
    { path: '/references', label: 'References', icon: <FileText size={20} /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 border-r border-slate-700 shadow-xl flex flex-col`}
      >
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-xl font-bold tracking-tighter">THE ARCHITECT<br /><span className="text-red-500">OF DISSENT</span></h1>
            <p className="text-xs text-slate-400 mt-2">Strategic Political Assessment</p>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${isActive(item.path)
                  ? 'bg-red-600 text-white shadow-md'
                  : 'hover:bg-slate-800 text-slate-400'
                }`}
            >
              <span className={isActive(item.path) ? 'text-white' : 'text-slate-400'}>{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;


import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileSidebarToggleProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MobileSidebarToggle = ({ isSidebarOpen, toggleSidebar }: MobileSidebarToggleProps) => {
  return (
    <div className="md:hidden fixed top-4 left-4 z-50">
      <button
        onClick={toggleSidebar}
        className="bg-white p-2 rounded-full shadow-md hover:bg-slate-50 active:bg-slate-100 transition-colors"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileSidebarToggle;

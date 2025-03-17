
import React from 'react';
import SidebarOverview from '@/components/SidebarOverview';

interface ResponsiveSidebarProps {
  topics: any[];
  activeTopicId: string | null;
  setActiveTopic: (id: string) => void;
  isSidebarOpen: boolean;
}

const ResponsiveSidebar = ({ 
  topics, 
  activeTopicId, 
  setActiveTopic, 
  isSidebarOpen 
}: ResponsiveSidebarProps) => {
  return (
    <div className={`
      fixed md:static top-0 left-0 h-screen md:h-auto w-3/4 md:w-64 
      transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      transition-transform duration-300 ease-in-out z-40
      overflow-y-auto md:overflow-visible
      md:block
    `}>
      <SidebarOverview 
        topics={topics} 
        activeTopicId={activeTopicId} 
        setActiveTopic={setActiveTopic} 
        className="md:sticky md:top-4"
      />
    </div>
  );
};

export default ResponsiveSidebar;

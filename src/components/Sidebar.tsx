import { FC } from 'react';
import { LucideIcon, Home, User, Settings } from 'lucide-react';

const Sidebar: FC = () => {
  return (
    <div className="bg-blue-900 text-white h-full p-4 w-60 fixed top-0 left-0">
      <ul className="space-y-4">
        <li><a href="#" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded"><Home /> <span>Overview</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded"><User /> <span>Workouts</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded"><Settings /> <span>Settings</span></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

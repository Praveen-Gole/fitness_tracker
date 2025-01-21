import { LucideIcon, Home, Settings, LogOut } from 'lucide-react';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-xl">Fitness Tracker</a>
        <div className="space-x-4">
          <a href="#" className="hover:bg-blue-700 p-2 rounded">Dashboard</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">Log Workouts</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">Progress</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">Challenges</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded">Profile</a>
          <a href="#" className="hover:bg-blue-700 p-2 rounded"><LogOut /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

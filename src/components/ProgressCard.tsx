import { FC } from 'react';

const ProgressCard: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-2">Progress Tracking</h2>
      <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg" alt="Progress Chart" className="w-full h-48 object-cover rounded-md" />
    </div>
  );
};

export default ProgressCard;

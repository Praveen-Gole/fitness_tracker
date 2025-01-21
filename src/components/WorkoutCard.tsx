import { FC } from 'react';

interface WorkoutCardProps {
  title: string;
  image: string;
}

const WorkoutCard: FC<WorkoutCardProps> = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
    </div>
  );
};

export default WorkoutCard;

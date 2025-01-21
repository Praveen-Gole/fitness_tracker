import { FC } from 'react';

const ChallengesCard: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-2">Fitness Challenges</h2>
      <button className="bg-blue-600 text-white p-2 rounded mb-4">Join New Challenge</button>
      <ul className="space-y-2">
        <li className="p-2 rounded hover:bg-blue-600">10K Steps Challenge</li>
        <li className="p-2 rounded hover:bg-blue-600">Yoga Challenge</li>
        <li className="p-2 rounded hover:bg-blue-600">Weightlifting Challenge</li>
      </ul>
    </div>
  );
};

export default ChallengesCard;

import React from 'react';

const ResultPage = ({ workoutText }) => {
  const formatText = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.trim().startsWith('* ')) {
        return (
          <li key={index} className="mb-2 pl-2">
            {line.slice(2).split(/(\*\*.*?\*\*)/).map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
              } else {
                return part;
              }
            })}
          </li>
        );
      }

      const parts = line.split(/(\*\*.*?\*\*)/).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        } else {
          return part;
        }
      });

      return (
        <React.Fragment key={index}>
          {parts}
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-black-and-white-gym-room-with-a-row-of-equipment-image_2911173.jpg)' }}
    >
      <div className="max-w-3xl w-full p-8 bg-white bg-opacity-75 shadow-lg rounded-lg border border-gray-300">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Result</h1>
        <ul className="text-gray-700 text-lg leading-8 list-disc pl-5">
          {formatText(workoutText)}
        </ul>
      </div>
    </div>
  );
};

export default ResultPage;

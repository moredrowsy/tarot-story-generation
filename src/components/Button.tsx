import React from 'react';

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div className='text-center'>
      <button
        className='inline-block bg-gray-200  hover:bg-gray-400 hover:text-white font-semibold px-3 py-1 rounded-full text-md text-gray-700'
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

type Props = {
  onClick: () => void;
};

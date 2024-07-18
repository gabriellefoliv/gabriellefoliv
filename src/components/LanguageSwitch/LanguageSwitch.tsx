// language.tsx (assuming you renamed it from language.ts)
import React from 'react';
import { LanguageState } from './language';

// Define the interface for the button props
interface ButtonProps {
  isEnglish: boolean;
  setIsEnglish: (newState: LanguageState) => void; // Function to update state
}

// Create the Button component with tipagem
const LanguageButton: React.FC<ButtonProps> = ({ isEnglish, setIsEnglish }) => {
  return (
    <button className='w-full bg-[#75A7B3] font-bold p-0.5 text-white flex justify-center items-center hover:text-opacity-50' onClick={() => setIsEnglish({ isEnglish: !isEnglish })}>
      {isEnglish ? 'Acesse em Português!' : 'Change to English version!'}
    </button>
  );
};

export default LanguageButton;
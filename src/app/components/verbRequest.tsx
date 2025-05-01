import { useState } from 'react';
import { postVerb } from '@/utils/postVerb';

export default function VerbRequestField() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    if (inputValue.trim() !== '') {
      await postVerb(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Föreslå ett nytt verb"
        className="text-center border-2 border-gray-300 rounded-lg w-40 h-10"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 h-10 rounded-lg ml-2"
      >
        Skicka
      </button>
    </div>
  );
}

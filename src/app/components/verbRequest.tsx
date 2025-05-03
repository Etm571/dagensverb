import { useState, useEffect } from "react";
import { postVerb } from "@/utils/postVerb";
import { fetchFAQ } from "@/utils/fetchFAQ";

export default function VerbRequestField() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === "") return;

    const fetchAndSetMessage = async () => {
      const data: any = await fetchFAQ(inputValue);
      setMessage(data.message);
      setIsDisabled(data.accepted);
    };

    fetchAndSetMessage();
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTyping(true);
  };

  const handleSubmit = async () => {
    if (inputValue.trim() !== "") {
      await postVerb(inputValue);
      setMessage("Tack!");
      setInputValue("");
      setIsTyping(false);

      setTimeout(() => {
        if (!isTyping) {
          setFadeOut(true);
          setTimeout(() => {
            setMessage("");
            setFadeOut(false);
          }, 500);
        }
      }, 2500);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {message && (
        <div
          className={`absolute mb-4 text-center bg-green-200 text-green-800 p-2 rounded-lg w-63 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{ top: "-60px" }}
        >
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-green-200 border-l-transparent border-r-transparent"></div>
          {message}
        </div>
      )}
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Föreslå ett nytt verb"
          className="text-center border-2 border-gray-300 rounded-lg w-40 h-10"
        />
        <button
          onClick={handleSubmit}
          disabled={!isDisabled}
          className={`px-4 h-10 rounded-lg ml-2 transition duration-300 ease-in-out 
            ${!isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
        >
          Skicka
        </button>
      </div>
    </div>
  );
}

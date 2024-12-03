import { useState } from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const QuestionsCard = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="max-w-4xl w-full p-10 bg-feature rounded-lg mt-10">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
        <h2 className="text-2xl font-bold text-secondary text-center flex-1">{title}</h2>
        <span
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <KeyboardArrowDownIcon />
        </span>
      </div>
      {image && <img src={image} alt={title} className="w-20 h-20 mx-auto my-4" />}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-md text-secondary leading-[1.8] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default QuestionsCard;

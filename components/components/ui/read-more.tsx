import { useState } from "react";

interface ReadMoreProps {
  id: string;
  text: string;
  amountOfWords?: number;
  amountOfCharacters?: number;
  mode?: 'words' | 'characters';
  className?: string;
}

export const ReadMore = ({
  id,
  text,
  amountOfWords = 36,
  amountOfCharacters = 150,
  mode = 'words',
  className
}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let itCanOverflow: boolean;
  let beginText: string;
  let endText: string;

  if (mode === 'characters') {
    itCanOverflow = text.length > amountOfCharacters;
    beginText = itCanOverflow
      ? text.slice(0, amountOfCharacters)
      : text;
    endText = text.slice(amountOfCharacters);
  } else {
    const splittedText = text.split(" ");
    itCanOverflow = splittedText.length > amountOfWords;
    beginText = itCanOverflow
      ? splittedText.slice(0, amountOfWords - 1).join(" ")
      : text;
    endText = splittedText.slice(amountOfWords - 1).join(" ");
  }

  const handleKeyboard = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p id={id} className={className}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span
            className={`${!isExpanded && "hidden"}`}
            aria-hidden={!isExpanded}
          >
            {mode === 'words' ? " " + endText : endText}
          </span>
          <span
            className="ml-2 text-violet-400"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "show less" : "show more"}
          </span>
        </>
      )}
    </p>
  );
};

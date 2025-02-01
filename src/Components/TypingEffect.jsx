import { useState, useEffect } from "react";
import "./TypingEffect.css";

const TypingEffect = () => {
  const texts = ["Front-End Developer", "Dev Team Head 'BUDS", "Meta-Certified Developer", "Bahria University'26"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 50 : 100;
    let timeout = setTimeout(() => {
      setCurrentText(texts[index].slice(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="typing-container">
      <span className="typing-text">{currentText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;

import React, { useEffect, useRef, useState } from "react";

const textArray = [
  "Jab BolBachchan Hai, Har Baat Hai Khaas!",
  "BolBachchan: Aapki Baat, Hamari Boli!",
  "BolBachchan: Har Dil Ki Baat, Ek Chat Away!",
  "BolBachchan: Har Lafz, Ek Nayi Kahani!",
  "Chat Ka Asli Maza, Sirf BolBachchan Mein!",
  "BolBachchan: Chat Karo, Dosti Bharo!",
  "Dil Se Bol, BolBachchan Ke Sang!",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const cursorRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);
  const textArrayIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  const typingDelay = 50;
  const erasingDelay = 20;
  const newTextDelay = 1000; // Delay between current and next text

  useEffect(() => {
    const type = () => {
      if (charIndexRef.current < textArray[textArrayIndexRef.current].length) {
        if (!cursorRef.current.classList.contains("typing")) {
          cursorRef.current.classList.add("typing");
        }
        setText(
          (prev) =>
            prev +
            textArray[textArrayIndexRef.current].charAt(charIndexRef.current)
        );
        charIndexRef.current++;
        typingTimeoutRef.current = setTimeout(type, typingDelay);
      } else {
        if (cursorRef.current) {
          cursorRef.current.classList.remove("typing");
        }
        typingTimeoutRef.current = setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndexRef.current > 0) {
        if (
          cursorRef.current &&
          !cursorRef.current.classList.contains("typing")
        ) {
          cursorRef.current.classList.add("typing");
        }
        setText((prev) => prev.substring(0, prev.length - 1));
        charIndexRef.current--;
        erasingTimeoutRef.current = setTimeout(erase, erasingDelay);
      } else {
        if (cursorRef.current) {
          cursorRef.current.classList.remove("typing");
        }
        textArrayIndexRef.current++;
        if (textArrayIndexRef.current >= textArray.length) {
          textArrayIndexRef.current = 0;
        }
        typingTimeoutRef.current = setTimeout(type, typingDelay + 1100);
      }
    };

    if (textArray.length) {
      typingTimeoutRef.current = setTimeout(type, newTextDelay + 250);
    }

    // Clean up the effects if the component unmounts
    return () => {
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(erasingTimeoutRef.current);
      setText("");
    };
  }, []);

  return (
    <div className="container1">
      <p>
        <span className="typed-text">{text}</span>
        <span ref={cursorRef} className="cursor">
          &nbsp;
        </span>
      </p>
    </div>
  );
};

export default TypingEffect;

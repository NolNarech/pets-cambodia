import { useEffect, useState } from "react";
import Profile from '../allimg/profile1.png'

export default function Hero() {
  const words = ["Dogs", "Hamsters", "Marmots", "Furry Friends", "Stay Pawsitive!"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseBetweenWords = 1000;

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseBetweenWords);
      }
    }

    setText(currentWord.substring(0, charIndex));
  }, [charIndex, isDeleting, wordIndex]);



  return (
    <section id="home" className="overflow-auto hero text-center py-5 h-xl-500"
      data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
      <div className="container">
        <img className="img-hamster mb-1 mt-5 img-fluid "src={Profile}alt="Hamster"/>
        <div className="mt-xl-n10">
          <h2 className="display-5" style={{ fontFamily: "narech" }}>
            These Pets <span>{text}</span>
            <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
          </h2>
          
        </div>
      </div>
    </section>
  );
}

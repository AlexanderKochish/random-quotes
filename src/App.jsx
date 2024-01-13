import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [qouteIndex, setQuoteIndex] = useState(0);
  const [bgRandomIndex, setBgRandomIndex] = useState(0);
  const bgColors = [
    "#eb3d1f",
    "#ebb81f",
    "#cceb1f",
    "#5ceb1f",
    "#1febde",
    "#1f71eb",
    "#aa1feb",
    "#eb1fde",
  ];

  const getQuotes = async () => {
    const res = await fetch(
      `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    );
    const { quotes } = await res.json();
    return setQuotes(quotes);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const randomIndex = () => {
    setQuoteIndex(Math.floor(Math.random() * quotes?.length));
    setBgRandomIndex(Math.floor(Math.random() * bgColors.length));
  };

  return (
    <div id="wrapper" style={{ background: `${bgColors[bgRandomIndex]}` }}>
      <div id="quote-box">
        <div
          className="quote-box_top"
          style={{ color: `${bgColors[bgRandomIndex]}` }}
        >
          <p>{quotes[qouteIndex]?.quote}</p>
          <div>
            <span>-{quotes[qouteIndex]?.author}</span>
          </div>
        </div>
        <div className="quote-box_bottom">
          <div className="quote-box_links">
            <a
              href="https://github.com/AlexanderKochish"
              target="_blank"
              style={{ background: `${bgColors[bgRandomIndex]}` }}
            >
              <BsGithub className="quote-box_link" />
            </a>
            <a
              href="https://linkedin.com/in/alexander-kochish-68a48b266"
              target="_blank"
              style={{ background: `${bgColors[bgRandomIndex]}` }}
            >
              <BsLinkedin className="quote-box_link" />
            </a>
          </div>
          <button
            className="quote-box_btn"
            style={{ background: `${bgColors[bgRandomIndex]}` }}
            onClick={randomIndex}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

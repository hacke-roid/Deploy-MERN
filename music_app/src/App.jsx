import React, { useRef, useState } from "react";
import AUDIO1 from "./Audio1.mp3";
import AUDIO2 from "./Audio2.mp3";
import AUDIO3 from "./Audio3.mp3";
import AUDIO4 from "./Audio4.mp3";
import IMAGE1 from "./Image1.jpg";
import IMAGE2 from "./Image2.jpg";
import IMAGE3 from "./Image3.jpg";
import IMAGE4 from "./Image4.jpg";
import { FaForwardFast } from "react-icons/fa6";
import { FaFastBackward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "./App.css";
import { DiClojure } from "react-icons/di";
import { ImTab } from "react-icons/im";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  let [currentTime, setCurrentTime] = useState(0);
  let audioRef = useRef(null);
  let [duration, setDuration] = useState(0);

  let songs = [
    {
      title: "Yeh Tune Kya Kiya",
      src: AUDIO1,
      img: IMAGE1,
    },
    {
      title: "Tera Hone Laga Hue",
      src: AUDIO2,
      img: IMAGE2,
    },
    {
      title: "Zara Zara",
      src: AUDIO3,
      img: IMAGE3,
    },
    {
      title: "Kali Bindi",
      src: AUDIO4,
      img: IMAGE4,
    },
  ];

  let [currentSongIndex, setCurrentSongIndex] = useState(0);
  let currentSong = songs[currentSongIndex];

  const PlayOrPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      // setIsPlaying(false);
    } else {
      audioRef.current.play();
      // setIsPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
    console.log(Math.floor(currentTime));
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.currentTime);
  };

  let skipForwardHandler = (direction) => {
    if (direction === "skip-forward") {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === "skip-backward") {
      setCurrentSongIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div >
    <section className="media-control" style={{backgroundImage: `url(${currentSong.img})`, backgroundRepeat: "no-repeat" }}>
    <div>
      <div className="audio-control">
        <audio
          src={currentSong.src}
          ref={audioRef}
          onTimeUpdate={timeUpdateHandler}
          onEnded={() => skipForwardHandler("skip-forward")}
        ></audio>

        <img src={currentSong.img} alt="Image 2" />
        <h1>{currentSong.title}</h1>

        <input
          type="range"
          value={currentTime}
          onChange={dragHandler}
          max={audioRef.current ? audioRef.current.value : 0}
        />
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <div className="btn-click">
          <button onClick={() => skipForwardHandler("skip-backward")}>
            <FaFastBackward />
          </button>
          <button onClick={PlayOrPauseHandler}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={() => skipForwardHandler("skip-forward")}>
            <FaForwardFast />
          </button>
        </div>
      </div>
      </div>
    </section>
    </div>
  );
};

export default App;

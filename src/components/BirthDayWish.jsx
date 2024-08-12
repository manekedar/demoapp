import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import './CSS/fireworks.css';

const BirthDayWish = () => {
  useEffect(() => {
    const fireworksContainer = document.getElementById('fireworks-container');

    for (let i = 0; i < 10; i++) {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 70}vh`; // Adjusted to keep fireworks lower on the screen
      firework.style.animationDelay = `${Math.random() * 2}s`;
      fireworksContainer.appendChild(firework);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative">
      <div id="fireworks-container" className="fireworks absolute inset-0 pointer-events-none"></div>

      <div className="text-center p-4 z-10">
        <div className="text-6xl font-bold">
          <Typewriter
            options={{
              strings: ['Wish you the Happiest birthday Shreyu.....!', 'You are awesome!'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="text-6xl font-bold">With</p>
          <Heart className="text-pink-500 fill-current ml-2" size={48} />
        </div>
      </div>
    </div>
  );
}

export default BirthDayWish;

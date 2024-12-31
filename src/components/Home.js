import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const scaleFactor = 1 + scrollPosition / rect.height / 5; // 조정 가능
      setScale(scaleFactor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gray-200 overflow-hidden"
      style={{
        backgroundImage: "url('/home.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `scale(${scale})`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">Discover my work and skills</p>
      </div>
    </section>
  );
};

export default Home;

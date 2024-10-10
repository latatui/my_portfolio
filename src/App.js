import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [isEnglish, setIsEnglish] = useState(true); // 기본 언어 설정 (영어)
  const [scrollDirection, setScrollDirection] = useState('down'); // 스크롤 방향 상태

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish); // 언어 토글
  };

  useEffect(() => {
    let lastScrollY = window.scrollY; // 마지막 스크롤 위치

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down'); // 아래로 스크롤 시
      } else {
        setScrollDirection('up'); // 위로 스크롤 시
      }
      lastScrollY = currentScrollY; // 마지막 스크롤 위치 업데이트
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 추가

    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  return (
    <div>
      <Navbar toggleLanguage={toggleLanguage} isEnglish={isEnglish} scrollDirection={scrollDirection} />
      <Home isEnglish={isEnglish} />
      <About isEnglish={isEnglish} />
      <Projects isEnglish={isEnglish} />
      <Contact isEnglish={isEnglish} />
    </div>
  );
};

export default App;

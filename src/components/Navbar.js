import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ toggleLanguage, isEnglish, scrollDirection }) => {
  return (
    <nav className={`p-10 bg-white shadow-lg fixed w-full top-0 z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-700 font-bold text-3xl cursor-pointer"
              >
                {isEnglish ? 'My Portfolio' : '내 포트폴리오'}
              </Link>
            </div>
          </div>
          <div className="flex space-x-4 text-2xl">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              {isEnglish ? 'Home' : '홈'}
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              {isEnglish ? 'About' : '소개'}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              {isEnglish ? 'Projects' : '프로젝트'}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              {isEnglish ? 'Contact' : '연락처'}
            </Link>
            <a
              href="https://github.com/latatui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/github_icon.png" // public 폴더에 저장된 아이콘 경로
                alt="GitHub"
                className="h-10 w-10 hover:opacity-80 transition-opacity duration-200" // 아이콘 크기와 호버 효과 설정
              />
            </a>
            <a
              href="https://kmong.com/@%EA%B7%B8%EB%AF%90%EB%AF%84"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
            <img
            src="/kmong_icon.png" // public 폴더에 저장된 아이콘 경로
            alt="GitHub"
            className="h-10 w-10 hover:opacity-80 transition-opacity duration-200" // 아이콘 크기와 호버 효과 설정
            />
            </a>
            {/* 언어 토글 버튼 */}
            <button
              onClick={toggleLanguage}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
            >
              {isEnglish ? '한국어' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

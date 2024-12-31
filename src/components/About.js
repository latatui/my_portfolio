import React from 'react';

const About = ({ isEnglish }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white py-20 border-t-4 border-gray-200"
      style={{
        marginTop: '1px', // Prevents overlap with previous section
      }}
    >
      <div className="text-center">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="/sanggi.png" // 여기에 자신의 프로필 사진 경로 입력
            alt="Profile"
            className="w-32 h-38 rounded-full border-4 border-gray-300"
          />
          <div className="text-left">
            <div className="text-lg font-semibold">
              {isEnglish ? 'Name : Lee Sanggi' : '이름 : 이상기'}
            </div>
            <div className="text-lg">
              {isEnglish ? 'Birth Date' : '생년월일'} : 2002.10.25
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4">
          {isEnglish ? 'About Me' : '내 소개'}
        </h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          {isEnglish
            ? 'Hello! I am a software developer passionate about creating intuitive and dynamic user experiences.'
            : '안녕하세요! 저는 직관적이고 동적인 사용자 경험을 만드는 데 열정적인 소프트웨어 개발자입니다.'}
        </p>
      </div>
    </section>
  );
};

export default About;

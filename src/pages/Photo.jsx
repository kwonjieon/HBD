import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Photo = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title py-20">📷 Photo</h1>

      <div className="py-10 flex flex-col items-center space-y-4">
        <p className="font-kangwon-bold text-lg">생일 기념 사진을 찍어보세요! (사진은 우클릭으로 저장 가능합니다.)</p>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="border rounded" />
        <br />
        <button className="w-[150px] h-[70px] bg-purple-500 rounded-xl text-white text-2xl font-bold" onClick={capture}>
          📷 찰칵!
        </button>
      </div>

      {imgSrc && (
        <div className="px-4 bg-white flex flex-col items-center pt-4 pb-16">
          <img src={imgSrc} alt="Captured" className="w-full max-w-md rounded shadow-lg" />
          <p className="font-bold text-xl pt-4">2025. 1. 28. 정미경 여사님 생일 기념 🎉</p>
        </div>
      )}
    </div>
  );
};

export default Photo;

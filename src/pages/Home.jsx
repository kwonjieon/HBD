// import { useEffect, useState } from 'react';
// import Confetti from 'react-confetti';

// export default function Home() {
//   const targetDate = new Date('2025-01-28T00:00:00');
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleButtonClick = () => {
//     setShowConfetti(true);

//     // 몇 초 후에 폭죽 효과를 종료
//     setTimeout(() => {
//       setShowConfetti(false);
//     }, 5000); // 5초 후 폭죽 멈춤
//   };
//   // 남은 시간 계산 함수
//   function calculateTimeLeft() {
//     const now = new Date();
//     const difference = targetDate - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // 타이머 완료 시 0으로 표시
//     }

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return { days, hours, minutes, seconds };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000); // 1초마다 업데이트

//     return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
//   }, []);

//   return (
//     <div>
//       <h2>정미경 여사님의 생일까지</h2>
//       <div>
//         <h1>
//           {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
//         </h1>
//       </div>
//       <button
//         onClick={handleButtonClick}
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           cursor: 'pointer',
//           backgroundColor: '#007BFF',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//         }}
//       >
//         축하 버튼 클릭!
//       </button>
//       {showConfetti && <Confetti />}
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import image1 from '/img/image1.jpeg';

export default function Home() {
  const targetDate = new Date('2025-01-28T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // 타이머 완료 시 0으로 표시
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className="card text-center">
      <h2 className="text-4xl font-bold mb-4 text-primary">정미경 여사님의 생일까지</h2>
      <div className="text-4xl font-bold mb-4">
        {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
      </div>
      <button onClick={handleButtonClick} className="btn text-2xl">
        축하 버튼 클릭!
      </button>
      {showConfetti && <Confetti />}
      <p className="mt-4 text-lg font-semibold text-gray-700">
        항상 사랑과 응원을 보내주시는 정미경 여사님, 진심으로 감사드립니다. 💖
      </p>
      <img
        src={image1 || '/placeholder.svg'}
        alt="image1"
        className="w-full max-w-md rounded-lg shadow-lg"
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
      />
    </div>
  );
}

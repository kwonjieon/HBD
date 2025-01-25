// import YouTube from 'react-youtube';
// import ca from '/img/cake.gif';
// export default function Song() {
//   const opts = {
//     width: '560',
//     height: '315',
//     playerVars: {
//       autoplay: 1, // 자동 재생
//       rel: 0, // 관련 동영상 비활성화
//       modestbranding: 1, // 로고 최소화
//     },
//   };
//   return (
//     <div>
//       <img src={ca} alt="ddsa" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />

//       <YouTube videoId="kt9n5E71EPI" opts={opts} />
//     </div>
//   );
// }
import YouTube from 'react-youtube';
import ca from '/img/cake.gif';

export default function Song() {
  const opts = {
    width: '100%',
    height: '315',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="card">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">🎵 Birthday Song</h1>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={ca || '/placeholder.svg'}
          alt="Birthday Cake"
          className="w-full max-w-md rounded-lg shadow-lg"
          style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
        />
        <div className="w-full max-w-xl">
          <YouTube videoId="kt9n5E71EPI" opts={opts} className="rounded-lg overflow-hidden" />
        </div>
      </div>
    </div>
  );
}

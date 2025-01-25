export default function Celebration() {
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
        <h2 className="text-4xl font-bold mb-4 text-primary">축하 연주</h2>
        <div className="w-full max-w-xl">
          <video controls autoPlay loop className="rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '600px' }}>
            <source src="/video/celebrationDrum.mp4" type="video/mp4" />
            {/* 대체 텍스트 */}
            해당 브라우저는 동영상을 지원하지 않습니다.
          </video>
        </div>
      </div>
    </div>
  );
}

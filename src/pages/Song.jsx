import YouTube from 'react-youtube';
import ca from '/img/cake.gif';
export default function Song() {
  const opts = {
    width: '560',
    height: '315',
    playerVars: {
      autoplay: 1, // 자동 재생
      rel: 0, // 관련 동영상 비활성화
      modestbranding: 1, // 로고 최소화
    },
  };
  return (
    <div>
      <img src={ca} alt="ddsa" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />

      <YouTube videoId="jkRAabIdsuM" opts={opts} />
    </div>
  );
}

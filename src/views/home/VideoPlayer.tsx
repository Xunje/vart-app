import React, { useRef, useEffect } from 'react';
import videojs, { VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  options: VideoJsPlayerOptions;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<videojs.Player | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 初始化 Video.js 播放器
      playerRef.current = videojs(videoRef.current, options);

      // 销毁播放器以防止内存泄漏
      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, [options]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js"></video>
    </div>
  );
};

export default VideoPlayer;

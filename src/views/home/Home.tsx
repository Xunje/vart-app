import React from 'react'
import VideoPlayer from './VideoPlayer';

export default function Home() {
  // const rtmpUrl: string = 'rtmp://ns8.indexforce.com/home/mystream'

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    techOrder: ['flash'], // 指定使用 Flash 技术
    sources: [{
      type: 'rtmp/flv',
      src: "rtmp://ns8.indexforce.com/home/mystream", // RTMP 流地址
    }],
     
  };

  return (
    <div className="App">
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
 
}

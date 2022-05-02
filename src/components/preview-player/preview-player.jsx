import React, {useRef, useEffect} from "react";

import {STRING, BOOLEAN} from '../../prop-type';

const PreviewPlayer = (props) => {
  const {video, preview, isPlaying} = props;
  const videoRef = useRef();


  useEffect(() => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.play().catch(() => {});
    } else {
      videoElement.load();
    }
  }, [isPlaying]);

  return (
    <video ref={videoRef} src={video} poster={preview} width='280' height='175' muted></video>
  );
};

PreviewPlayer.propTypes = {
  video: STRING,
  preview: STRING,
  isPlaying: BOOLEAN,
};

export default PreviewPlayer;

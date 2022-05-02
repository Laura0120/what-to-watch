import React, {useState} from "react";

const withPlayer = (Component) => {
  const WithPlayer = (props) => {
    const [isPlaying, setPlaying] = useState(true);
    const [runtimeVideo, setRuntime] = useState(0);
    const [progressVideo, setProgress] = useState(0);

    const toggleMovement = progressVideo / runtimeVideo * 100;
    return <Component
      {...props}
      isPlaying={isPlaying}
      runtimeVideo={runtimeVideo}
      progressVideo={progressVideo}
      toggleMovement={toggleMovement}
      onCanPlayThrough = {(runtime) => {
        setRuntime(runtime);
      }}
      onProgressVideoSet = {(evt) => {
        setProgress(evt.currentTarget.currentTime);
      }}
      togglePlayState = {() => {
        setPlaying(!isPlaying);
      }}
    />;
  };

  return WithPlayer;

};

export default withPlayer;

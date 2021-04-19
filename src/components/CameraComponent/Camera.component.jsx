import { useState, useEffect, useRef } from "react";
import ButtonComponent from "../ButtonComponent/Button.component";

import "./Camera.styles.css";

const CameraComponent = (props) => {
  const { deviceId } = props;

  const [isImageCaptured, setIsImageCaptured] = useState(false);

  const VideoPlayerRef = useRef();
  const CanvasRef = useRef();

  const handleCapture = () => {
    setIsImageCaptured(!isImageCaptured);
  };

  useEffect(() => {
    const tempVideoPlayerRef = VideoPlayerRef.current;
    let stream = null;
    (async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { deviceId },
      });
      tempVideoPlayerRef.srcObject = stream;
      tempVideoPlayerRef.play();
    })();

    return () =>
      stream?.getTracks().forEach((track) => {
        track.stop();
      });
  }, [deviceId]);

  useEffect(() => {
    if (isImageCaptured) {
      const context = CanvasRef.current.getContext("2d");
      context.drawImage(VideoPlayerRef.current, 0, 0, 480, 360);
    }
  }, [isImageCaptured]);

  return (
    <div className="camera-container">
      <div className="camera-element-wrapper">
        <canvas
          ref={CanvasRef}
          className="image-element"
          style={{ display: isImageCaptured ? "block" : "none" }}
          width={480}
          height={360}
        />
        <video ref={VideoPlayerRef} className="camera-element" />
      </div>
      <ButtonComponent
        buttonText={isImageCaptured ? "Try Again" : "Capture"}
        handleClick={handleCapture}
      />
    </div>
  );
};

export default CameraComponent;

import { useState, useEffect } from "react";

import ButtonComponent from "../../components/ButtonComponent/Button.component";
import CameraComponent from "../../components/CameraComponent/Camera.component";
import ErrorComponent from "../../components/ErrorComponent/Error.component";

import "./PhotoCapture.styles.css";

const CAMERA_ERROR_INIT = "No Camera Permision :'(";
const CAMERA_ERROR_OTHER = "Give Camera Permission Manually";

const PhotoCaptureScreen = () => {
  const [cameraError, setCameraError] = useState(CAMERA_ERROR_INIT);
  const [isCameraAvailable, setIsCameraAvailable] = useState(false);
  const [deviceId, setDeviceId] = useState("");

  const handleCameraPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setIsCameraAvailable(true);
    } catch (error) {
      setIsCameraAvailable(false);
      setCameraError(CAMERA_ERROR_OTHER);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();

        let isCameraAvailableLocal = false;
        for (const device of devices) {
          const { label, deviceId } = device;
          if (label !== "") {
            isCameraAvailableLocal = true;
            setDeviceId(deviceId);
            break;
          }
        }
        setIsCameraAvailable(isCameraAvailableLocal);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="photo-camera-container">
      {isCameraAvailable ? (
        <CameraComponent deviceId={deviceId} />
      ) : (
        <>
          <div className="photo-camera-error">
            <ErrorComponent errorText={cameraError} isHuge={true} />
          </div>
          {cameraError !== CAMERA_ERROR_OTHER && (
            <ButtonComponent
              buttonText={"Give Camera Permission"}
              handleClick={handleCameraPermission}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PhotoCaptureScreen;

import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./Capture.css";

const Capture = ({ onClose }) => {
  const videoRef = useRef(null);
  const [instruction, setInstruction] = useState("Move your face into the outline");
  const [outlineColor, setOutlineColor] = useState("white");
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    loadModels();
    startCamera();
    return () => stopCamera();
  }, []);

  // ✅ Load face-api.js models from public/models folder
  const loadModels = async () => {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri(process.env.PUBLIC_URL + "/models");
      console.log("Face model loaded successfully!");
    } catch (error) {
      console.error("Error loading face model:", error);
    }
  };

  // ✅ Start the camera feed
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      detectFace();
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // ✅ Stop camera feed when modal closes
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  // ✅ Detect face position
  const detectFace = async () => {
    const video = videoRef.current;
    if (!video) return;

    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 160, scoreThreshold: 0.5 });

    setInterval(async () => {
      const detections = await faceapi.detectSingleFace(video, options);
      
      if (detections) {
        setFaceDetected(true);

        const box = detections.box;
        const faceX = box.x + box.width / 2;
        const faceY = box.y + box.height / 2;

        const frameCenterX = video.videoWidth / 2;
        const frameCenterY = video.videoHeight / 2;
        const offset = 80; // ✅ Adjusted sensitivity

        if (
          Math.abs(faceX - frameCenterX) < offset &&
          Math.abs(faceY - frameCenterY) < offset
        ) {
          setInstruction("Perfect! Hold steady.");
          setOutlineColor("green");
        } else {
          setInstruction("Move your face into the outline");
          setOutlineColor("white");
        }
      } else {
        setFaceDetected(false);
        setInstruction("Face not detected. Adjust your position.");
        setOutlineColor("white");
      }
    }, 500);
  };

  return (
    <div className="modal-overlay">
      <button className="close-btn" onClick={onClose}>&times;</button>

      {/* Camera Container */}
      <div className="camera-box">
        <video ref={videoRef} autoPlay playsInline className="video-feed"></video>
        <div className="overlay-mask"></div>
        <div className="face-outline" style={{ borderColor: outlineColor }}></div>
      </div>

      {/* Instruction Text (Dynamic Feedback) */}
      <p className={`capture-instructions ${faceDetected ? "face-detected" : ""}`}>
        {instruction}
      </p>
    </div>
  );
};

export default Capture;

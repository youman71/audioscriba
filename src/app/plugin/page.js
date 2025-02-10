'use client';
import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextToSpeech() {
  const [text, setText] = useState("Hello, this is a test!");
  const { speak, speaking, cancel } = useSpeechSynthesis();
  
  const [isClient, setIsClient] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null;
  }

  // Handle start of speech synthesis and recording
  const handleSpeak = () => {
    if (!speaking) {
      // Create an AudioContext to capture audio
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const destination = audioContext.createMediaStreamDestination();
      
      // Create a MediaRecorder to capture audio
      const recorder = new MediaRecorder(destination.stream);
      recorder.ondataavailable = (event) => {
        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
      };
      recorder.onstop = () => {
        // Create a Blob and URL to download the audio
        const blob = new Blob(audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      };

      // Start recording
      recorder.start();
      setMediaRecorder(recorder);

      // Connect the speech synthesis to the recorder
      const speech = new SpeechSynthesisUtterance(text);
      speech.onstart = () => {
        audioContext.resume(); // Ensure audio context is running
      };
      const speakSynth = window.speechSynthesis;
      speakSynth.speak(speech);

      // Stop recording when speaking finishes
      speech.onend = () => {
        recorder.stop();
      };
    }
  };

  // Handle canceling the speech
  const handleCancel = () => {
    cancel();
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSpeak} disabled={speaking}>
        {speaking ? 'Speaking...' : 'Speak'}
      </button>
      {speaking && <button onClick={handleCancel}>Stop</button>}

      {audioUrl && (
        <div>
          <h3>Download Audio:</h3>
          <a href={audioUrl} download="speech_audio.wav">
            Download the speech audio
          </a>
        </div>
      )}
    </div>
  );
}

import React, { useEffect } from 'react';
import styles from '../../Styles/FabPopup.module.css';
import { BsMicFill } from 'react-icons/bs';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export default function Dictaphone({ setSpeech }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleClick = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  };

  useEffect(() => {
    setSpeech(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return <BsMicFill className={styles.iconBtn} onClick={handleClick} />;
}

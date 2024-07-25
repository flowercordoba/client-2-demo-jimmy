import React, { useRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import MusicVisualizer from './MusicVisualizer';

const MusicPlayer: React.FC = () => {
  const playerRef = useRef<AudioPlayer>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  useEffect(() => {
    if (playerRef.current) {
      audioRef.current = playerRef.current.audio.current;
    }
  }, []);

  return (
    <div className="music-player mt-4">
      <AudioPlayer
        ref={playerRef}
        src={audioSrc}
        onPlay={() => console.log('Playing')}
        onPause={() => console.log('Paused')}
        showJumpControls={true}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.DURATION,
        ]}
      />
      <MusicVisualizer audioRef={audioRef} />
    </div>
  );
};

export default MusicPlayer;

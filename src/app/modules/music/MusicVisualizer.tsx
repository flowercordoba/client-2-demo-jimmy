import React, { useEffect, useRef } from 'react';

interface MusicVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ audioRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;

    if (canvas && audio) {
      const ctx = canvas.getContext('2d');
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audio);

      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        if (ctx) {
          const WIDTH = canvas.width;
          const HEIGHT = canvas.height;

          requestAnimationFrame(draw);

          analyser.getByteFrequencyData(dataArray);

          ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
          ctx.fillRect(0, 0, WIDTH, HEIGHT);

          const barWidth = (WIDTH / bufferLength) * 2.5;
          let barHeight;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;

            ctx.fillStyle = `rgb(${barHeight + 100},50,50)`;
            ctx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

            x += barWidth + 1;
          }
        }
      };

      draw();
    }
  }, [audioRef]);

  return <canvas ref={canvasRef} width="600" height="200" />;
};

export default MusicVisualizer;

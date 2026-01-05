import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function VideoPlayer({ src, className = "img-fluid" }) {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <video ref={videoRef} className={className} autoPlay muted loop playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}

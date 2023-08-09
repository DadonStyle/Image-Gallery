import AnimatedCursor from 'react-animated-cursor';

const AnimatedCursorComponent = () => {
  const isMobile = Math.min(window.innerWidth, window.outerWidth) < 750; // refresh after switching to mobile view on chrome when debugging

  if (isMobile) return;

  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={12}
      color="255,255,255"
      outerAlpha={0.6}
      innerScale={0.7}
      outerScale={4}
    />
  );
};

export default AnimatedCursorComponent;

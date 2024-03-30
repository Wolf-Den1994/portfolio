import { ReactNode, memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Parallax } from 'react-scroll-parallax';

type ParallaxWrapProps = {
  children: ReactNode;
  speed?: number;
};

const ParallaxWrap = ({ children, speed = 5 }: ParallaxWrapProps) => {
  const isDesktop = useMediaQuery({ query: '(max-width: 740px)' });

  return (
    <Parallax disabled={isDesktop} speed={speed}>
      {children}
    </Parallax>
  );
};

export default memo(ParallaxWrap);

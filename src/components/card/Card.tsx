import type { PropsWithChildren } from 'react';

import type { PropsWithClassName } from '../../types/props-with-classname.type';
import { MotionContainer } from '../motion-container/MotionContainer';

type CardProps = {
  scale?: number;
};

export const Card = ({
  children,
  className,
  scale,
}: PropsWithChildren<PropsWithClassName<CardProps>>) => (
  <MotionContainer
    className={`break-word card card-compact bg-gradient-to-tl from-indigo-950 to-cyan-900 shadow-xl ${className}`}
    scale={scale}
  >
    {children}
  </MotionContainer>
);

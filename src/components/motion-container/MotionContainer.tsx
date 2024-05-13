'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import type { PropsWithClassName } from '@types';

import { defaultTransition } from './logic/default-transition.logic';

type MotionContainerProps = {
  scale?: number;
};

export const MotionContainer = ({
  className,
  children,
  scale = 1.011,
}: PropsWithClassName<PropsWithChildren<MotionContainerProps>>) => (
  <motion.div
    whileHover={{ scale }}
    transition={defaultTransition}
    className={className}
  >
    {children}
  </motion.div>
);

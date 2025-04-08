'use client';

import { FC, useEffect } from 'react';
import Parvus from 'parvus';

// Declare module to fix TypeScript error
declare module 'parvus' {
  export default class Parvus {
    constructor(options?: { selector?: string });
    destroy(): void;
  }
}

interface LightBoxHelperProps {
  selector?: string;
}

const LightBoxHelper: FC<LightBoxHelperProps> = ({ selector = '.lightbox' }) => {
  useEffect(() => {
    const lightbox = new Parvus({
      selector: selector,
      zoomIndicator: false
    });
    console.log(lightbox);

    return () => {
      lightbox.destroy();
    };
  }, [selector]);

  return null;
};

export default LightBoxHelper;


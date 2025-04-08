'use client';

import { FC, useEffect } from 'react';

// @ts-ignore
import Parvus from 'parvus';

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


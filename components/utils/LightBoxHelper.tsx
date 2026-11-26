'use client';

import { FC, useEffect } from 'react';

interface LightBoxHelperProps {
  selector?: string;
}

const LightBoxHelper: FC<LightBoxHelperProps> = ({ selector = '.lightbox' }) => {
  useEffect(() => {
    let lightbox: { destroy: () => void } | undefined;

    import('parvus')
      .then(({ default: Parvus }) => {
        lightbox = new Parvus({
          selector,
          zoomIndicator: false,
        });
      })
      .catch(console.error);

    return () => {
      lightbox?.destroy();
    };
  }, [selector]);

  return null;
};

export default LightBoxHelper;
'use client';

import { basePath } from '@/lib/basePath';
import { useEffect } from 'react';

export function BasePathCSSVariables() {
  useEffect(() => {
    // Set the CSS variable with the correct basePath
    document.documentElement.style.setProperty(
      '--hero-bg-image',
      `url('${basePath}/home_page_2.jpg')`
    );
  }, []);

  return null;
}

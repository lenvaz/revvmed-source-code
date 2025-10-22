import React, { useState } from 'react';
import ImageWithBasePath from './ImageWithBasePath';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading,
  decoding = "async"
}) => {
  const [imageError, setImageError] = useState(false);
  // Extract filename without extension and remove leading slash if present
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const baseName = cleanSrc.replace(/\.(jpeg|jpg|png)$/i, '');
  
  // Check if we're already using optimized path
  const isInOptimized = cleanSrc.startsWith('optimized/');
  const optimizedPath = isInOptimized ? `/${baseName}` : `/optimized/${baseName}`;
  
  // Fallback to original image if optimized version fails
  const handleImageError = () => {
    setImageError(true);
  };
  
  // If there's an error with optimized images, fall back to original
  if (imageError) {
    const originalSrc = src.includes('.') ? src : `${src}.jpeg`;
    return (
      <ImageWithBasePath
        src={originalSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading || (priority ? "eager" : "lazy")}
        decoding={decoding}
        onError={() => {
          // Log warning for missing images
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Image not found: ${originalSrc}`);
          }
        }}
      />
    );
  }
  
  return (
    <picture>
      {/* AVIF - Best compression, latest browsers */}
      <source
        srcSet={`
          ${optimizedPath}-small.avif 400w,
          ${optimizedPath}-medium.avif 800w,
          ${optimizedPath}-large.avif 1200w,
          ${optimizedPath}-xlarge.avif 1600w
        `}
        sizes={sizes}
        type="image/avif"
      />
      
      {/* WebP - Good compression, wide browser support */}
      <source
        srcSet={`
          ${optimizedPath}-small.webp 400w,
          ${optimizedPath}-medium.webp 800w,
          ${optimizedPath}-large.webp 1200w,
          ${optimizedPath}-xlarge.webp 1600w
        `}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* JPEG fallback for all browsers */}
      <ImageWithBasePath
        src={`${optimizedPath}-optimized.jpg`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading || (priority ? "eager" : "lazy")}
        decoding={decoding}
        onError={handleImageError}
      />
    </picture>
  );
};

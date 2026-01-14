// src/components/ModelViewer.tsx
import React, { useEffect, forwardRef } from 'react';

interface ModelViewerProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  cameraControls?: boolean;
  autoRotate?: boolean;
  interactionPrompt?: string;
  style?: React.CSSProperties;
}

const ModelViewer = forwardRef<HTMLElement, ModelViewerProps>(
  ({ src, alt, cameraControls = false, autoRotate = false, interactionPrompt = 'auto', style, ...props }, ref) => {
    useEffect(() => {
      // Dynamically import model-viewer (client only)
      import('@google/model-viewer');
    }, []);

    // Remove auto-rotate from props if false
    const filteredProps = { ...props };
    if ('auto-rotate' in filteredProps) {
      delete filteredProps['auto-rotate'];
    }
    return (
      <model-viewer
        ref={ref}
        src={src}
        alt={alt}
        camera-controls={cameraControls}
        interaction-prompt={interactionPrompt}
        style={style}
        {...(autoRotate ? { 'auto-rotate': true } : {})}
        {...filteredProps}
      />
    );
  }
);

// Give the forwarded component a display name for ESLint `react/display-name`
ModelViewer.displayName = 'ModelViewer';

export default ModelViewer;

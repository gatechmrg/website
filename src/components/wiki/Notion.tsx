import React from "react";

type IframeProps = {
  url: string;
  width?: string;
  height?: string;
};

const IframeEmbed: React.FC<IframeProps> = ({ url, width = "100%", height = "100%" }) => {
  return (
    <iframe
      src={url}
      width={width}
      height={height}
      style={{ border: "none" }}
      allowFullScreen
    />
  );
};

export default IframeEmbed;
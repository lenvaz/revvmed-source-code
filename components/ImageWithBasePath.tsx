import { basePath } from "@/lib/basePath";
import Image, { ImageProps } from "next/image";
import React from "react";

const ImageWithBasePath: React.FC<ImageProps> = ({ src, ...rest }) => {
  return <Image src={`${basePath}${src}`} {...rest} loading="lazy" />;
};

export default ImageWithBasePath;

import { ImageLoader } from "next/image";

export const graphCMSImageLoader = ({ src, width }: any)  => {
  const relativeSrc = (src: string) => src.split("/").pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}

export default graphCMSImageLoader;

interface IImageProps {
  src: string;
  alt: string;
  throttle?: number;
  height?: number;
  onError?: () => void;
}

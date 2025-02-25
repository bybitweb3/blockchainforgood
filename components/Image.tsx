import { cn } from "@/lib";
import { IMAGE_URL } from "@/constants";

export function RawImage({
  src,
  alt = src,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={`${IMAGE_URL}${src}`}
      alt={alt}
      className={cn("w-auto h-auto", className)}
      {...props}
    />
  );
}

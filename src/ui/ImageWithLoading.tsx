import Skeleton from "@mui/material/Skeleton";
import type { RefObject } from "react";
import { useOnLoadImages } from "./../hooks/useLoading.tsx";
import { useRef } from "react";

function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} animation="wave" />
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Skeleton
        variant="rectangular"
        width={210}
        height={60}
        animation="wave"
      />
    </div>
  );
}

interface ImageWithLoadingProps {
  PathToImage: string;
  InnerImageProps: string;
  className?: string | undefined;
}

export default function ImageWithLoading(ImageProps: ImageWithLoadingProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef as RefObject<HTMLElement>);

  return (
    <div className={`${ImageProps.className} m-0`} ref={wrapperRef}>
      {!imagesLoaded ? (
        <LoadingSkeleton />
      ) : (
        <img
          src={ImageProps.PathToImage}
          className={ImageProps.InnerImageProps}
        />
      )}
    </div>
  );
}

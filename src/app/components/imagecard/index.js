import React from "react";
import CustomCard from "../customcard";

const ImageCard = ({
  src="https://picsum.photos/200/300", height = 100, width = 100
}) => {
  return (
    <CustomCard
      content={
        <img src={src} height={height} width={width} />
      }
    />
  );
};

export default ImageCard;

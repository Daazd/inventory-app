import React from "react";
import Lottie from "react-lottie";

const LottiePlayer = ({ animationData, height = 300, width = 300 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export { LottiePlayer };

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

const ImageClassifier = () => {
  let net;
  const camera: any = React.useRef();
  const figures: any = React.useRef();
  const webcamElement: any = camera.current;

  const run = async () => {
    net = await mobilenet.load();

    const webcam = await tf.data.webcam(webcamElement, {
      resizeWidth: 220,
      resizeHeight: 227,
    });
    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);

      if (figures.current) {
        figures.current.innerText = `prediction : ${result[0].className} \n probability: ${result[0].probability}`;
      }

      img.dispose();

      await tf.nextFrame();
    }
  };

  React.useEffect(() => {
    run();
  });

  return (
    <>
      <video autoPlay playsInline muted={true} ref={camera} width="500px" height="500px" />
      <div ref={figures}></div>
    </>
  );
};

export default ImageClassifier;

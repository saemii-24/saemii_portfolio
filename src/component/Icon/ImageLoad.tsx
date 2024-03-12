import React, { useState, useEffect } from "react";
import "./Icon.scss";

const ImageLoad = ({ url, addClass }: { url: string; addClass: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setLoading(false);
    };
  }, [url]);

  return (
    <>
      {loading ? (
        <div className={`image--loading image-container ` + addClass}>
          <div></div>
        </div>
      ) : (
        <div
          className={`image--finish image-container ` + addClass}
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
    </>
  );
};

export default ImageLoad;

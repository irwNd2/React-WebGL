import init from "./Init";
import { useEffect } from "react";

const WebGl = () => {
  useEffect(() => {
    init("webgl");
  }, []);

  return (
    <canvas
      id='webgl'
      width={500}
      height={500}
      style={{ border: "1px solid" }}
    ></canvas>
  );
};

export default WebGl;

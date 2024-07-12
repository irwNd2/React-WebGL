import GLC from "../GLCommander";

let r = 0;

const render = () => {
  GLC.clear(r, 1, 0.0, 1.0);
  r = r + 0.005;
  window.requestAnimationFrame(render);
};

export default (id: string) => {
  const canvas = document.querySelector(`#${id}`) as HTMLCanvasElement;
  if (!canvas) return;
  const gl: WebGLRenderingContext | null = canvas.getContext("webgl");
  if (!gl) return;

  GLC.init(gl);
  window.requestAnimationFrame(render);
};

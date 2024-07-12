import GLC from "../GLCommander";
import ModelRenderer from "../Render/ModelRenderer";
import ModelType from "../Models/ModelType";

export default (id: string) => {
  const canvas = document.querySelector(`#${id}`) as HTMLCanvasElement;
  if (!canvas) return;
  const gl: WebGLRenderingContext | null = canvas.getContext("webgl");
  if (!gl) return;

  GLC.init(gl);

  const vertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
  const indices = [0, 1, 2];

  const modelRender = new ModelRenderer();
  modelRender.registerModel(new ModelType(vertices, indices), "triangle");
  modelRender.addInstance("instances", "triangle");
  GLC.clear(0.0, 0.0, 0.0, 0.0);
  modelRender.render();
};

import GLC from "../../GLCommander";
import ModelType from "../../Models/ModelType";
import Shader from "../../Shaders/ModelShader";

type Model = {
  type: ModelType;
  instances: (number | string)[];
};

export default class ModelRenderer {
  private shader: Shader;
  private models: Record<string, Model>;
  constructor() {
    this.shader = new Shader();
    this.models = {};
  }

  registerModel = (model: ModelType, id: string) => {
    if (!this.models[id]) {
      this.models[id] = {
        type: model,
        instances: [],
      };
    }
  };

  addInstance = (instance: number | string, id: string) => {
    this.models[id].instances.push(instance);
  };

  preRender = () => {
    GLC.viewPort();
    GLC.depthTest(true);
    Object.keys(this.models).forEach((model: string) => {
      this.models[model].type.use(this.shader);
      this.models[model].instances.forEach(() => {
        GLC.drawTriangle(this.models[model].type.indices.length);
      });
    });
  };

  render = () => {
    this.preRender();
    this.shader.use();
  };
}

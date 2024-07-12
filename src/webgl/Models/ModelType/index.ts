import GLC from "../../GLCommander";
import ModelShader from "../../Shaders/ModelShader";

export default class ModelType {
  private vertices: number[];
  indices: number[];
  private vertexBuffer: WebGLBuffer | null;
  private indexBuffer: WebGLBuffer | null;
  constructor(vertices: number[], indices: number[]) {
    this.vertices = vertices;
    this.indices = indices;
    this.vertexBuffer = null;
    this.indexBuffer = null;
    this._genVertextBuffer();
    this._genIndexBuffer();
  }

  _genVertextBuffer = () => {
    this.vertexBuffer = GLC.createBuffer()!;
    GLC.bindArrayBuffer(this.vertexBuffer);
    GLC.addArrayBufferData(this.vertices);
    GLC.unbindArrayBuffer();
  };

  _genIndexBuffer = () => {
    this.indexBuffer = GLC.createBuffer()!;
    GLC.bindElementArrayBuffer(this.indexBuffer);
    GLC.addElementArrayBuffer(this.indices);
    GLC.unbindElementArrayBuffer();
  };

  use = (shader: ModelShader) => {
    GLC.bindArrayBuffer(this.vertexBuffer);
    shader.enablePosition();
    GLC.bindElementArrayBuffer(this.indexBuffer);
  };
}

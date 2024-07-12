import GLC from "../../GLCommander";
import VertexSource from "./vertex";
import FragmentSource from "./fragment";
import Locations from "./location";

export default class ModelShader {
  private program: WebGLProgram;
  private positionAttribute: number;

  constructor() {
    const vertextShader = GLC.createVertexShader() as WebGLShader;
    GLC.addShaderSource(vertextShader, VertexSource);
    GLC.compileShader(vertextShader);

    const fragmentShader = GLC.createFragmentShader() as WebGLShader;
    GLC.addShaderSource(fragmentShader, FragmentSource);
    GLC.compileShader(fragmentShader);

    const program = GLC.createShaderProgram() as WebGLProgram;
    GLC.attachShaderToProgram(program, vertextShader);
    GLC.attachShaderToProgram(program, fragmentShader);
    GLC.linkProgram(program);

    this.positionAttribute = GLC.getAttribLocation(
      program,
      Locations.POSITION
    ) as number;
    this.program = program;
  }

  use = () => {
    GLC.useProgram(this.program);
  };

  enablePosition = () => {
    GLC.enableVertexAttribArray(this.positionAttribute!);
    GLC.pointToAttribute(this.positionAttribute!, 3);
  };
}

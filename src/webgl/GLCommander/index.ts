class GLCommander {
  private gl: WebGLRenderingContext | null = null;
  init(gl: WebGLRenderingContext) {
    this.gl = gl;
  }

  clear = (r: number, g: number, b: number, a: number) => {
    if (this.gl) {
      this.gl.clearColor(r, g, b, a);
      this.gl.clear(this.gl?.COLOR_BUFFER_BIT);
    }
  };

  viewPort = () =>
    this.gl?.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  depthTest = (use: boolean) =>
    use
      ? this.gl?.enable(this.gl.DEPTH_TEST)
      : this.gl?.disable(this.gl.DEPTH_TEST);

  createBuffer = () => {
    if (this.gl) return this.gl.createBuffer();
  };

  //float buffer
  bindArrayBuffer = (buffer: WebGLBuffer | null) => {
    if (this.gl) return this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
  };
  unbindArrayBuffer = () => this.gl?.bindBuffer(this.gl.ARRAY_BUFFER, null);
  addArrayBufferData = (vertices: number[]) =>
    this.gl?.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(vertices),
      this.gl.STATIC_DRAW
    );

  //int buffer
  bindElementArrayBuffer = (buffer: WebGLBuffer | null) =>
    this.gl?.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
  addElementArrayBuffer = (indices: number[]) =>
    this.gl?.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      this.gl.STATIC_DRAW
    );
  unbindElementArrayBuffer = () =>
    this.gl?.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);

  //shader function

  createVertexShader = () => this.gl?.createShader(this.gl.VERTEX_SHADER);
  createFragmentShader = () => this.gl?.createShader(this.gl.FRAGMENT_SHADER);

  addShaderSource = (shader: WebGLShader, source: string) =>
    this.gl?.shaderSource(shader, source);
  compileShader = (shader: WebGLShader) => {
    this.gl?.compileShader(shader);
    if (!this.gl?.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(this.gl?.getShaderInfoLog(shader));
    }
  };
  createShaderProgram = () => this.gl?.createProgram();
  attachShaderToProgram = (program: WebGLProgram, shader: WebGLShader) =>
    this.gl?.attachShader(program, shader);
  linkProgram = (program: WebGLProgram) => {
    this.gl?.linkProgram(program);
    if (!this.gl?.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.error(this.gl?.getProgramInfoLog(program));
    }
  };
  useProgram = (program: WebGLProgram) => {
    this.gl?.useProgram(program);
    if (this.gl?.getParameter(this.gl.CURRENT_PROGRAM) !== program) {
      console.error("Shader program is not in use");
    }
  };

  getAttribLocation = (program: WebGLProgram, attribute: string) =>
    this.gl?.getAttribLocation(program, attribute);
  enableVertexAttribArray = (attribute: number) =>
    this.gl?.enableVertexAttribArray(attribute);
  pointToAttribute = (data: number, dimension: number) =>
    this.gl?.vertexAttribPointer(data, dimension, this.gl.FLOAT, false, 0, 0);

  drawTriangle = (noOfIndices: number) =>
    this.gl?.drawElements(
      this.gl.TRIANGLES,
      noOfIndices,
      this.gl.UNSIGNED_SHORT,
      0
    );
}

const GLC = new GLCommander();

export default GLC;

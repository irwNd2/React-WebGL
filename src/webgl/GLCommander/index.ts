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
}

const GLC = new GLCommander();

export default GLC;

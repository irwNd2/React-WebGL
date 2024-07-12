import location from "./location";

export default `
        attribute vec3 ${location.POSITION};

        void main(void) {
            gl_Position = vec4(${location.POSITION}, 1.0);
        }
`;

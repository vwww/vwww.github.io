(()=>{"use strict";var e={},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}function o(e){return document.getElementById(e)}r.rv=()=>"1.5.8",r.ruid="bundler=rspack@1.5.8";let a=`
// modified from https://www.shadertoy.com/view/ltB3zD
precision lowp float;

const float PHI = 1.61803398874989484820459;

float gold_noise(in vec2 xy, in float seed) {
  return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}

void mainImage(out vec4 rgba, in vec2 xy) {
  float seed = fract(iTime);
  rgba = vec4(
    gold_noise(xy, seed+0.1),
    gold_noise(xy, seed+0.2),
    gold_noise(xy, seed+0.3),
    1 // gold_noise(xy, seed+0.4)
  );
}
`,i=`
// unknown source, but works on shadertoy.com

float rand_float(inout uvec2 rvec) {
  rvec.x = 36969u * (rvec.x & 65535u) + (rvec.x >> 16u);
  rvec.y = 18000u * (rvec.y & 65535u) + (rvec.y >> 16u);
  return float((rvec.x << 16u) + rvec.y) / float(0xFFFFFFFFu);
}

void mainImage(out vec4 color, in vec2 coord) {
  vec2 offset = vec2(iTime,0.0);

  uvec2 rvec = uvec2(397.6432*(coord.xy+offset)) ^ uvec2(32.9875*(coord.yx+offset));

  color = vec4(rand_float(rvec), rand_float(rvec), rand_float(rvec), 1.0);
}
`,c=o("rndvid");class n{canvas;static displayName;context;constructor(e,t){this.canvas=e;const r=e.getContext(t);if(!r)throw n.rendererNotSupported(t);this.context=r}static rendererNotSupported(e){let t=`renderer not supported: ${e}`;return alert(t),Error(t)}}class s extends n{lTime;initialTime;constructor(e,t,r,o){function a(e,t){let r=i.createShader(e);if(!r)throw Error("failed to create shader");if(i.shaderSource(r,t),i.compileShader(r),!i.getShaderParameter(r,i.COMPILE_STATUS))throw console.error(i.getShaderInfoLog(r)),console.log(t),i.deleteShader(r),Error("failed to compile shader");return r}super(e,t);const i=this.context,c=a(i.VERTEX_SHADER,r),n=a(i.FRAGMENT_SHADER,o),l=i.createProgram();if(!l)throw Error("failed to create program");if(i.attachShader(l,c),i.attachShader(l,n),i.linkProgram(l),!i.getProgramParameter(l,i.LINK_STATUS))throw console.error(i.getProgramInfoLog(l)),i.deleteProgram(l),Error("failed to link program");i.useProgram(l),this.lTime=i.getUniformLocation(l,"iTime"),this.initialTime=s.currentTime();const d=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,d),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);const h=i.getAttribLocation(l,"pos");i.vertexAttribPointer(h,2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(h)}render(){let e=this.context;e.uniform1f(this.lTime,(s.currentTime()-this.initialTime)/1e3),e.viewport(0,0,this.canvas.width,this.canvas.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)}static currentTime(){return(performance||Date).now()}}class l extends s{constructor(e,t){const r=`#version 300 es
    #ifdef GL_ES
      precision highp float;
      precision highp int;
      precision mediump sampler3D;
    #endif
    `;super(e,"webgl2",r+"layout(location = 0) in vec2 pos; void main() { gl_Position = vec4(pos.xy,0.0,1.0); }",r+`
    uniform float iTime;
    void mainImage(out vec4 c, in vec2 f);
    out vec4 shadertoy_out_color;
    void main() {
      /*
      shadertoy_out_color = vec4(1.0,1.0,1.0,1.0);
      vec4 color = vec4(1e20);
      mainImage( color, gl_FragCoord.xy );
      if(shadertoy_out_color.x<0.0) color=vec4(1.0,0.0,0.0,1.0);
      if(shadertoy_out_color.y<0.0) color=vec4(0.0,1.0,0.0,1.0);
      if(shadertoy_out_color.z<0.0) color=vec4(0.0,0.0,1.0,1.0);
      if(shadertoy_out_color.w<0.0) color=vec4(1.0,1.0,0.0,1.0);
      shadertoy_out_color = vec4(color.xyz,1.0);
      */
      mainImage( shadertoy_out_color, gl_FragCoord.xy );
    }
    `+t)}}let d=[class extends n{static displayName="2d WebCrypto";constructor(e){super(e,"2d")}render(){let e=new Uint8Array(Math.min(65536,this.canvas.width*this.canvas.height*3)),t=65536,r=this.context.createImageData(this.canvas.width,this.canvas.height);for(let o=(this.canvas.width*this.canvas.height<<2)-1;o;--o){let a=255;3&~o&&(65536===t&&(t=0,crypto.getRandomValues(e)),a=e[t++]),r.data[o]=a}this.context.putImageData(r,0,0)}},class extends n{static displayName="2d Math.random";constructor(e){super(e,"2d")}render(){let e=this.context.createImageData(this.canvas.width,this.canvas.height);for(let t=(this.canvas.width*this.canvas.height<<2)-1;t;--t)e.data[t]=3&~t?256*Math.random()|0:255;this.context.putImageData(e,0,0)}},class extends s{static displayName="webgl";constructor(e){const t=`
    #ifdef GL_ES
      precision highp float;
      precision highp int;
    #endif
    `;super(e,"webgl",t+"attribute vec2 pos; void main() { gl_Position = vec4(pos.xy,0.0,1.0); }",t+`
    uniform float iTime;
    void mainImage(out vec4 c, in vec2 f);
    void main() {
      /*
      gl_FragColor = vec4(0.0,0.0,0.0,1.0);
      vec4 color = vec4(1e20);
      mainImage(color, gl_FragCoord.xy);
      color.w = 1.0;
      if(gl_FragColor.w<0.0) color=vec4(1.0,0.0,0.0,1.0);
      if(gl_FragColor.x<0.0) color=vec4(1.0,0.0,0.0,1.0);
      if(gl_FragColor.y<0.0) color=vec4(0.0,1.0,0.0,1.0);
      if(gl_FragColor.z<0.0) color=vec4(0.0,0.0,1.0,1.0);
      if(gl_FragColor.w<0.0) color=vec4(1.0,1.0,0.0,1.0);
      gl_FragColor = vec4(color.xyz,1.0);
      */
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
    `+a)}},class extends l{static displayName="webgl2";constructor(e){super(e,a)}},class extends l{static displayName="webgl2 alt";constructor(e){super(e,i)}}];function h(){if(window.innerWidth===window.screen.width&&window.innerHeight===window.screen.height)c.width=window.innerWidth,c.height=window.innerHeight;else{c.width=1,c.height=1;let e=c.parentNode,t=e.clientWidth,r=e.clientHeight;c.width=t,c.height=r}}document.addEventListener("DOMContentLoaded",function(){o("selectRendererGroup").append(...d.map((e,t)=>{let r=document.createElement("button");return r.innerText=e.displayName,r.className=`w-${t?50:100} btn btn-outline-${t?"secondary":"primary"}`,r.onclick=()=>{o("selectRenderer").className="d-none",o("selectedRenderer").className="",c.className="";let t=new e(c);c.addEventListener("click",()=>{c.requestFullscreen().then(h).catch(()=>{alert("fullscreen failed")})}),h();let r=()=>{window.requestAnimationFrame(r),t.render()};r()},r}))}),window.onresize=h})();
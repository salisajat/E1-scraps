// doesn't work b/c p5 & webVR don't' mix
var polyfill = new WebVRPolyfill();

function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(0);
  var radius = width * 1.5;
  
navigator.getVRDisplays().then(displays => {
  // Filter down to devices that can present.
  displays = displays.filter(display => display.capabilities.canPresent);

  // If there are no devices available, quit out.
  if (displays.length === 0) {
    console.warn('No devices available able to present.');
    return;
  }

  // Store the first display we find. A more production-ready version should
  // allow the user to choose from their available displays.
  this._vr.display = displays[0];
  this._vr.display.depthNear = DemoVR.CAMERA_SETTINGS.near;
  this._vr.display.depthFar = DemoVR.CAMERA_SETTINGS.far;
});

  this._vr.display.requestPresent([{
  source: this._renderer.domElement
}]);

  _render () {
  // Use the VR display's in-built rAF (which can be a diff refresh rate to
  // the default browser one).  _update will call _render at the end.

  this._vr.display.requestAnimationFrame(this._update);
  …
};
  // Get all the latest data from the VR headset and dump it into frameData.
this._vr.display.getFrameData(this._vr.frameData);

this._vr.frameData = new VRFrameData();

// Make sure not to clear the renderer automatically, because we will need
// to render it ourselves twice, once for each eye.
this._renderer.autoClear = false;

// Clear the canvas manually.
this._renderer.clear();

this._renderer.setViewport(
    0, // x
    0, // y
    window.innerWidth * 0.5,
    window.innerHeight);

const lViewMatrix = this._vr.frameData.leftViewMatrix;
const lProjectionMatrix = this._vr.frameData.leftProjectionMatrix;

// Update the scene and camera matrices.
this._camera.projectionMatrix.fromArray(lProjectionMatrix);
this._scene.matrix.fromArray(lViewMatrix);

// Tell the scene to update (otherwise it will ignore the change of matrix).
this._scene.updateMatrixWorld(true);
this._renderer.render(this._scene, this._camera);

// Ensure that left eye calcs aren't going to interfere with right eye ones.
this._renderer.clearDepth();
this._renderer.setViewport(
    window.innerWidth * 0.5, // x
    0, // y
    window.innerWidth * 0.5,
    window.innerHeight);

const rViewMatrix = this._vr.frameData.rightViewMatrix;
const rProjectionMatrix = this._vr.frameData.rightProjectionMatrix;

// Update the scene and camera matrices.
this._camera.projectionMatrix.fromArray(rProjectionMatrix);
this._scene.matrix.fromArray(rViewMatrix);

// Tell the scene to update (otherwise it will ignore the change of matrix).
this._scene.updateMatrixWorld(true);
this._renderer.render(this._scene, this._camera);



// Call submitFrame to ensure that the device renders the latest image from
// the WebGL context.
this._vr.display.submitFrame();

  //drag to move the world.
  orbitControl();
  //  var locX = mouseX - height / 2;
  // var locY = mouseY - width / 2;

  // ambientLight(60, 60, 60);
  // pointLight(255, 255, 255, locX, locY, 100);

 // noStroke();
 stroke(random(200,255));  
  fill(0,0);
 // normalMaterial();

  translate(0, 0, -600);
  for (var e = 0; e <=2; e ++){

    for(var i = 0; i <= 12; i++){
    for(var j = 0; j <= 12; j++){
      push();
       var a = j/12 * PI;
      var b = i/12 * PI;
      var x = sin(2 * a) * radius * sin(b); 
      var y = cos(b) * radius / 2 ;
      var z = cos(2 * a) * radius * sin(b); 
      translate(x,y,z);

        if (x < 0) { 
          translate (frameCount*-map(x, 0, 710/2, 0, -0.2), 0, 0); 
        } else { 
          translate (frameCount*map(x, 0, 710/2, -0.2, 0 ), 0,0); 
          }

        if (y < 200) { 
          translate (0, frameCount*map(y, 0, 400/2, -0.2, 0), 0); 
        } else { 
          translate (0, frameCount*map(y, 400/2, 400, -0.2, 0 ), 0); 
          }

         if (z < 0) { 
          translate (0, 0, frameCount*-map(y, 0, 400/2, -0.2, 0)); 
        } else { 
          translate (0, 0, frameCount*map(y, 400/2, 400, -0.2, 0 )); 
          }

      cone(30,30);
       
      sphere(5,5,5);
       
      pop();  
    }
  }
    translate(x,y,z);
    scale(0.5,0.5,0.5);

        if (x < 710/2) { 
          translate (frameCount*map(x, 0, 710/2, 0, -0.2), 0, 0); 
        } else { 
          translate (frameCount*map(x, 710/2, 710, -0.2, 0 ), 0,0); 
          }

        if (y < 200) { 
          translate (0, frameCount*map(y, 0, 400/2, -0.2, 0), 0); 
        } else { 
          translate (0, frameCount*map(y, 400/2, 400, -0.2, 0 ), 0); 
          }

         if (z < 0) { 
          translate (0, 0, frameCount*map(y, 0, 500/2, -0.2, 0)); 
        } else { 
          translate (0, 0, frameCount*-map(y, 500/2, 500, 0, 0.2)); 
          }
}
}






//   for(var i = 0; i <= 12; i++){
//     for(var j = 0; j <= 12; j++){
//       push();
//        var a = j/12 * PI;
//       var b = i/12 * PI;
//       translate( random(map(a, 0, 16, -1000, 1000)) , random(map(a, 0, 16, -1000, 1000)), random(map(a, 0, 16, -1000, 1000))); 
// rotateZ(frameCount * 0.002);
//       cone(30,30);
//       pop();  
//     }
   // }

     //  push();
     //  var a = j/12 * PI;
     //  var b = i/12 * PI;
     //  var x = sin(2 * a) * radius * sin(b); 
     //  var y = cos(b) * radius / 2 ;
     //  var z = cos(2 * a) * radius * sin(b); 
     //  translate(x,y,z); 
     // // translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
     //  var x1 = sin(frameCount * 0.001 + j) * 200;
     //  var y1 = sin(frameCount * 0.001 + j) * 100;
     //  translate(x1, y1, y1);  

     //  cone(30, 30);  

     //  pop();

  // for(var i = 0; i <= 12; i++){
  //   for(var j = 0; j <= 12; j++){
  //     push();
  //     var a = j/12 * PI;
  //     var b = i/12 * PI;
  //     translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));    
  //     rotateY(1.25);
  //     cone(30, 30);  

  //     pop();
  //   }
  // }

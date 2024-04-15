class CameraMoverComponent extends Component {
  start(ctx) {
    Camera.main.transform.x = 0
    Camera.main.transform.y = 0
    Camera.main.scaleX = 1;
    Camera.main.scaleY = 1;
  }
  update(ctx) {
    //TODO: Move the camera
    const speed = 100;
    const scaleSpeed = 1.01
    if (Input.keysDown.includes("ArrowLeft"))
      Camera.main.transform.x -= speed / Time.fps
    if (Input.keysDown.includes("ArrowRight"))
      Camera.main.transform.x += speed / Time.fps
    if (Input.keysDown.includes("ArrowUp"))
      Camera.main.transform.y -= speed / Time.fps
    if (Input.keysDown.includes("ArrowDown"))
      Camera.main.transform.y += speed / Time.fps

    //TODO: Scale the camera
    if (Input.keysDown.includes("PageUp")){
      Camera.main.transform.scaleX /= scaleSpeed
      Camera.main.transform.scaleY /= scaleSpeed
    }
    if (Input.keysDown.includes("PageDown")){
      Camera.main.transform.scaleX *= scaleSpeed
      Camera.main.transform.scaleY *= scaleSpeed
    }
  }

}

window.CameraMoverComponent = CameraMoverComponent;
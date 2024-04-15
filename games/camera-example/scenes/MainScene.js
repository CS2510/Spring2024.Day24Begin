import "../prefabs/ForegroundGameObject.js"
import "../prefabs/ControllerGameObject.js"

import "../components/CameraMoverComponent.js"

class MainScene extends Scene {
  constructor() {
    super("blue")
    
  }
  start(ctx){
    GameObject.instantiate(new ForegroundGameObject, 100, 100, 20, 20)
    GameObject.instantiate(new ControllerGameObject())
  }

}

window.MainScene = MainScene
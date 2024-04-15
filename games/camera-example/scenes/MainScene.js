import "../prefabs/ForegroundGameObject.js"
import "../prefabs/ControllerGameObject.js"

import "../components/CameraMoverComponent.js"
import "../components/InitializeComponent.js"

class MainScene extends Scene {
  constructor() {
    super("black", 10, 1)
    
  }
  start(ctx){
    //GameObject.instantiate(new ForegroundGameObject, 100, 100, 20, 20)
    GameObject.instantiate(new ControllerGameObject())
  }

}

window.MainScene = MainScene
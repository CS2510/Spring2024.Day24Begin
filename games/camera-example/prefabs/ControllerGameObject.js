class ControllerGameObject extends GameObject{
  constructor(){
    super("ControllerGameObject")
  }
  start(ctx){
    this.addComponent(new CameraMoverComponent())
    this.addComponent(new InitializeComponent())
    super.start(ctx)

    
  }
  
}

window.ControllerGameObject = ControllerGameObject;
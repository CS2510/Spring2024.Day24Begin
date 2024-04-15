
class ForegroundGameObject extends GameObject{
  constructor(name="ForegroundGameObject"){
      super(name)
      this.addComponent(new Circle("red", "transparent"))
      
  }
  
}

window.ForegroundGameObject = ForegroundGameObject
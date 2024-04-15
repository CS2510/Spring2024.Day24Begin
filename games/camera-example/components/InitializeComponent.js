class InitializeComponent extends Component{
  start(ctx){
    //Create the various game objects
    let start = -100;
    let stop = 100;
    let inc = 1;
    for(let x = start; x <= stop; x+=inc){
      for(let y = start; y <= stop; y+=inc){
        GameObject.instantiate(new ForegroundGameObject(), x, y, .05, .05);
      }
    }
  }

}

window.InitializeComponent = InitializeComponent;
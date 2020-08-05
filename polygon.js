class Polygon extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("hexagon.png");
    }
  display(){
      //super.display()
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
  }
  };
  
class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2 
      }
      this.body = Bodies.circle(x,y,26,options);
      this.radius = 15;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle= this.body.angle;
      //Push(pos.x,pos.y);
     // translate(pos.x)
      //rotate(angle)
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(pos.x,pos.y, this.radius);

      if (keyPressed()){}
    }
  };

  function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:15,y:-9});

	}
}
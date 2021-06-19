 class Ball 
 {
   constructor(x,y,radius)
   {
    var options=
    {isStatic:false,
    restitution:1,
    friction:0,
    density:7.8}

    this.body=Bodies.circle(x,y,radius,options)
    World.add(myWorld,this.body)
    this.body.radius = radius
   }
   display()
   {
     push()
    fill("lightgreen")
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
  //  this.body.position.x = mouse.x
  //  this.body.position.y = mouse.y
     pop()
   }
 }
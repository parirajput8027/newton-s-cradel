class Longbody 
{
   constructor(x,y,width,height)
   {
   var options={isStatic :true}
   this.body = Bodies.rectangle(x,y,width,height,options)
   World.add(myWorld,this.body)
   this.body.height = height
   this.body.width  = width
  }

  display()
{
  fill("black")
   rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height)
}
}
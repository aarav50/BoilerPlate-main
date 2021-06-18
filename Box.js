
class a{
    constructor(x,y){
var options={
    restitution:1,
    friction:9000,
    density:900000
}
this.width=90
this.height=90
this.body=Bodies.rectangle(x,y,this.width,this.height,options)
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
       fill(rgb(204,204,102)) 
       rect(0,0,this.width,this.height)
       pop()
    }
}

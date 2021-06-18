class aa{
    constructor(x,y){
        var options={
            restitution:1,
            friction:2,
            density:2

        }
        this.radios=90
        this.body=Bodies.circle(x,y,this.radios,options)
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        fill("green")

        ellipseMode(RADIUS)
        ellipse(0,0,this.radios,this.radios)
        pop()
    }
}
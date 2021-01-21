class Chain{
    constructor(body1, body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness: 1.5,
            length: 0
        }
    this.Chain = Constraint.create(options);
    World.add(world,Chain);
    }
    display(){
        var pointA = this.Chain.bodyA.position
        var pointB = this.Chain.bodyB.position
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
class cable{
    constructor(bodyA, bodyB){

    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.04,
        length : 10
    }

        this.cable = Constraint.create(options);
        World.add(world, this.cable);

    }
    display(){

    }
}
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //this gets dispakyed if the sligshot is still there and not null meaning that the user has not pulledthe slingshot yet
        
            

        
        //image for the catapult
        
    }
    
}
class Diamond{

    constructor(x,y,width,height){
        var options = {
            restitution: 0.72,
            friction: 7,
            density: 75 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("cyan");
        stroke("black");
        rect(pos.x, pos.y, this.width, this.height);
    }
}

class Polygon{

  constructor(x, y, width, height) {
      var options = {

          isStatic: false,
          restitution: 0.1,
          frictions: 0.01,
          density:0.02

      }

      this.polygon = Bodies.rectangle(x, y, width, height, options);
      this.polygon = loadImage("polygon.png");

      this.width = width;
      this.height = height;
      World.add(world, this.polygon);
  }

  display() {
      var pos = this.body.position;
      strokeWeight(2);
      fill("yellow");
      imageMode(CENTER)
    image(this.image,pos.x, pos.y, this.width, this.height);

  }
  
}
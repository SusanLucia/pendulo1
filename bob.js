class bob
{
	constructor(x,y,r)
	{
		var options={
			"restitution": 1.2,
			"friction": 1.0,
			"density": 0.8
			
			}
		
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("ball.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;
			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			fill(rgb(6,253,199))
			imageMode(CENTER);
			image(this.image,0,0,50,50);
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}


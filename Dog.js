function Dog(name){
	this.name = name
	this.stomatch = []
	this.action = []
}

Dog.prototype.eat = function(food){
	this.stomatch.push(food)
}
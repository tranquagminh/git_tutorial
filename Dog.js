function Dog(name){
	this.name = name
	this.stomatch = []
}

Dog.prototype.eat = function(food){
	this.stomatch.push(food)
}
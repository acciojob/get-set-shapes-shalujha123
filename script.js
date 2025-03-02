//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width
		this._height = height
	}
	get width(){
		return this._width
	}
	set width(newWidth){
		this._width = newWidth
	}
	get height(){
		return this._height
	}
	set height(newHeight){
		this._height = newHeight
	}
	
	getArea(){
		return this._width * this._height
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
		this._side = side
	}
	get width(){
		return this._side
	}
	set width(value){
		this._side = value
		super.width = value
		super.height = value
	}
	get height(){
		return this._side
	}
	set height(value){
		this._side = value
		super.width = value
		super.height = value
	}
	getPerimeter(){
		return this._side * 4
	}
	getArea(){
		return this._side * this._side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;











// var vec = new Victor(42, 1337);
// x = vec.x;
// console.log(x)

// var vec1 = new Victor(100, 200);
// v = vec1.toString();
// console.log(v)


// //add victor

// var vec1 = new Victor(100, 200);
// var vec2 = new Victor(20, 30);
// const sum = vec1.add(vec2);
// s = sum.toString();

// console.log(s)

// //sub victor

// var vec1 = new Victor(100, 200);
// var vec2 = new Victor(20, 30);
// const sub = vec1.subtract(vec2);
// v = sub.toString();

// console.log(v)

// //multiply victor

// var vec1 = new Victor(100, 200);
// var vec2 = new Victor(3, 4);
// const multiply = vec1.multiply(vec2);
// m = multiply.toString();

// console.log(m)

// //find length
// var vec1 = new Victor(100, 100)
// const len = vec1.length();
// le = len.toString();
// console.log("len " + le)


// //unit vicctor
// var vec1 = new Victor(100, 100)
// const dir = vec1.direction();
// direction = dir.toString();
// console.log("dir " + direction)

// // angle
// var vec1 = new Victor(100, 100)
// const ang = vec1.angle();
// angle = ang.toString();
// console.log("angle " + angle)

/////////////////////////////////////////////////////////////
//implement victor

class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(vector){
        return new Vector(this.x  + vector.x , this.y + vector.y)
    }

    sub(vector){
        return new Vector(this.x  - vector.x , this.y - vector.y)
    }

    multiply(vector){
        return new Vector(this.x  * vector.x , this.y * vector.y)
    }

    length(){
        return Math.sqrt( this.x * this.x + this.y * this.y );

    }

    unit(){
        return new Vector(this.x / this.length(), this.y / this.length()); 
    }

    angle(){
        return Math.atan2(this.x, this.y) * 180 / Math.PI;
    }
}

const a = new Vector(10, 12);
const b = new Vector(3, 15);
console.log(a);
console.log(b);
console.log(a.add(b));
console.log(a.sub(b));
console.log(a.multiply(b));
console.log(a.length(a));
console.log(a.unit(a));
console.log(a.angle(a));
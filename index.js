// Add your Circle class here
//First, let's create a class of Circle

//Circle will accept 1 parameter, radius, and use this.radius to store the value

//Use Math.PI to get an accurate measurement of pi (Links to an external site.) (π) / set this as a varialbe

//Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi

//Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly

//You will need to use Math.sqrt() (Links to an external site.) in your area setter method
//Diameter = radius • 2
//Circumference = π • diameter
//Area = π • radius2

//TO GET DATA, USE GET
//TO SET DATA, USE SET

const pi = Math.PI 

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //Diameter = radius * 2
    get diameter(){
        return this.radius * 2
    }


    set diameter(diameter){
        this.radius = diameter / 2
    }

    //circumferences = diameter * pi
    get circumference() {
            return (this.radius * 2) * pi
    }

    set circumference(circumference){
        this.radius = circumference / (pi * 2)
    }


    //π • radius2
    get area(){
        return pi * (this.radius * this.radius)
    }

    set area(area){
        this.radius = Math.sqrt( area / pi)
    }
}








//------------NOTES------------___
//We can use get and set whenever we are handling input or output of a class
//We are, in essence, creating the public interface of the class.
//We can treat this interface as a menu of sorts.. get and set methods are the ways in which other classes and code should utilize this class.
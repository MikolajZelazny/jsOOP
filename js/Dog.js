class Dog extends Animal {
    constructor(name, weight, height, sound) {
        super(name, weight, height)
        this.sound=sound;
    }
    
    makeSound(){
        console.log("Dog make a sound: " + this.sound);
    } 
}
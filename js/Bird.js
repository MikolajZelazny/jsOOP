class Bird extends Animal {
    constructor(name, weight, height, sound) {
        super(name, weight, height);
        this.sound=sound;
    }
    makeSound(){
        console.log("Bird make a sound: " + this.sound);
    } 
}
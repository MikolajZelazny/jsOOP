class Animal {

    constructor(name, weight, height) {
        if (this.constructor === Animal) {
            throw new Error("Nie możesz tworzyć obiektów z klasy abstrakcyjnej!");
        }

        this.name = name;
        this.weight= weight;
        this.height= height;
    }   
}
/*PROTÓTIPOS: todos os objetos são derivados de um objeto pai, que possui metétodos genéricos, como por exemplo os vetores e strings*/

//CLASSES: O JS nn possui classes nativamente. Tds as classes são objetos e a herança se dá por protótipos.

class Meal {
    constructor (food) {
        this.food = food;
    }

    eat(){
        return ':P';
    }
}

class Animal {
    constructor(type = 'animal'){
        this.type = type;
    }

    get type(){
        return this._type;
    }

    set type(val){
        this._type = val.toUpperCase();
    }

    makeSound(){
        console.log('Making animal sound');
    }
}

let a = new Animal()
console.log(a.type); //ANIMAL

class Cat extends Animal {
    constructor(){
        super('cat')
    }

    makeSound(){
        super.makeSound();
        console.log('Meow!');
    }
}

let b = new Cat()
console.log(b.type) //CAT
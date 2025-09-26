interface Animal {
    eat(): void;
}

interface Cat extends Animal {
    meow(): string;    
}

interface Dog extends Animal {
    bark(): string;
}

class PersianCat implements Cat {
    eat(): void{
        console.log("Eating");
    }
    meow(): string {
        return "Meeow";
    }
}

class BeagleDog implements Dog {
  eat(): void {
    console.log("Eating");
  }
  bark(): string {
    return "Woof";
  }
}

interface PetShop {
    sellPet(): Cat | Dog;
}

class PawPetShop implements PetShop {
  sellPet(): Cat | Dog {
    return Math.random() > 0.5 ? new PersianCat() : new BeagleDog();
  }
}

const myNewPet = new PawPetShop().sellPet();

function makePetNoise(pet: Cat | Dog) {    
    if(pet instanceof PersianCat){
        return pet.meow();
    }
    if(pet instanceof BeagleDog) {
        return pet.bark();
    }
}
type FoodNeeds = {
    amount: number;
    brand: string;
    frequency:number;
}

interface Animal {
    eat(): void;
    getFoodNeeds(): Partial<FoodNeeds>;
}

interface Cat extends Animal {
    meow(): string;
    getFoodNeeds(): FoodNeeds;
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
    getFoodNeeds(): FoodNeeds {
        return {
            amount: 100,
            brand: 'not-Whiskas',
            frequency: 3,
        };
    }
}

class BeagleDog implements Dog {
  eat(): void {
    console.log("Eating");
  }
  bark(): string {
    return "Woof";
  }
  getFoodNeeds(): Partial<FoodNeeds> {
      return {
        amount: 100,
      };
  }
}

type Pet = Cat | Dog;

interface PetShop {
    sellPet(): Pet;
}

class PawPetShop implements PetShop {
  sellPet(): Pet {
    return Math.random() > 0.5 ? new PersianCat() : new BeagleDog();
  }
}

const myNewPet = new PawPetShop().sellPet();

function makePetNoise(pet: Pet) {    
    if(pet instanceof PersianCat){
        return pet.meow();
    }
    if(pet instanceof BeagleDog) {
        return pet.bark();
    }
}
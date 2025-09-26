type FoodNeeds = {
    amount?: number;
    brand?: string;
    frequency?:number;
}

type Vaccines = {
  rabies: boolean;
  leptospirosis: boolean;
};

interface Animal {
    eat(): void;
    getFoodNeeds(): FoodNeeds;
    hasVaccines(): Partial<Vaccines>;
}

interface Cat extends Animal {
    meow(): string;
    getFoodNeeds(): Required<FoodNeeds>;
    hasVaccines(): Omit<Vaccines, "leptospirosis">;
}

interface Dog extends Animal {
    bark(): string;
    getFoodNeeds(): Pick<FoodNeeds, "amount">;
}

class PersianCat implements Cat {
    eat(): void{
        console.log("Eating");
    }
    meow(): string {
        return "Meeow";
    }
    getFoodNeeds(): Required<FoodNeeds> {
        return {
            amount: 100,
            brand: 'not-Whiskas',
            frequency: 3,
        };
    }
    hasVaccines(): Omit<Vaccines, "leptospirosis"> {
        return {
            rabies: true
        }
    }
}

class BeagleDog implements Dog {
  eat(): void {
    console.log("Eating");
  }
  bark(): string {
    return "Woof";
  }
  getFoodNeeds(): Pick<FoodNeeds, "amount"> {
      return {
        amount: 100,
      };
  }
  hasVaccines(): Partial<Vaccines> {
      return{
        rabies: false,
        leptospirosis: true
      }
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
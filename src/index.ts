const hello: string = "Hello, World!";
console.log(hello);

const a: string = "Hello, World!";
const b: number = 1;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: symbol = Symbol("foo");
const g: bigint = BigInt(100); 
const h: any = "Hello, World!";
const i: unknown = "Hello, World!";
const j: string[] = ["Hello", "World"];
const k: Array<string> = ["Hello", "World"];
// definimos una función que recibe un number y devuelve un boolean
const l: (param: number) => boolean = (param: number) => param > 0;

interface TransportVehicle {
    getTravelTime(trip: Trip): Metric;
}

type AvailableUnits = "m" | "s" | "m/s";

type Metric = {
    value: number;
    unit: AvailableUnits;
}

type Trip = {
  distance: Metric;
};

class Car implements TransportVehicle {
    readonly #averageSpeed: Metric;
    constructor(averageSpeed: Metric){
        this.#averageSpeed = averageSpeed;
    }

    getTravelTime(trip: Trip): Metric {
        return {
            value: trip.distance.value / this.#averageSpeed.value,
            unit: "s",
        };
    }    
}

class CommercialFlight implements TransportVehicle {
  readonly #averageSpeed: Metric = { value: 250, unit: "m/s" }; // 900km/h
  readonly #airportWaitingTime: Metric = { value: 14400, unit: "s" };

  getTravelTime(trip: Trip): Metric {
    return {
      value:
        trip.distance.value / this.#averageSpeed.value +
        this.#airportWaitingTime.value,
      unit: "s",
    };
  }
}

// Creamos un viaje
const trip: Trip = { distance: { value: 10000000, unit: "m" } };

// Creamos un array Polimórfico de vehículos de transporte disponibles
const availableTransportVehicles: TransportVehicle[] = [
  new Car({ value: 20, unit: "m/s" }),
  new CommercialFlight(),
];

availableTransportVehicles.forEach((vehicle) => {
  console.log(vehicle.getTravelTime(trip));
}); // { value: 500000, unit: 's' } y { value: 54400, unit: 's' }


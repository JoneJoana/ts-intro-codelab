type Entity = {
    id: number;
    is_active: boolean;
}

//type DetailedEntity = Entity & { name: string; is_active: boolean };

type Result<T> = {
    data: T;
    status: string;
    message: string;
}

interface IEntityRepository<DetailedEntity extends Entity> {
    getAll(): Entity[];
    getById(id: number): DetailedEntity | null;
    create(entity: Omit<DetailedEntity,'id'>): Result<DetailedEntity>;
    modify(entity: Partial<Omit<DetailedEntity,'id'>>): Result<DetailedEntity>; //patch
    update(entity: Omit<DetailedEntity,'id'>): Result<DetailedEntity>; //put
    delete(id: number): Result<null>;
}

type User = Entity & {
    name: string;
    email: string;
    dni: string;
}

type Product = Entity & {
    code: string;
    price: number;
}

class UserRepository implements IEntityRepository<User> {
    #url: string = "/users";

    getAll(): Entity[] {
        throw new Error("Method not implemented.");
    }
    getById(id: number): User | null {        
        throw new Error("Method not implemented.");
    }
    create(entity: Omit<User, "id">): Result<User> {
        throw new Error("Method not implemented.");
    }
    modify(entity: Partial<Omit<User, "id">>): Result<User> {
        throw new Error("Method not implemented.");
    }
    update(entity: Omit<User, "id">): Result<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Result<null> {
        throw new Error("Method not implemented.");
    }    
}

class ProductRepository implements IEntityRepository<Product> {
    #url: string = "/products";

    getAll(): Entity[] {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Product | null {
        throw new Error("Method not implemented.");
    }
    create(entity: Omit<Product, "id">): Result<Product> {
        throw new Error("Method not implemented.");
    }
    modify(entity: Partial<Omit<Product, "id">>): Result<Product> {
        throw new Error("Method not implemented.");
    }
    update(entity: Omit<Product, "id">): Result<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Result<null> {
        throw new Error("Method not implemented.");
    }
    
}
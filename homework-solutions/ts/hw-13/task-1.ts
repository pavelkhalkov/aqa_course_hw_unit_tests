//Task 1.1.

let num1: number = 42;
let str: string = "Hello, TypeScript!";
let isComplete: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let cities: string[] = ["Minsk", "Warsaw", "London"];
let person: { name: string; age: number; city: string } = {
  name: "Alice",
  age: 30,
  city: "Minsk",
};

//Task 1.2.

type User = {
  name: string;
  age: number;
  email?: string;
};

type Grade = "junior" | "middle" | "senior";

//Task 1.3.

interface ICar {
  brand: string;
  model: string;
  year?: number;
}

//Task 1.4.

interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

interface FullAddress extends IAddress {
  country: string;
}

//Task 1.5.

type Product = {
  id: number;
  name: string;
  price: number;
};

type DiscountedProduct = Product & {
  discount: number;
};

//Task 1.6.

function calculateDiscount(product: Product): number {
  if ("discount" in product) {
    const discountedProduct = product as DiscountedProduct;
    return discountedProduct.price - (discountedProduct.price * discountedProduct.discount) / 100;
  }
  return product.price; 
}

const discountedProduct: DiscountedProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
  discount: 10,
};

console.log(calculateDiscount(discountedProduct));
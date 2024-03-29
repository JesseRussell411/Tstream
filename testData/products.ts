import fs from "fs/promises";
import { Tstream } from "../src/Tstream";
import { lazy } from "../src/privateUtils/functional";

// const productNames = [
//     "power blaster 9000",
//     "super scoot",
//     "ajax bleach",
//     "just a dead thing",
//     "powerBook",
//     "apple",
//     "orange",
//     "banana mania",
//     "junk master",
//     "message master",
//     "in-fruit-inator",
//     "I can't believe it's butter",
//     "mega string",
//     "mega-mart-express",
//     "sack of hammers",
//     "russian screwdriver",
//     "lip bomb",
//     "ridiculous soaker",
//     "squirt gun",
//     "canadian squirt gun",
//     "turkey baster",
//     "ajax extreme",
//     "powdered milk",
//     "powdered cheese",
//     "gas-cooker",
//     "plant-based burger",
//     "meat-based veggies",
//     "X-treme sunglasses",
//     "rocket scooter",
//     "lip balm",
//     "nuclear lip balm",
//     "quarter master",
// ];
// let id = 1;

// const products = Stream.from(productNames)
//     .shuffle()
//     .map((name, i) => ({
//         name,
//         price: random.int(0, 1000),
//         id: i + 1,
//     }))
//     .cache();

// export async function getProducts() {
//     return products;
// }

export interface Product {
    id: number;
    name: string;
    price: number;
}

export const getProducts = lazy(async (): Promise<Tstream<Product>> => {
    const data = await fs.readFile("./testData/productData.json");
    const products = JSON.parse(data.toString()) as any[];
    return Tstream.from(products);
});

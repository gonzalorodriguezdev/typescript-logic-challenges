type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    active: boolean;
};

const products: Product[] = [
    { id: 1, name: "Mouse", price: 25, stock: 10, active: true },
    { id: 2, name: "Keyboard", price: 70, stock: 0, active: true },
    { id: 3, name: "Monitor", price: 200, stock: 5, active: true },
    { id: 4, name: "Headphones", price: 90, stock: 8, active: false },
    { id: 5, name: "Webcam", price: 50, stock: 4, active: true },
];

function generateProductReport(products: Product[]): string[] {
    const activeWStock = products.filter((prod) => prod.active === true && prod.stock > 0 && prod.price >= 50)

    return activeWStock.map((prod) => `${prod.name} - $${prod.price}`)
}

console.log(generateProductReport(products))
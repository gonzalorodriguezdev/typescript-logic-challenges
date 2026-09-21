type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    active: boolean;
};

const products: Product[] = [
    { id: 1, name: "Mouse", price: 25, stock: 10, active: true },
    { id: 2, name: "Keyboard", price: 70, stock: 5, active: false },
    { id: 3, name: "Monitor", price: 200, stock: 3, active: true },
    { id: 4, name: "Headphones", price: 90, stock: 0, active: true },
    { id: 5, name: "Webcam", price: 50, stock: 4, active: true },
];

function calculateAvailableInventoryValue(products: Product[]): number {
    const activosConStock = products.filter((product) => product.active === true && product.stock > 0)

    const total = activosConStock.reduce((acc, current) => acc += current.price * current.stock
        , 0)

    return total
}

console.log(calculateAvailableInventoryValue(products))
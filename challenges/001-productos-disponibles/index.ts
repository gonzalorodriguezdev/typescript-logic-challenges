interface Producto {
    nombre: string;
    precio: number;
    stock: number;
}

const productos: Producto[] = [
    { nombre: "Mouse", precio: 25, stock: 10 },
    { nombre: "Teclado", precio: 50, stock: 0 },
    { nombre: "Monitor", precio: 200, stock: 4 },
    { nombre: "Auriculares", precio: 75, stock: 0 },
    { nombre: "Webcam", precio: 100, stock: 7 },
];

function obtenerProductosDisponibles(productos: Producto[]): string[] {
    return (productos.filter((p) => p.stock > 0).map((p) => `${p.nombre} - ${p.precio}`))
}

console.log(obtenerProductosDisponibles(productos));
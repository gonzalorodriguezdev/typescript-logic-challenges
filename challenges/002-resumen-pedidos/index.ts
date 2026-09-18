type Pedido = {
    id: number;
    cliente: string;
    total: number;
    pagado: boolean;
};

const pedidos: Pedido[] = [
    { id: 1, cliente: "Ana", total: 120, pagado: true },
    { id: 2, cliente: "Lucas", total: 80, pagado: false },
    { id: 3, cliente: "María", total: 200, pagado: true },
    { id: 4, cliente: "Pedro", total: 50, pagado: false },
    { id: 5, cliente: "Sofía", total: 150, pagado: true },
];

function calcularTotalPagado(pedidos: Pedido[]): number {

    return pedidos.filter((pedido) => pedido.pagado).reduce((acc, curr) => acc + curr.total, 0)


}

console.log(calcularTotalPagado(pedidos));
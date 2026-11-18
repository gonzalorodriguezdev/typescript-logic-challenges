type Order = {
    id: number;
    customer: string;
    total: number;
    paid: boolean;
};

const orders: Order[] = [
    { id: 1, customer: "Ana", total: 120, paid: true },
    { id: 2, customer: "Lucas", total: 80, paid: false },
    { id: 3, customer: "Pedro", total: 250, paid: true },
    { id: 4, customer: "Sofia", total: 60, paid: true },
    { id: 5, customer: "Maria", total: 150, paid: false },
];

function calculatePaidOrdersTotal(orders: Order[]): number {
    const paidOrders = orders.filter((order) => order.paid === true)

    return paidOrders.reduce((acc, curr) => acc + curr.total, 0)

}

console.log(calculatePaidOrdersTotal(orders))
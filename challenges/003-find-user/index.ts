type User = {
    id: number;
    name: string;
    email: string;
    active: boolean;
};

const users: User[] = [
    { id: 1, name: "Ana", email: "ana@email.com", active: true },
    { id: 2, name: "Lucas", email: "lucas@email.com", active: false },
    { id: 3, name: "Maria", email: "maria@email.com", active: true },
    { id: 4, name: "Pedro", email: "pedro@email.com", active: false },
];

function findActiveUser(users: User[], id: number): User | undefined {

    return users.find((user) => user.id === id && user.active)

}

console.log(findActiveUser(users, 1))
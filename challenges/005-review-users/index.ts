type User = {
    id: number;
    name: string;
    age: number;
    active: boolean;
};

const users: User[] = [
    { id: 1, name: "Ana", age: 25, active: true },
    { id: 2, name: "Lucas", age: 17, active: true },
    { id: 3, name: "Pedro", age: 32, active: false },
    { id: 4, name: "Sofia", age: 21, active: true },
];

function getActiveAdultNames(users: User[]): string[] {

    const activeAdults = users.filter((user) => user.age >= 18 && user.active == true)

    return activeAdults.map((user) => user.name)

}

console.log(getActiveAdultNames(users))
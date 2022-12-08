const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const hightNumbers = array.filter((n) => {
    if(n >= 5) {
        return n;
    }
});

console.log(hightNumbers);

const users = [
    {name: 'Lucas', available: false},
    {name: 'Miguel', available: false},
    {name: 'Samuel', available: true},
    {name: 'Dayanne', available: true},
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);
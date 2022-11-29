// create a class that simulates a bank account
class Bank {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(value) {
        return this.balance += value;
    }  
    withdrawal(value) {
        return this.balance -= value; 
    }
}

let account = new Bank(1000);
console.log(account.balance);

account.deposit(700);
console.log(account.balance);

account.withdrawal(150);
console.log(account.balance);

// create a class that simulates an e-commerce shopping cart
class eCommerce {
    constructor(items, totalQuantity, totalValue) {
        this.items = items;
        this.totalQuantity = totalQuantity;   
        this.totalValue = totalValue;
    }
    addItem(item) {
        let counter = 0;

        for(let itemCart in this.items) {
            if(this.items[itemCart].id == item.id) {
                this.items[itemCart].quantity += item.quantity;
                counter = 1;
            }
        }

        if(counter == 0) {
            this.items.push(item);
        }

        this.totalQuantity += item.quantity;
        this.totalValue += item.price * item.quantity;
    }
    removeItem(item) {
        for(let itemCart in this.items) {
            if(this.items[itemCart].id == item.id) {
                let object = this.items[itemCart];
                let index = this.items.findIndex(function(object) { return object.id == item.id});
                
                this.totalQuantity -= object.quantity;
                this.totalValue -= object.price * object.quantity;

                this.items.splice(index, 1);
            }
        }
    }
}

let clothes = new eCommerce([
    {
        id: 1,
        name: 'Shirt',
        quantity: 3,
        price: 35
    },
    {
        id: 2,
        name: 'Pants',
        quantity: 2,
        price: 110
    }
], 5, 325);

console.log(clothes);

clothes.addItem({id: 1, name: 'Shirt', quantity: 7, price: 35});
console.log(clothes);

clothes.addItem({id: 1, name: 'Coat', quantity: 1, price: 220});
console.log(clothes);

clothes.removeItem({id: 1, name: 'Shirt', quantity: 8, price: 35});
console.log(clothes);

clothes.addItem({id: 1, name: 'Coat', quantity: 1, price: 220});
console.log(clothes);

// create a class that simulates a customer address
class address {
    constructor(street, neighborhood, city, state) {
        this.street = street;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }
    set setStreet(changeStreet) {
        this.street = changeStreet;
    }
    set setNeighborhood(changeNeighborhood) {
        this.neighborhood = changeNeighborhood;
    }
    set setCity(changeCity) {
        this.city = changeCity;
    }
    set setState(changeState) {
        this.state = changeState;
    }
}

let myAddress = new address('street of sun', 'moon', 'galaxy', 'universe');

console.log(myAddress.street);

myAddress.setStreet = 'street of venus';

console.log(myAddress.street);

// create a class that simulates a car
class Car {
    constructor(brand, color, gasolineRemaining) {
        this.brand = brand;
        this.color = color;
        this.gasolineRemaining = gasolineRemaining;
    }
    driveCar() {
        return this.gasolineRemaining -= 2;
    }
    toFuel(value) {
        return this.gasolineRemaining += value;
    }
}

let celta = new Car('celta', 'black', 27);

celta.driveCar();
console.log(celta.gasolineRemaining);

celta.driveCar();
console.log(celta.gasolineRemaining);

celta.toFuel(12);
console.log(celta.gasolineRemaining);

celta.driveCar();
console.log(celta.gasolineRemaining);

// more correct way
// class Car {
//     constructor(brand, color, gasolineRemaining, consumption) {
//         this.brand = brand;
//         this.color = color;
//         this.gasolineRemaining = gasolineRemaining;
//         this.consuption = consumption;
//     }
//     driveCar(km) {
//         let consumedLiters = km / this.consuption;
//         return this.gasolineRemaining -= consumedLiters;
//     }
//     toFuel(litres) {
//         return this.gasolineRemaining += litres;
//     }
// }

// let car = new Car('BMW', 'black', 78, 16);

// console.log(car);

// car.driveCar(80);

// console.log(car.gasolineRemaining);

// car.toFuel(15);

// console.log(car.gasolineRemaining);

// console.log(car);

// create a class bank account
class bankAccount {
    constructor(checkingAccountBalance, savingsAccountBalance, savingsInterest) {
        this.checkingAccountBalance = checkingAccountBalance;
        this.savingsAccountBalance = savingsAccountBalance;
        this.savingsInterest = savingsInterest;
    }
    depositCurrentAccount(valueDeposit) {
        this.checkingAccountBalance += valueDeposit;
    }
    withdrawalCurrentAccount(valueWithdrawal) {
        this.checkingAccountBalance -= valueWithdrawal;
    }
    depositSavingsAccount(valueDeposit) {
        this.savingsAccountBalance += valueDeposit;
    }
    withdrawSavingsAccount(valueWithdrawal) {   
        this.savingsAccountBalance -= valueWithdrawal;
    }
    transferSavingsToCurrent(value) {
        this.checkingAccountBalance += value;
        this.savingsAccountBalance -= value;
    }
    anniversaryInterest() {
        let interest = (this.checkingAccountBalance * this.savingsInterest) / 100;
        this.checkingAccountBalance += interest;
    }
}

let myBankAccount = new bankAccount (7600, 1100, 1.5)
console.log(myBankAccount);

myBankAccount.depositCurrentAccount(3300);
console.log(myBankAccount.checkingAccountBalance);

myBankAccount.withdrawalCurrentAccount(700);
console.log(myBankAccount.checkingAccountBalance);

myBankAccount.depositSavingsAccount(700);
console.log(myBankAccount.savingsAccountBalance);

myBankAccount.withdrawSavingsAccount(300);
console.log(myBankAccount.savingsAccountBalance);

myBankAccount.transferSavingsToCurrent(700);
console.log(myBankAccount.checkingAccountBalance);
console.log(myBankAccount.savingsAccountBalance);

myBankAccount.anniversaryInterest();

class specialAccount extends bankAccount {
    constructor (checkingAccountBalance, savingsAccountBalance, savingsInterest) {
        super(checkingAccountBalance, savingsAccountBalance, savingsInterest * 2);
    }
} 

let myBankAccountSpecial = new specialAccount(10000, 25000, 2);

console.log(myBankAccountSpecial);

myBankAccountSpecial.anniversaryInterest();

console.log(myBankAccountSpecial);

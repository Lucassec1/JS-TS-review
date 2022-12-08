const sum = function(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

// const arrowSum = (a, b) => a + b;

console.log(sum(9, 9));
console.log(arrowSum(9, 9));

const greeting = (name) => {
    if (name) {
        return 'Hi ' + name + '!';
    } else {
        return 'Hi!';
    }
}

greeting(greeting('Lucas'));
greeting(greeting());

const testArrow = () => console.log('tested!');

testArrow();

const user = {
    name: "Samuel",
    sayUserName() {
        let self = this;
        setTimeout(function() {
            console.log(this);
            console.log("Username: " + self.name)
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(()=> {
            console.log("Username: " + this.name)
        }, 500);
    }
}

user.sayUserName();
user.sayUserNameArrow();
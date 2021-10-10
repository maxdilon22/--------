'use strict';
function User(name,id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello! ${this.name}`);
    };
}
User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел!`);
};
const nick = new User('Nick',20);
console.log(nick);

nick.hello();



nick.exit();


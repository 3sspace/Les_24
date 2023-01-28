
"use strict";
class User {
  #name;
  constructor(name, login, age){
    this.#name = name;
    this.login = login;
    this.age = age;
  }

getName(isAdmin) {
    if (isAdmin != true) {
      return 'Permission denied';
    } else if (this.#name != "") {
      return this.login;
    } else {
      return this.#name;
    }
  }
  changeName(name, password) {
    return password === "123"
      ? `Name changed from ${this.#name} to ${name}`
      : "Permission denied";
  }
}
const user1 = new User("Mike", "MK_18", 18);
const user2 = new User("", "NRG", 22);
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);
console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));
console.log(user1.changeName("Kolya", "123"));


class Admin extends User {
  #isAdmin;
  constructor(name, login, age, isAdmin) {
    super(name, login, age);
    this.#isAdmin = true;
  }
  getUserName(user) {
    return user.getName(this.#isAdmin);
  }
}

const user = new User('Mike', 'mikeangelo', 99);
const admin = new Admin('Math', 'mathew', 36);
console.log(admin.getUserName(user));
console.log(admin.getUserName(admin));


class Usver {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    let secretPhone = this.#phone.split("");
    secretPhone.splice(0, 8, "*", "*", "*", "*", "*", "*");
    secretPhone = secretPhone.join("");
    return isAdmin ? this.#phone : secretPhone;
  }
}
const user3 = new Usver('Mike', '067-888-88-99');
const user4 = new Usver('Tom', '099-888-88-99');

console.log(user3.getPhone(true));
console.log(user4.getPhone(false));
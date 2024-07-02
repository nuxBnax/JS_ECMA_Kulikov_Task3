class Employee {
	constructor (name) {
		this.name = name;
	}
	displayInfo() {
		console.log(`Name: ${this.name}`)
	}
}

class Manager extends Employee{
	constructor(name, department) {
		super(name);
		this.department = department;
	}
	displayInfo() {
		console.log(`Name: ${this.name}, Department: ${this.department}`);
	}
}
const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe","Sales");
manager.displayInfo();



class Product {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
	toString() {
		return this.name, this.price, this.quantity;
	}
}

class Order {
	
	constructor (id) {
		this.id = id;
		this.products = new Array();
	}
	
	addProduct(product) {
		return this.products.push(product);
	}
	getTotalPrice() {
		const sum = 0;
		for (let i = 0; i >= this.products.lenght; i++) {
			const item = this.products[i];
			sum += item.price * item.quantity;
		}
		return sum;
	}
	getInfo() {
		console.log(`Номер заказа - ${this.id}, добавленый товар ${this.products}`)
	}
}


const order = new Order(12345);

const product1 = new Product("Phone", 500, 2);
const product2 = new Product("Phonfe", 5300, 32);

order.addProduct(product1);
order.addProduct(product2);
console.log(order.getInfo());

// const product2 = new Product("Headphones",100,1);
// order.addProduct(product2);

console.log(order.getTotalPrice());

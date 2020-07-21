// user class
class User {
	constructor(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.coin = 0;
		this.courses = [];
	}
	login() {
		console.log(`${this.name} has logged in`);
		return this;
	}
	logout() {
		console.log(`${this.name} has logged out`);
		return this;
	}
}

// moderator class => perform addCoin or removeCoin
class Moderator extends User {
	addCoin(user) {
		user.coin++;
		return this;
	}
	removeCoin(user) {
		user.coin--;
		return this;
	}
}

// admin class => perform addCourse or removeCourse
class Admin extends Moderator {
	addCourse(user, course) {
		user.courses.push(course);
		return this;
	}
	removeCourse(user, course) {
		user.courses.splice(user.courses.indexOf(course), 1);
		return this;
	}
}

// creating admin
const admin = new Admin('Rakesh', 21, 'rakesh@gmail.com');

// creating moderator
const mod = new Moderator('Narayan', 20, 'narayan@gmail.com');

// creating users
const user1 = new User('Prince', 13, 'prince@gmail.com');
const user2 = new User('Rani', 17, 'rani@gmail.com');

// performing addCoin/removeCoin on users by moderator
const users = [user1, user2, mod, admin];
console.log(users);
mod.login().addCoin(user1).addCoin(user2).addCoin(user2);
console.log(users);
mod.logout();
mod.login().addCoin(user1).removeCoin(user2).removeCoin(user2);
console.log(users);
mod.logout();

// performing addCourse/removeCourse on users by admin
console.log(users);
admin
	.login()
	.addCourse(user1, 'JavaScript')
	.addCourse(user2, 'Python')
	.addCourse(user1, 'Python')
	.removeCourse(user1, 'JavaScript');
console.log(users);
admin.logout();

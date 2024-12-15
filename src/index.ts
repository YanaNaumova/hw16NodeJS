function greetUser(name: string): void {
  console.log(`Hello ${name}`);
}

greetUser("Yana");

interface IPerson {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: IPerson): string {
  return `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`;
}

const person1 = { name: "Mike", age: 38, city: "Oxford" };
console.log(printPersonInfo(person1));

function squareNumber(num: number): number {
  return Math.pow(num, 2);
}

console.log(squareNumber(4));

function isEven(num: number): boolean {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(4));

interface IStudent {
  name: string;
  grade: number;
}

function printStudentInfo(student: IStudent): string {
  return `Студент ${student.name}, оценка ${student.grade}`;
}
const newStudent = { name: "Danil", grade: 1 };
console.log(printStudentInfo(newStudent));

function logMessage(str: string): void {
  console.log(str);
}

logMessage("hello");

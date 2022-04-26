
// 1 упражнение
const a = 20
const b = a + 3
const c = a + b
console.log(a, b, c)

// 2 упражнение
const firstName = prompt("Введите имя:", 'Max')
const lastName = prompt("Введите фамилию:", 'Island')
console.log(`What's up ${firstName} ${lastName}`)

// 3 упражнение

const x = +prompt("Первое число")
const y = +prompt("Второе число")

console.log(`Умножение x*y=${Math.round(x * y)}`);
console.log(`Деление x/y= ${Math.round(x / y)} или x/y=${Math.round(y / x)}`);
console.log(`Минус x-y= ${Math.round(x - y)} или y-x=${Math.round(y - x)}`);
console.log(`Плюс x+y=${Math.round(x + y)}`);

//4 упражнение

const hours = +prompt ('Колво часов', '10')
const days = +prompt ('Суток в неделю', '5')
const moneyHours = +prompt ('ЗП за час', '20')
const month = Math.round((31/7) * days);
console.log(`ЗП за Июль' ${moneyHours * hours * days}`);

//5 упражнение

const even = n => !(prompt("Введите число") % 2);
alert (even(2))

//6 упражнение 
let personNum = true;
console.log(typeof personNum === "number");

//7 упражнение
const randomNum = Math.random()
const multiplication = Math.round(randomNum * 100)
const promptNum = +prompt ('Введите число', '')
const message = promptNum > multiplication ? 'больше': promptNum < multiplication ? 'меньше': "равно случайному"
alert("Введенное число " + message + 
	"\nВведенное число: " + promptNum +
	"\nСлучайное число: " + multiplication )

//8 упражнение 

const str = prompt('Моя строка' , 'Мне нравится изучать Front-end')
const frontEndLikes = prompt('Что вам нравится изучать?' , ' футер, цсс, хедер, индекс')
const result = str.substring(0 , 20) + frontEndLikes
// const arrayLikes = frontEndLikes.split(",")
console.log (result)
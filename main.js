let arr = [5, 6, 7, 8, 9]

let user = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Miguel',
        country: 'Cuba'
    }
]
//1
let sum = 0;
arr.forEach(num => sum += num)

console.log('Завдання 1. Сума масива : ' + sum)

//2
let squareArr = arr.map(num => num * num)

console.log('Завдання 2. Масив в квадраті : ', squareArr)

//3
let result = user.every(obj => obj.country.toLowerCase() == 'ukraine')

console.log('Завдання 3. Результат перевірки метода every : ' + result)

//4
let result2 = user.some(obj => obj.country.toLowerCase() == 'cuba')

console.log('Завдання 4. Результат перевірки метода some : ' + result2)

//5
let arr2 = [1, 'string', [3, 4], 5, [6, 7]]

let arrWithArr = arr2.filter(data => Array.isArray(data))

console.log('Завдання 5. Відфільтрований масив з масивів : ', arrWithArr)

//6
let arr5 = [1, 2, 5, 0, 4, 5, 6];
let sumToZero = 0;
arr5.reduce((sum, num) => {
    if (num == 0) sumToZero = sum
    return sum += num
})

let arr6 = [1, 2, 3, 0, 4, 5, 6]
let index = 0;
arr6.reduce((sum, num, i) => {
    if (sum == 10) index = i
    return sum += num
})

console.log('Завдання 6. Сума значень масива до 0 : ', sumToZero)
console.log('Кількість елементів , що необхідні для суми >= 10 : ', index)


//7
let arr3 = [1, -2, 3, 0, 4, -5, 6, -11];

let arr4 = arr3.filter(num => num >= 0).map(num => Math.sqrt(num))

console.log('Завдання 7. Корінь позитивних чисел масиву : ', arr4)

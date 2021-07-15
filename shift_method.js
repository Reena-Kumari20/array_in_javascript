/*The shift() method removes the first item of an array.
shift() returns the element it removes.
shift() changes the original array.*/

let arr=["reena","amrita","sana","deepti"]
arr.shift()
console.log(arr)  //output=[ 'amrita', 'sana', 'deepti' ]


console.log('************************************************')
let arr1=[1,3,4,25,87,34,21]
for (let value of arr1){
    arr1.shift()
    console.log(value)
}
console.log(arr1)


console.log('************************************************')
let arr1=[1,3,4,25,87,34,21,5]
let i = 0
while(i<arr1.length){
    arr1.shift()
    i++
}
console.log(arr1)

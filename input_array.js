const input=require('readline-sync')
let number=Number(input.question("Enter the perfect number: "))

let arr1=[]
for (let i=0;i<=number;i++){
    let num=Number(input.question("Enter num: "))
    arr1[i]=num
}
console.log(arr1)
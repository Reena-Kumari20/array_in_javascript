let arr1=[3,7,6,1,2,3,4,5,12,15]
let max=0
for (let i=0;i<arr1.length;i++){
    if (arr1[i]>max){
        max=arr1[i]
    }
}
console.log(`maximum in arr1 =>${max}`)

let second_max=0
for (let i=0;i<arr1.length;i++){
    if (arr1[i]>second_max && arr1[i]<max){
        second_max=arr1[i]
    }
}
console.log(`second_max in arr1 =>${second_max}`)

console.log('********************************************************************')
/////////////////////     using by for of loop     //////////////////////
let arr2=[3,7,6,1,2,3,4,5,12,15,18,16]
let maximum=0
for (let value of arr2){
    if (value>maximum){
        maximum=value
    }
}
console.log(`maximum in arr2 =>${maximum}`)

let second_minimum=0
for (let j of arr2){
    if (j>second_minimum && j<maximum){
        second_minimum=j
    }
}
console.log(`second_max in arr1 =>${second_max}`)

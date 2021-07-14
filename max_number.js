let arr1=[3,7,6,1,2,3,4,5,12,15]
let max=0
for (let i=0;i<arr1.length;i++){
    if (arr1[i]>max){
        max=arr1[i]
    }
}
console.log(max)

let maximum=0
for (let value of arr1){
    if (value>maximum){
        maximum=value
    }
}
console.log(maximum)
let arr1=[3,7,6,1,2,3,4,5,12,15]
let max=0
for (let i=0;i<arr1.length;i++){
    if (arr1[i]>max){
        max=arr1[i]
    }
}
console.log(max)

let min=0
for (let i=0;i<arr1.length;i++){
    if (arr1[i]>min && arr1[i]<max){
        min=arr1[i]
    }
}
console.log(min)

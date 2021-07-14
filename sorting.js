let arr1=[-1,4,0,5,2,8,9,10]
var i=0
while (i<arr1.length){
    var j=0
    while (j<arr1.length-i-1){
        if (arr1[j]>arr1[j+1]){
            var y=arr1[j]
            arr1[j]=arr1[j+1]
            arr1[j+1]=y           
        }
        j++
    }
    i++
}
console.log(arr1)
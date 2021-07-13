const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);  // Returns "Mango"
console.log(fruits)

console.log(fruits[0]);    // Returns "Banana"

console.log(fruits.length);   // Returns 4

for (let i=0;i<fruits.length;i++){  //Returns index of items
    console.log(i)
}

for (let j=0;j<fruits.length;j++){ //Returns value of array
    console.log(fruits[j])
}
for (let value of fruits){     ////Returns value of array
    console.log(value)
}



// 1. Create a Array with five names and print all five in reverse.

console.log("Application Started")

let arr=["Lion","Tiger","Horse","Bull","Bear"];

console.log("Length of the Array is "+ arr.length); // Displays Length of the array

for(i=4;i>=0;i--){
    
    console.log(`The ${i+1}th Element is ${arr[i]} `) // Printing the array in reverse

}

console.log("Application Ended")

// 2. print only the elements which are divisible by 5 from 1 to 50.

console.log("---------------------------------------------"); //Line break
console.log("Second Assignment Application Started");

for (let a = 1; a <=50; a++) {
    if (a%5==0) {
        console.log(a);
    }
    
}

console.log("Second Application Ended");
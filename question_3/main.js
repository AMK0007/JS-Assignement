function array_operation(arr){
    const even_numbers=arr.filter(function(value){
        return value%2===0;
    })
    const greater_than_fifty=arr.find(function(value){
        return value>50;
    })
    arr.forEach(element => {
        console.log(element);
    });

    return{
        even_numbers:even_numbers,
        greater_than_fifty:greater_than_fifty
    }
}
console.log("Yes")
const num=[3,5,1,12,55,58,19,71];
const results=array_operation(num);
console.log("Even numbers in the array ",results.even_numbers);
console.log("First number greater than 50 in the array ",results.greater_than_fifty);
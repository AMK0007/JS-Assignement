function shallowClone(obj) {
    return { ...obj };
}

const bills = {
    name: "Ahmed",
    age: "23",
    full_name: {
        first_name: "Ahmed",
        last_name: "Mustafa"
    }
};

const cloned_obj = shallowClone(bills);
console.log("Original object:", JSON.stringify(bills, null, 2));
console.log("Cloned object:", JSON.stringify(cloned_obj, null, 2));

cloned_obj.full_name.first_name = "Ahmeddd";

console.log("After modification:");
console.log("Original object:", JSON.stringify(bills, null, 2));
console.log("Cloned object:", JSON.stringify(cloned_obj, null, 2));

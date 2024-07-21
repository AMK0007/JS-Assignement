function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original_bills = {
    name: "Ahmed",
    age: "23",
    full_name: {
        first_name: "Ahmed",
        last_name: "Mustafa"
    }
};

const cloned_bills = deepCopy(original_bills);

console.log("Original:", JSON.stringify(original_bills, null, 2));
console.log("Cloned:", JSON.stringify(cloned_bills, null, 2));

cloned_bills.full_name.first_name = "Mustafaaa";

console.log("Original after change:", JSON.stringify(original_bills, null, 2));
console.log("Cloned after change:", JSON.stringify(cloned_bills, null, 2));

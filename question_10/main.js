function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
}

const original_bills={
    name:"Ahmed",
    age:"23",
    full_name:{
        first_name:"Ahmed",
        last_name:"Mustafa"
    }
}

const cloned_bills=deepCopy(original_bills);
console.log(original_bills);
console.log("cloned",cloned_bills);

cloned_bills.full_name.first_name="Ahmed Mustafa";
console.log("Oringinal",original_bills);
console.log("cloned",cloned_bills);

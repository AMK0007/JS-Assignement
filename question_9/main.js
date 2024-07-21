function shallowClone(obj){
    return{...obj};
}

const bills={
    name:"Ahmed",
    age:"23",
    full_name:{
        first_name:"Ahmed",
        last_name:"Mustafa"
    }
}

const cloned_obj=shallowClone(bills);
console.log(bills);
console.log("cloned",cloned_obj);

cloned_obj.first_name="Ahmed Mustafaa";
console.log("Oringinal",bills);
console.log("cloned",cloned_obj);

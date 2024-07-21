var global_var="Hello";

function func(){
    var func_var="I am Ahmed";
    console.log(global_var+" "+func_var)

    if(true){
        let block_var="my age is private";
        const block_var_1="I am 23 years old";
        console.log(block_var+" "+block_var_1)
    }
    // console.log(block_var);Error block_var not defined? why cuz limited scope
    // console.log(block_var_1);Error block_var_1 not defined? why cuz limited scope
}

func();
// console.log(func_var);Error func_var not defined? why cuz not defined outside function



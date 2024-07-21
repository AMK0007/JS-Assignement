function logObjectProperties(obj){
    for (let i=1;i<=10;i++){
        console.log(i);
    }

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
      }
}

const bills={
    name:"Ahmed",
    age:21,
    email: 'ahmedmustafa5132021@gmail.com'
}

logObjectProperties(bills);
function createCounter(){
    let counter=0;

    return{
        increment:function(){
            counter++;
            return counter
        },
        getValue:function(){
            return counter;
        }
    }
}

const answer=createCounter();
answer.increment();
answer.getValue();
console.log(answer.increment());
answer.increment();
answer.getValue();
// console.log(answer)
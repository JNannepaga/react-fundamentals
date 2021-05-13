//console.log("Start - I'm executing in global exe context");

//simulating callback
export const Callbackfunc =()=> (
    setTimeout(() =>
    {
        console.log("I'm exec in function context");
    }, 3000)
); 

//actual callback
export function func1(data){
    console.log(`Execeting func1 ${data}`);
    function func2(func2Data){
        console.log(`Execeting func2 ${func2Data}`);
    }
    function func3(func3Data){
        console.log(`Execeting func2 ${func3Data}`);
    }    
    let func2Data = data + 20;
    let func3Data = func2Data + 20;
    func2(func2Data);
    func3(func3Data);
}

//console.log("End - I'm executing in global exe context");

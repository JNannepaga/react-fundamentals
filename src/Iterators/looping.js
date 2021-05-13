export const legacyLoops=() =>{
    let normalArray = ["Pen", "Pencil", "Slate"];

    for(let i=0; i<normalArray.length; i++){
        console.log(normalArray[i]);
    }
    
    for(let stationary of normalArray){
        console.log(stationary);
    }
    
    let i = 0;
    while(i < normalArray.length){
        console.log(normalArray[i]);
        i++;
    }
}


export const complexLoop = {
    
    allAuthors : {
        lady: ["abhutaal", "abhigail"],
        kings: ["David", "Joshiah"],
        Prophet: ["Elijah", "Elisha"]
    },
    getAllAuthors(){
        for(let i=0; i<this.lady.length; i++){
            console.log(this.lady[i]);
        }
        
        for(let king of this.kings){
            console.log(king);
        }
        
        let i = 0;
        while(i < this.Prophet.length){
            console.log(this.Prophet[i]);
            i++;
        }
    }
    //we can loop allAuthors however,The developer will have to know the exact name and return type of the method that returns all the data. 
}
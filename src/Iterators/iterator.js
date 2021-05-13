const iteratiable = {
    allAuthors : {
        lady: ["abhutaal", "abhigail"],
        kings: ["David", "Joshiah"],
        Prophet: ["Elijah", "Elisha"]
    },

    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next(){
                step = step+1;
                if(step == 1){
                    return {value: 'This', done: false};
                }
                else if(step == 2){
                    return {value: 'is', done: false};
                }
                else if(step == 3){
                    return {value: 'last item', done: false};
                }
                else
                return {value: undefined, done: true}
            }
        }
        return iterator;
    }
};

export let iteratiable_consumer = iteratiable[Symbol.iterator]();
iteratiable_consumer.next();
iteratiable_consumer.next();
iteratiable_consumer.next();
iteratiable_consumer.next();

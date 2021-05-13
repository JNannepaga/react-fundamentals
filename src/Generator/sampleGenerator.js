function* basicGenerator(){
    console.log('I will exe first');
    yield 'Hello';
    console.log('I will exe next');
    yield 'world';
}

export const basicGenerator_consumer = basicGenerator();
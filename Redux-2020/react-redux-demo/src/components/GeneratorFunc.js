import React from 'react'

function GeneratorFunc() {
    function* generator() {
        yield 1 + 3
        yield 2 + 4
        yield 3 + 5
    }   
    const handleGen = () =>{
        const gen = generator()
        console.log(gen.next().value);
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next());
    }

    return (
        <div>
            <button
            onClick={handleGen}
            >Click</button>
        </div>
    )
}

export default GeneratorFunc

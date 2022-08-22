// Scope
// The order of data is available from outside to inside but not the other way

const name = "Vlad"

function callName() {
    const age = 25
    
    function callAge() {
        console.log(`The age is ${age}`)
    }

    console.log(`The name is ${name}`)

    callAge()
}


callName()
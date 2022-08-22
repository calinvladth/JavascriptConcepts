// Hoisting
// Var and Functions. Const and Let never hoist

callName()

// const name = "Vlad" // This brings an error
// var name = "Vlad" // This brings an undefined. Var get's hoisted but the function has priority

function name() { return "Vlad" } // This works

function callName() {
    console.log(`The name is ${name()}`)
}

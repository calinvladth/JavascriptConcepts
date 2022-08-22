// Promise
// The basic example with resolve and reject

const showName = true

const promise = new Promise((resolve, reject) => {
    if (showName) {
        setTimeout(() => {
            resolve(`The name is Vlad`)
        }, 5000) 
    } else {
        reject( `The name can't be shown`)
    }
    console.log("The promise is done")
})


promise.then(response => console.log("R1: ", response)).catch(error => console.log('E1: ', error))

// A basic promise.all 
// .all -> Runs all of them simultaneously and returns all of them
// .race -> Returns the fastest one

const p1 = new Promise((resolve, reject) => {
    resolve('P1 done')
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 done')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 done')
})

Promise.all([p1, p2, p3]).then((response) => {
    console.log('Promise All Response: ', response)
})

Promise.race([p1, p2, p3]).then((response) => {
    console.log('Promise Race Response: ', response)
})


// How to wait for setTimeout to finish

const waitTimeout1 = function() {
    console.log("Promise 1 started")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1 finished")
            console.log("Promise 1 returned")
        }, 5000)
    })
}

const waitTimeout2 = function() {
    console.log("Promise 2 started")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 finished")
            console.log("Promise 2 returned")
        }, 5000)
    })
}

const runPromisesAsync = async function() {
    console.log("Let's start")
    const wait1 = await waitTimeout1()
    console.log("Wait 5 seconds ...")
    console.log(wait1)
    const wait2 = await waitTimeout2()
    console.log("Wait 5 seconds ...")
    console.log(wait2)
}

runPromisesAsync()
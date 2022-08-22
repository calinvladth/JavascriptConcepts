
const getName = function() {
    return new Promise((resolve, reject) => {
        resolve("Vlad")
    })
}

const getAge = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25)
        }, 5000)
    })
}

const getGender = function() {
    return new Promise((resolve, reject) => {
        resolve("male")
        // reject("Gender Error")
    })
}

const getProffesion = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("programmer")
        }, 5000)
        
    })
}

const person = async function() {
    const name = getName()
    const age = getAge()
    const gender = getGender()
    const proffesion = getProffesion()
    
    // To run all | 5 seconds instead of 10 seconds
    // The try / catch is for potential errors
    try {
        return await Promise.all([name, age, gender, proffesion])
    } catch(error) {
        console.log("Something went wrong: ", error)
    }
    
    
}

person().then((response) => {console.log('RESP: ', response)})

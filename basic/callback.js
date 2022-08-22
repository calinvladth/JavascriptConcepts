// Callback
// The function returns something after is done

function sayMyName() {
    console.log('The name is: ')
    setTimeout(() => {
        console.log('Vlad')
    }, 5000)
}

sayMyName() 
const  promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },2000)
})

promiseOne.then(function(){
    console.log('promise is consumed');
})


new Promise (function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task two');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Async task one 2 resolved');
})


const promiseThree = new Promise (function(resolve, reject) {
    setTimeout(function(){
        resolve({usernames: "abu", email:"abumdnr@gmail.com"})

    },1000)

})

promiseThree.then(function(user){

    console.log(user)
});

const promiseFour = new Promise (function(resolve, reject) {
    setTimeout(function(){
        let error = true
            if (!error){
                resolve({username:"abu",password:"234"})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
});

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function (error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise (function(resolve, reject) {
    setTimeout(function(){
        let error = true
            if (!error){
                resolve({username:"javascript",password:"234"})
        }else{
            reject('ERROR : js Something went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   const response=  await promiseFive
   console.log(response);
}

consumePromiseFive();


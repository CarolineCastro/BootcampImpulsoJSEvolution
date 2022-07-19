/*PROMISES*/
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

//MANIPULAÇÃO
await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
//Após 2 seg, retornará o valor "Resolvida passando pelo then e agora acabou!"

/*ASYNC/AWAIT*/
async function resolverPromise(){
    const myPromise2 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result;

    try{
        result = await myPromise2
        .then((result) => result + ' passando pelo then')
        .then ((result) => result = ' e agora acabou')

    } catch(err){
        result = err.message;
    }

    return result;
}


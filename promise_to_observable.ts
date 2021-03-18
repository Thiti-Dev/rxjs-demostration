import * as Rx from 'rxjs'

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000);
})

const observablePromise = Rx.from(promise)
observablePromise.subscribe(result => console.log(result))
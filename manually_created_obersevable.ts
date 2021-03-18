import * as Rx from 'rxjs'

const observable = new Rx.Observable(observer => {
    observer.next('hello')
    observer.next('world')
})

observable.subscribe(val => console.log(val))
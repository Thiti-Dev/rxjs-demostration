import * as Rx from 'rxjs'
import { catchError,retry } from 'rxjs/operators'

const observable = new Rx.Observable(observable => {
    observable.next('5')
    observable.next('4')
    observable.next('3')
    observable.next('2')
    throw "ain't gon count any more!!"
    observable.next('1')
})

observable.pipe(
    // so the catchError should then return the observable array back to let it pass to the subscription
    catchError((err) => Rx.of(`Error caught: ${err}`)) // don't log here because when the error is caught up -> the subscription will still do one more iteration and getting undefined as value
).subscribe(i => console.log(`Subscription says : ${i}`))

/*
    Subscription says : 5
    Subscription says : 4
    Subscription says : 3
    Subscription says : 2
    Subscription says : Error caught: ain't gon count any more!!
*/

/* without returning the observable with array in catchError method
    Subscription says : 5
    Subscription says : 4
    Subscription says : 3
    Subscription says : 2
    Error caught: ain't gon count any more!!
    Subscription says : undefined
*/
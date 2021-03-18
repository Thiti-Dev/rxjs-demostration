import * as Rx from 'rxjs'
import {map,tap,filter} from 'rxjs/operators'

const numbers = Rx.of(-99,-98,1,2,3,4,5,6,100,101,102,103,104)

numbers.pipe(
    filter(n => n >= 0)
).subscribe(n => console.log(n))

// alternative way -> gives same result as above
/*numbers.pipe(
    filter(n => n >= 0),
    tap(n => console.log(n))
).subscribe()*/
// ────────────────────────────────────────────────────────────────────────────────

import * as Rx from 'rxjs'
import {throttleTime} from 'rxjs/operators'
const mouseEvents = Rx.fromEvent(document,'mousemove')

mouseEvents.pipe(
    throttleTime(1000) // throttle will execute the subscription and then wait for {N MILISECS}
).subscribe(e => console.log(e.type))


// But for debounceTime -> will then wait for the last event execute for {N MILISECS} and it will execute the subscription process
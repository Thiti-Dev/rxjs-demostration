import * as Rx from 'rxjs'
import {finalize, take} from 'rxjs/operators'
const interval = Rx.interval(500)
                            .pipe(
                                //take(3), // take only first 3 interval -> disabled to demonstrate how to use unsubscription
                                finalize(() => console.log('Sequence completed!'))
                            )

const subscription = interval.subscribe(int => console.log(int))

setTimeout(() => {
    subscription.unsubscribe()
}, 3000);
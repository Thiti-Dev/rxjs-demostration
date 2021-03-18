import * as Rx from 'rxjs'

const clicks = Rx.fromEvent(document,'click')

clicks.subscribe(click => console.log(click))
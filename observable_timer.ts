import * as Rx from 'rxjs'

const timer = Rx.timer(1000)
timer.subscribe(done => console.log('The timer has ended'))
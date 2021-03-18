import * as Rx from 'rxjs'

const interval = Rx.interval(1000)
interval.subscribe(_incremental => console.log(new Date().getSeconds()))
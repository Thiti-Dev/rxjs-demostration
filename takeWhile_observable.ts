import * as Rx from 'rxjs'
import {finalize,takeWhile} from 'rxjs/operators'

const life_cycle = Rx.of('eat','code','sleep','repeat','suicide')

life_cycle.pipe(
    takeWhile(task => task !== 'suicide'),
    finalize(() => console.log('I died naturally without committing suicide because life is worth '))
).subscribe(task => console.log(task))

/*
    eat
    code
    sleep
    repeat
    I died naturally without committing suicide because life is worth
*/
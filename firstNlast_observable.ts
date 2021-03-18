import * as Rx from 'rxjs'
import {first,last} from 'rxjs/operators'

// The code below ->  I also demonstrate  how to convert the pipe into promise and make further usage of it

const nums = Rx.of(1,2,3,4,5,6,7,8,9)
                                .pipe(
                                    first()
                                ).toPromise();

(async() => {
    console.log(await nums) // return 1
})()

// try using last and see the result 4 ur self fellass!!
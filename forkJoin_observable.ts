import * as Rx from 'rxjs'
import { delay } from 'rxjs/operators'

const upper_cred = Rx.of('i_have_empty_password','i_have_1_for_password','i_have_long_for_password')
const lower_cred = Rx.of('empty','1','long').pipe(delay(1000)) // delaying 1 secs 

const full_matched_cred = Rx.forkJoin({upper_cred,lower_cred})
                                            .subscribe(zipped => console.log(zipped))

/*
    { upper_cred: 'i_have_long_for_password', lower_cred: 'long' }
*/

// As you can see it will then eventually returned the given signature that has been given in params as an object with a key
// and it only show the last emitted data only for the further usage
// @TheUseful example would be when you want to fetch the data without using the legacy promise.all {parallel} you can basically using the forkjoin instead and pass the ajax request inside of it


// Ex..

/*
    forkJoin(
    {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users')
    }
    )
    // { google: object, microsoft: object, users: array }
    .subscribe(console.log);
*/
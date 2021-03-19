import * as Rx from 'rxjs'
import { delay } from 'rxjs/operators'

const upper_cred = Rx.of('i_have_empty_password','i_have_1_for_password','i_have_long_for_password')
const lower_cred = Rx.of('empty','1','long').pipe(delay(1000)) // delaying 1 secs 

const full_matched_cred = Rx.zip(upper_cred,lower_cred).subscribe(zipped => console.log(zipped)) // the subscription would take 1 extra second to zip because it has to wait the lower_cred to be fetched {in this case i delayed it with the delay operator}

/*
    [ 'i_have_empty_password', 'empty' ]
    [ 'i_have_1_for_password', '1' ]
    [ 'i_have_long_for_password', 'long' ]
*/
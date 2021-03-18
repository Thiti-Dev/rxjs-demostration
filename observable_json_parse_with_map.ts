import * as Rx from 'rxjs'
import {map} from 'rxjs/operators'

// VIRTUAL METHOD
function fetchJSONString():string{
    return '{"msg":"hi there!!", "secret": "aaw0kenn"}'
}
// ───────────────────────────────────────────────────────────────────────────────

const apiCall = Rx.of(fetchJSONString())
                                    .pipe(map(json => JSON.parse(json)))
                                    .subscribe(validObj => {
                                        console.log(validObj.msg)
                                        console.log(validObj.secret)
                                    })
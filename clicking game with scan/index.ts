import * as Rx from 'rxjs'
import {map,tap,scan} from 'rxjs/operators'
const clicks = Rx.fromEvent(document,'click')

// Explanation
/*
    - the scan method recieve function with 2 params
        which the first one is the one that gonna be persist somehow
            and the 2nd params is the one that got passed from above {note the tap operator doesn't affect any piping so the scan will take the number from the map above}
*/

clicks.pipe(
    map(e => Math.floor(Math.random() * 10)),
    tap(score => console.log(`You got ${score} from clicking the dom`)),
    scan((highScore,score) => highScore + score)
).subscribe(highScore => console.log(`Your score : ${highScore}`))
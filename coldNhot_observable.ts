import * as Rx from 'rxjs'
import {publish} from 'rxjs/operators'

const coldExample = ():void => {
    const cold = new Rx.Observable(observer => {
        observer.next(Math.random())
    })
    
    // each of the subscriber below will always get newly random generated number everytime the subscription start
    cold.subscribe(a => console.log(`Subscriber A: ${a}`))
    cold.subscribe(b => console.log(`Subscriber B: ${b}`))
    // ────────────────────────────────────────────────────────────────────────────────
}

const hotExample1 = ():void => {
    const random_number = Math.random()
    const cold = new Rx.Observable(observer => {
        observer.next(random_number)
    })
    
    // each of the subscriber below will always get the same value
    cold.subscribe(a => console.log(`Subscriber A: ${a}`))
    cold.subscribe(b => console.log(`Subscriber B: ${b}`))
    // ────────────────────────────────────────────────────────────────────────────────
}

const hotExample2 = ():void => {
    const cold = new Rx.Observable(observer => {
        observer.next(Math.random())
    })

    const hot = publish()(cold) // published it to make it <emit data only when we call the connect function>
    
    // each of the subscriber below will always get the same value
    hot.subscribe(a => console.log(`Subscriber A: ${a}`))
    hot.subscribe(b => console.log(`Subscriber B: ${b}`))
    hot.connect() // connect
    // ────────────────────────────────────────────────────────────────────────────────
}
//coldExample()
//hotExample1()
hotExample2()
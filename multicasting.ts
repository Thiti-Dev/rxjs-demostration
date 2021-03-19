// RxJS v6+
import { Subject, interval, ConnectableObservable } from 'rxjs';
import { take, tap, multicast, mapTo } from 'rxjs/operators';

//emit every 2 seconds, take 5
const source = interval(2000).pipe(take(1));

const example = source.pipe(
  //since we are multicasting below, side effects will be executed once
  tap(() => console.log('Side Effect #1')),
  mapTo('Result!')
);

//subscribe subject to source upon connect()
const multi = example.pipe(multicast(() => new Subject())) as ConnectableObservable<any>; // note that type conversion to ConnectableObservable is needed
/*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/
const subscriberOne = example.subscribe(val => console.log(val));
const subscriberTwo = example.subscribe(val => console.log(val));
//subscribe subject to source
multi.connect();

/* result when using multi-casting
  Side Effect #1
  Result!
  Result!
*/ /** You can see that the side effect ran only once */ 

/* result without using multicase 
  Side Effect #1
  Result!
  Side Effect #1
  Result!
  Side Effect #1
*/
import * as Rx from 'rxjs'
import {map,tap} from 'rxjs/operators'

//NOTE that do has been renamed to tap

const animals_name = Rx.of('Chaos','Shanom','Kaimook')

animals_name.pipe(
    tap(name => console.log(`Legacy charset: ${name}`)),
    map(name => name.toLocaleUpperCase()),
    tap(name => console.log(name))
).subscribe()
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
//note that [**] means power {for those who confuse xD}

const switched = of(1, 2, 3).pipe(
    switchMap(
        (x: number) => of(x, x ** 2, x ** 3)
    )
);
switched.subscribe(x => console.log(x));
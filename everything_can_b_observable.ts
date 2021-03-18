import * as Rx from 'rxjs'

const thingies = Rx.of('bemjamin',1998,false,[1,2,3,4])
thingies.subscribe((val_from_thingies:any) => console.log(val_from_thingies))
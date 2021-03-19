import * as Rx from 'rxjs';

// Example -> React scenario {when component 1 which separately with 2 trying to subscribe the data from the same souce at the same time which subject will recieve the newly emitted data at some point}

const data_streaming = new Rx.Subject()

const data_from_component_1 = data_streaming.subscribe(value => console.log(`Component 1 -> ${value}`))
const data_from_component_2 = data_streaming.subscribe(value => console.log(`Component 2-> ${value}`))

data_streaming.next('alex joined the chat')

setTimeout(() => {
    data_streaming.next('alex is disconnecting') 
}, 3000);

/*
    Component 1 -> alex joined the chat
    Component 2-> alex joined the chat
    Component 1 -> alex is disconnecting
    Component 2-> alex is disconnecting
*/
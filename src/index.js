import { of, from } from "rxjs";

const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json)));


const subscription = observable.subscribe(
  {
    next(value) {
      console.log(value)
    },
    complete() {
      console.log('complete');
    }
  }
);

console.log('hello');

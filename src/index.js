import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next('Hello world');
  subscriber.error('Error!'); // if error event happens, observable terminated
  subscriber.next('test');

  subscriber.complete(); // terminates the observable preventing it from sending data
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },

  complete: () => {
    console.log('complete called!');
  },

  error: (err) => {
    console.log(err);
  }
});
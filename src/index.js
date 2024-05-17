import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next('test');
    console.log('memory leak');
  }, 1000);

  return () => {
    clearInterval(id);
  }
});


const subscription = observable.subscribe({
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

setTimeout(() => {
  subscription.unsubscribe();
}, 4000);

# Subjects

- An observable you can `.next()`
- An observable, that can subscribe to other observables
- Subjects have state, it keeps a list of observers, while an Observable is simply a function that sets up observation.
- At the basis of multicasting

```js
const doorSubject = new BehaviorSubject("open");

function openDoor() {
  doorSubject.next("open");
}

function closeDoor() {
  doorSubject.next("closed");
}

subject.subscribe();
```

## Subject Types

|                  |                                           |
| ---------------- | ----------------------------------------- |
| Subject          | Sends values to all subscribers           |
| ReplaySubject(x) | Replays last (x) value on subscribe       |
| BehaviourSubject | Subject with a current value              |
| AsyncSubject     | Emits only the last value before complete |

## Live Demo

- [Subjects](https://codesandbox.io/s/rxjs-fundamentals-demo-wzb0y)

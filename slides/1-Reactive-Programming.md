# Reactive Programming

## The problem: Asyncronous Programming 😱

We need to react to a lot of things:

- XHR Requests, WebSockets
- Events: click, scroll, resize, ...
- State changes

_This becomes more complicated over time_

- Handling multiple events at once
- Triggering new events based on events
- Waiting for other events or conditions to complete
- Sometimes we even want to be able to cancel events

## Streams 🚰

A stream is a series of values [0...n]

```js
[1, 2, 3, 4];
[{ name: "Jan" }, { name: "David" }];
[HTTPResponse];
[];
[MouseEvent, MouseEvent, MouseEvent];
```

## The Imperative Approach

```js
class ShoppingCart {
  products: Array<Product>;

  totalPrice: number;

  onProductsLoaded() {
    this.totalPrice = sumBy(
      this.products,
      product => product.price * product.quantity
    );
  }

  onProductAdded() {
    this.totalPrice = sumBy(
      this.products,
      product => product.price * product.quantity
    );
  }

  onProductUpdated() {
    this.totalPrice = sumBy(
      this.products,
      product => product.price * product.quantity
    );
  }

  onProductRemoved() {
    this.totalPrice = sumBy(
      this.products,
      product => product.price * product.quantity
    );
  }
}
```

## A Reactive Approach

```js
class ShoppingCart {
  products$: shoppingCartService.products$; // stream of products

  totalPrice$: this.products$.pipe(
    map(products => sumBy(
      this.products,
      product => product.price * product.quantity
    )));
}
```

## Functional Reactive Programming? 💫

### Pure Functions

- input => output
- no side effects
- immutable: does not alter the inputs
- declarative by nature

❌ NOT PURE

```ts
function sum(a: number, b: number, result: number) {
  result = a + b;
}
```

```ts
function increaseSpeed(entity: Entity) {
  entity.speed++;
}
```

✔️ PURE

```ts
function sum(a: number, b: number) {
  return a + b;
}
```

```ts
interface Entity {
  speed: number;
}

function increaseSpeed(entity: Entity) {
  return { ...entity, speed: entity.speed + 1 };
}
```

### But why?

👍 very predictable\
👍 very testable\
👍 In some cases RxJS depends on it - XXX Proof?\
👍 Explicit Dependencies

❌ NOT EXPLICIT

```js
let baseScore = 5;
let extraScore = 2;

let totalScore = baseScore + extraScore;

console.log(totalScore); // 7

baseScore = 8;

console.log(totalScore); // 7

// totalScore != baseScore + extraScore anymore
```

✔️ EXPLICIT

```js
const baseScore$ = new BehaviorSubject(5);
const extraScore$ = new BehaviorSubject(2);

const totalScore$ = combineLatest(baseScore$, extraScore$).pipe(
  map(([base, extra]) => base + extra)
);

totalScore$.subscribe(console.log);
// 7
baseScore.next(8);
// 10
```

## Exercises

- [Imperative vs Functional array handling](https://codesandbox.io/s/rxjs-fundamentals-exercise-1-functional-arrays-3l867) - 15m

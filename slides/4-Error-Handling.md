# Error Handling

## Subscribe and Error callbacks

```js
const getBooks$ = fromFetch("https://example.com/api/books");

getBooks$.subscribe(
  response => console.log("HTTP response", response),
  error => console.log("HTTP Error", error),
  () => console.log("HTTP request completed.")
);
```

## Catch & Replace Strategy

If the source observable fails, replace with a new observable

```js
const getBooks$ = fromFetch("https://example.com/api/books").pipe(
  catchError(error => of([]))
);
```

## Catch & Rethrow Strategy

When our observable errors out, we handle the error locally & throw it up the chain by returning an empty observable that errors out immediately.

```js
const getBooks$ = fromFetch("https://example.com/api/books").pipe(
  catchError(error => {
    console.log("We encountered an error");
    return throwError(error);
  })
);
```

## The Finalize Operator

```js
const getBooks$ = fromFetch("https://example.com/api/books").pipe(
  catchError(error => {
    console.log("We encountered an error");
    return throwError(error);
  }),
  finalize(() => console.log("first finalize")),
  catchError(error => {
    console.log("We caught a rethrown error, providing fallback value");
    return of([]);
  }),
  finalize(() => console.log("second finalize"))
);
```

## Catch & Retry Strategy

When our observable errors out, retry the source observable subscription.

```js
const getBooks$ = fromFetch("https://example.com/api/books").pipe(retry(1));
```

```js
const getBooks$ = fromFetch("https://example.com/api/books").pipe(
  retryWhen(errors => {
    return errors.pipe(delayWhen(error => timer(1000)));
  })
);
```

## Exercises

- [XXX: Catch & Replace]()
- [XXX: Catch & Rethrow]()
- [XXX: Catch & Retry]()

## Live Demo

- [Error Handling](https://codesandbox.io/s/rxjs-error-handling-example-6qcnu)

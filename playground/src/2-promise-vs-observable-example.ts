import {fromFetch} from "rxjs/fetch";
import {map, shareReplay, switchMap} from "rxjs/operators";

const EPISODE_API_URL = "https://rickandmortyapi.com/api/episode/";

// PROMISE
const episodes = fetch(EPISODE_API_URL).then(result => result.json());
console.log(episodes);

episodes.then((result) => {
    console.log(result)
});

episodes.then((result) => {
    console.log(result)
});

// OBSERVABLE
const episodes$ = fromFetch(EPISODE_API_URL).pipe(switchMap(result => result.json()));
console.log(episodes$);

episodes$.subscribe(console.log);
episodes$.subscribe(console.log);

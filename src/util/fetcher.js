import fetch from "isomorphic-fetch";

function fetcher(url) {
  return fetch(url).then(r => {
    return r.json();
  });
}

export default fetcher;

export function queryGraph(url: string, query: string, headers?: Record<string, any>) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

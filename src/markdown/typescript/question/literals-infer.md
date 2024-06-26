```ts
function handleRequest(url: string, method: "GET" | "POST") {
  console.log(url, method);
}
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
```

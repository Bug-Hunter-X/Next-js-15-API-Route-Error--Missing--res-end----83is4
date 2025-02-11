# Next.js 15 API Route Error: Missing `res.end()`

This repository demonstrates a common yet subtle error in Next.js 15 API routes: forgetting to call `res.end()` after sending a response.

## Bug
The `pages/api/hello.js` file contains a simple API route.  However, it omits the `res.end()` call after setting the response status and JSON data.  This can lead to unexpected behavior, including incomplete responses or errors in the client.

## Solution
The `pages/api/hello.js` file has been updated to include the `res.end()` call. This ensures that the response is properly finalized and sent to the client.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access `http://localhost:3000/api/hello`.  Observe the behavior with and without the correction in place.
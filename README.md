# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous middleware.  The example shows an API endpoint that processes data asynchronously. If the asynchronous operation fails, the error isn't properly handled, leading to application crashes or unexpected behavior.  The solution demonstrates how to properly handle promise rejections to prevent these issues.

## Bug

The `bug.js` file contains the erroneous code. The `processAsyncData` function uses a Promise. If the condition `data.value > 10` is false, it rejects the Promise with an error. However, this rejection is not caught in the main route handler causing the application to crash. 

## Solution

The `bugSolution.js` file provides a corrected version. The solution properly handles promise rejections within the `.catch()` block of the `.then()` chain in the route handler, ensuring that errors are gracefully handled and the application doesn't crash.
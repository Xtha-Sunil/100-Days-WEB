/*
JavaScript Event Loop.

In JavaScript, the event loop is a mechanism used to handle asynchronous operations. It is an essential component of the language's runtime environment, and it plays a significant role in making JavaScript non-blocking and efficient.

The event loop works by constantly monitoring the JavaScript runtime's call stack and message queue. When the call stack is empty, the event loop checks the message queue for any pending messages. If there are any messages, it dequeues them and pushes them onto the call stack, where they are executed.

The messages in the message queue are typically generated by events such as user input, timer callbacks, or network requests. When an event is triggered, it is added to the message queue. Once the current execution context is finished, the event loop retrieves the next message from the queue and processes it.

The event loop is a critical concept in JavaScript programming, and understanding how it works is essential to writing efficient and responsive applications. By using asynchronous programming techniques and working with the event loop, developers can write JavaScript code that is both performant and responsive.
*/


/*
Working Mechanism

The event loop is a mechanism used in JavaScript to handle asynchronous operations, making JavaScript a non-blocking language. Here's how the event loop works:

The call stack: JavaScript maintains a call stack, which is a data structure that keeps track of the order in which functions are called. When a function is called, it is added to the top of the call stack, and when a function returns, it is removed from the stack.

Web APIs: JavaScript provides access to Web APIs, which are interfaces that enable developers to interact with web pages and web servers. Examples of Web APIs include the DOM, XMLHttpRequest, and Fetch API.

Event queue: When an asynchronous operation is initiated using a Web API, the operation is queued up in the event queue. The event queue is a data structure that holds a list of events or messages to be processed.

The event loop: The event loop is a continuous process that constantly checks if the call stack is empty. If the call stack is empty, the event loop retrieves the first event or message from the event queue and pushes its associated callback function to the call stack.

Execution of callback function: The callback function associated with the event or message is executed, and any functions called by the callback function are added to the call stack.

Completion of the call stack: When the call stack is empty, the event loop repeats the process by checking the event queue for any pending events or messages.

This process of checking the call stack and event queue continues indefinitely, allowing JavaScript to handle asynchronous operations without blocking the main thread. By using the event loop, developers can write efficient and responsive JavaScript code, resulting in faster and better-performing web applications
*/
str = "hello world";

let reversedString = str.split('').reverse().join('');
console.log(reversedString)
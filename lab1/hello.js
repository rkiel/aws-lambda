console.log("Lab 1 begin")
exports.handler = handler;

function handler(event, context) {
  console.log("value 1", event.key1);
  console.log("value 2", event.key2);
  console.log("value 3", event.key3);
  context.done(null, "Hello World");
}

console.log("Lab 1 end")

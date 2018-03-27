exports.handler = function(event, context, callback) {
    console.log('event:' + JSON.stringify(event));
    const name = event.name || 'World';
    const response = { greeting: `Hello, ${name}!`};
    callback(null, response);
}
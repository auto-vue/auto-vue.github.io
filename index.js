// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true,
});
fastify.register(require('fastify-cors'), {
    // put your options here
});

// Declare a route
fastify.get('/hello', (request, reply) => {
    reply.send({ hello: 'world' });
});


// Run the server!
fastify.listen(3050, (err, address) => {
    if (err) throw err;
    fastify.log.info(`server listening on ${ address }`);
});
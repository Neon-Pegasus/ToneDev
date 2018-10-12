const { gateway } = require('./nodeGateway');
const { port } = require('./nodeGateway');

// if (process.env.NODE_ENV !== 'test') {
gateway.server = gateway.listen(port, () => console.log(`gateway server listening on ${port}`));
// }
module.export = gateway;

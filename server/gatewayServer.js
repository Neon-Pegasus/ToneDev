const { gateway } = require('./nodeGateway');
const { port } = require('./nodeGateway');

gateway.server = gateway.listen(port, () => console.log(`gateway server listening on ${port}`));
module.export = gateway;

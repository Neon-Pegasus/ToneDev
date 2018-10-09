const { gateway } = require('./nodeGateway');
const { port } = require('./nodeGateway');

gateway.listen(port, () => console.log(`gateway server listening on ${port}`));

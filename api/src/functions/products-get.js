const { app } = require('@azure/functions');
const data = require("../shared/products-data")

app.http('products-get', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // context.log(`Http function processed request for url "${request.url}"`);
        // const name = request.query.get('name') || await request.text() || 'world';
        // return { body: `Hello,!` };
        try {
            const products = data.getProducts();
            return {body: JSON.stringify(products)};
        } catch (error) {
            return {status: 500}
        }
    }
});

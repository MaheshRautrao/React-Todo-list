const { app } = require('@azure/functions');
const data = require("../shared/products-data")

app.http('products-post', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const req = await request.json();
        const product = {
            id: undefined,
            name: req.name,
            description: req.description,
            quantity: req.quantity
        };
        try {
            const newProduct = data.addProduct(product);
            return { body: JSON.stringify({
                created: true,
                message: `${newProduct.name} Agregado a la lista.`
            }) };
        } catch (error) {
            return { status: 500, body: error.message}
        }
    }
});

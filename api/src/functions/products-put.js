const { app } = require('@azure/functions');
const data = require("../shared/products-data")

app.http('products-put', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const req = await request.json();
        const product = {
            id: parseInt(req.id, 10),
            name: req.name,
            description: req.description,
            quantity: req.quantity,
        };
        try {
            const updatedProduct = data.updateProduct(product);
            return { body: JSON.stringify({
                edited: true,
                message: `${updatedProduct.name} Editado Correctamente.`
            })};
        } catch (error) {
            return { status: 500, body: error.message}
        }
    }
});

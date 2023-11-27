const { app } = require('@azure/functions');
const data = require("../shared/products-data")

app.http('products-delete', {
    methods: ["DELETE"],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const req = await request.json()
        const id = req.id;
        try {
            data.deleteProduct(id);
            return { body: JSON.stringify({
                deleted: true,
                message: "Producto Eliminado Exitosamente."
            })};
        } catch (error) {
            return { status: 500, body: error.message}
        }
    }
});

export default {
    name: 'product',
    title: 'Produit',
    type: 'document',
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{type: "image"}],
            options: {
                hotspot: true,
            }
        },
        {
            name: "name",
            title: "Nom",
            type: "string",
        },
        {
            name: "cat",
            title: "Catégorie",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "slug",
            title: "ID Unique",
            type: "slug",
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: "Prix",
            type: 'number',
        },
        {
            name: 'details',
            title: 'Détails',
            type: 'string',
        },
    ],
}
export default {
    name: 'product',
    title: 'Produit',
    type: 'document',
    fields: [
        {
            name: "image",
            title: "Image(s)",
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
            title: "Catégorie(s)",
            type: "array",
            of: [{type: "string"}],
            options: {
                list: [
                    {value: "T-shirts", title: "T-shirts"},
                    {value: "Vestes", title: "Vestes"},
                    {value: "Chaussures", title: "Chaussures"},
                    {value: "Sacs", title: "Sacs"},
                    {value: "Shorts", title: "Shorts"},
                    {value: "Pantalons", title: "Pantalons"},
                    {value: "Chemises", title: "Chemises"},
                ]
            }
        },
        {
            name: "colors",
            title: "Couleur(s)",
            type: "array",
            of: [{type: "color"}]
        },
        {
            name: "size",
            title: "Taille(s)",
            type: "array",
            of: [{type: "string"}],
            options: {
                list: [
                    {value: "XS", title: "XS"},
                    {value: "S", title: "S"},
                    {value: "M", title: "M"},
                    {value: "L", title: "L"},
                    {value: "XL", title: "XL"},
                    {value: "XXL", title: "XXL"},
                ]
            }
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
export default {
    name: 'category',
    title: 'Catégories',
    type: 'document',
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "name",
            title: "Nom de la catégorie",
            type: "string",
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
    ],
}
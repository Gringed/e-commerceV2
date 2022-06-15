export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Texte du bouton',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Produit',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Petit texte',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Texte moyen',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Texte large 1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Texte large 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Réduction',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'Période de vente',
            type: 'string',
        },
    ],
  };
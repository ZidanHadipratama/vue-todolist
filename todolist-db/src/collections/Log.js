/** @type {import('payload/types').CollectionConfig} */
const Log = {
    slug: "Log",
    access: {
      read: () => true,
      create: () => true,
    },
    fields: [
      {
        name: "collectionName",
        type: "text",
        required: true,
      },
      {
        name: 'action',
        label: 'Action',
        type: 'text',
        required: true,
      },
      {
        name: "timestamp",
        type: "date",
        required: true,
      },
    ],
  };
  
  export default Log;
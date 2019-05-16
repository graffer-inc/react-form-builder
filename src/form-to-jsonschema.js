const itemToJsonSchema = ({ basePath, item }) => ({
  $id: `${basePath}/${item.id}`,
  title: item.label,
});


// {
//   "id":"13A69EB9-012A-4264-9CFF-7DDD2DC4AF6B",
//   "element":"TextInput",
//   "text":"Text Input",
//   "required":true,
//   "canHaveAnswer":true,
//   "field_name":"text_input_CFED72FA-169D-430D-89BE-A62A27395082",
//   "label":"Placeholder Label"
// }
const textInputToJsonSchema = ({ basePath, item }) => ({
  ...itemToJsonSchema({ basePath, item }),
  type: 'string',
});


// {
//   "id":"08E1145C-5260-44B9-BB45-8BB4EDC29F87",
//   "element":"NumberInput",
//   "text":"Number Input",
//   "required":true,
//   "canHaveAnswer":true,
//   "field_name":"number_input_A457E669-EA1A-4923-A8EE-12175A6C9A19",
//   "label":"ラベル ",
//   "pageBreakBefore":false,
//   "alternateForm":true
// }
const numberInputToJsonSchema = ({ basePath, item }) => ({
  ...itemToJsonSchema({ basePath, item }),
  type: 'number',
});

// {
//   "id":"ED9706D5-DA70-4924-8C77-A5016340BE90",
//   "element":"TextArea",
//   "text":"Multi-line Input",
//   "required":false,
//   "canHaveAnswer":true,
//   "field_name":"text_area_CA93A764-8A00-4268-9C4F-395897099A2E",
//   "label":"Placeholder Label"
// }
const textAreaToJsonSchema = ({ basePath, item }) => ({
  ...itemToJsonSchema({ basePath, item }),
  type: 'string',
});


// {
//   "id":"2745CAF2-F2B2-4B00-BA1F-FBD8F8C27808",
//   "element":"Dropdown",
//   "text":"Dropdown",
//   "required":false,
//   "canHaveAnswer":true,
//   "field_name":"dropdown_D9316A4D-DE8D-4CD7-B147-54A68BE6E410",
//   "label":"Placeholder Label",
//   "options":[
//   {
//     "value":"place_holder_option_1",
//     "text":"Place holder option 1",
//     "key":"dropdown_option_1A3DB201-D21B-49BA-95D0-6E527929E577"
//   },
//   {
//     "value":"place_holder_option_2",
//     "text":"Place holder option 2",
//     "key":"dropdown_option_4975B50E-D7E3-4C09-83CE-EDB135AA7DFC"
//   },
//   {
//     "value":"place_holder_option_3",
//     "text":"Place holder option 3",
//     "key":"dropdown_option_28C3E7C7-5F6D-48AB-ABBE-DCAC4EBFDC3C"
//   }
// ]
// }
const dropdownToJsonSchema = ({ basePath, item }) => ({
  ...itemToJsonSchema({ basePath, item }),
  type: 'string',
  enum: item.options.map(opt => opt.value),
});


// const signatureToJsonSchema = ({basePath, item}) => ({
//   ...itemToJsonSchema({basePath, item}),
//   type: 'string',
//   enum: item.options.map(opt => opt.value)
// });

// {
//   "id":"D4E77A75-D7CC-41B0-965E-76AF8F2A6784",
//   "element":"Checkboxes",
//   "text":"Checkboxes",
//   "required":false,
//   "canHaveAnswer":true,
//   "field_name":"checkboxes_B7EA1C39-C637-47F3-91D6-6674752BA5E2",
//   "label":"Placeholder Label",
//   "options":[
//   {
//     "value":"place_holder_option_1",
//     "text":"Place holder option 1",
//     "key":"checkboxes_option_D1C40FB9-1819-4875-9092-42DF8FDEB9D5"
//   },
//   {
//     "value":"place_holder_option_2",
//     "text":"Place holder option 2",
//     "key":"checkboxes_option_F0A1DA96-B7B4-4097-A36A-3527296C8FCA"
//   },
//   {
//     "value":"place_holder_option_3",
//     "text":"Place holder option 3",
//     "key":"checkboxes_option_509E040A-D529-4310-A4A5-384E226B49F5"
//   }
// ]
// }
const checkboxesToJsonSchema = ({ basePath, item }) => ({
  ...itemToJsonSchema({ basePath, item }),
  type: 'array',
  items: {
    type: 'string',
    enum: item.options.map(opt => opt.value),
  },
  uniqueItems: true,
  minItems: 1,
});

// const datePickerToJsonSchema = ({basePath, item}) => ({
//   ...itemToJsonSchema({basePath, item}),
//   type: 'array',
//   items: {
//     type: 'string',
//     enum: item.options.map(opt => opt.value)
//   },
//   uniqueItems: true,
//   minItems: 1,
// });


// {
//   "id":"72300191-ADCF-4321-BA2B-EC10AD876158",
//   "element":"RadioButtons",
//   "text":"Multiple Choice",
//   "required":false,
//   "canHaveAnswer":true,
//   "field_name":"radiobuttons_BCF59E70-0E83-4DA6-ACDB-78DF86DD0B4B",
//   "label":"Placeholder Label",
//   "options":[
//   {
//     "value":"place_holder_option_1",
//     "text":"Place holder option 1",
//     "key":"radiobuttons_option_E440B02E-E136-4686-8A03-0F882DC2ECEC"
//   },
//   {
//     "value":"place_holder_option_2",
//     "text":"Place holder option 2",
//     "key":"radiobuttons_option_FC268138-7ABB-4ED8-8331-BC4EAB741B1E"
//   },
//   {
//     "value":"place_holder_option_3",
//     "text":"Place holder option 3",
//     "key":"radiobuttons_option_98D6209D-37C6-418D-8905-F1D23E457562"
//   }
// ]
// }
const radioButtonsToJsonSchema = ({ basePath, item }) => ({
  ...itemToJsonSchema({ basePath, item }),
  type: 'string',
  enum: item.options.map(opt => opt.value),
});


const converter = {
  // Header: ,
  // Paragraph: ,
  // Label: ,
  // LineBreak: ,
  TextInput: textInputToJsonSchema,
  NumberInput: numberInputToJsonSchema,
  TextArea: textAreaToJsonSchema,
  Dropdown: dropdownToJsonSchema,
  // Signature: ,
  Checkboxes: checkboxesToJsonSchema,
  // DatePicker,
  RadioButtons: radioButtonsToJsonSchema,
  // Image,
  // Rating,
  // Tags,
  // HyperLink,
  // Download,
  // Camera,
  // Range,
};

export const itemsToJsonSchema = (items) => {
  const properties = {};
  const required = [];
  items.forEach(i => {
    properties[i.id] = converter[i.element]({ basePath: '#/properties', item: i });
    if (i.required) {
      required.push(i.id);
    }
  });

  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required,
    properties,
  };
};

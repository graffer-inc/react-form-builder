import Ajv from 'ajv';
import itemsToJsonSchema from './form-to-jsonschema';

const ajv = new Ajv();

test('convert textInput to json schema', () => {
  const input = [
    {
      id: '13A69EB9-012A-4264-9CFF-7DDD2DC4AF6B',
      element: 'TextInput',
      text: 'Text Input',
      required: true,
      canHaveAnswer: true,
      field_name: 'text_input_CFED72FA-169D-430D-89BE-A62A27395082',
      label: 'Placeholder Label',
    },
  ];
  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: ['13A69EB9-012A-4264-9CFF-7DDD2DC4AF6B'],
    properties:
      {
        '13A69EB9-012A-4264-9CFF-7DDD2DC4AF6B':
          {
            $id: '#/properties/13A69EB9-012A-4264-9CFF-7DDD2DC4AF6B',
            title: 'Placeholder Label',
            type: 'string',
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});


test('convert numberInput to json schema', () => {
  const input = [
    {
      id: '08E1145C-5260-44B9-BB45-8BB4EDC29F87',
      element: 'NumberInput',
      text: 'Number Input',
      required: true,
      canHaveAnswer: true,
      field_name: 'number_input_A457E669-EA1A-4923-A8EE-12175A6C9A19',
      label: 'ラベル ',
      pageBreakBefore: false,
      alternateForm: true,
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: ['08E1145C-5260-44B9-BB45-8BB4EDC29F87'],
    properties:
      {
        '08E1145C-5260-44B9-BB45-8BB4EDC29F87':
          {
            $id: '#/properties/08E1145C-5260-44B9-BB45-8BB4EDC29F87',
            title: 'ラベル ',
            type: 'number',
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});


test('convert textArea to json schema', () => {
  const input = [
    {
      id: 'ED9706D5-DA70-4924-8C77-A5016340BE90',
      element: 'TextArea',
      text: 'Multi-line Input',
      required: false,
      canHaveAnswer: true,
      field_name: 'text_area_CA93A764-8A00-4268-9C4F-395897099A2E',
      label: 'Placeholder Label',
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: [],
    properties:
      {
        'ED9706D5-DA70-4924-8C77-A5016340BE90':
          {
            $id: '#/properties/ED9706D5-DA70-4924-8C77-A5016340BE90',
            title: 'Placeholder Label',
            type: 'string',
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});

test('convert dropdown to json schema', () => {
  const input = [
    {
      id: '2745CAF2-F2B2-4B00-BA1F-FBD8F8C27808',
      element: 'Dropdown',
      text: 'Dropdown',
      required: false,
      canHaveAnswer: true,
      field_name: 'dropdown_D9316A4D-DE8D-4CD7-B147-54A68BE6E410',
      label: 'Placeholder Label',
      options: [
        {
          value: 'place_holder_option_1',
          text: 'Place holder option 1',
          key: 'dropdown_option_1A3DB201-D21B-49BA-95D0-6E527929E577',
        },
        {
          value: 'place_holder_option_2',
          text: 'Place holder option 2',
          key: 'dropdown_option_4975B50E-D7E3-4C09-83CE-EDB135AA7DFC',
        },
        {
          value: 'place_holder_option_3',
          text: 'Place holder option 3',
          key: 'dropdown_option_28C3E7C7-5F6D-48AB-ABBE-DCAC4EBFDC3C',
        },
      ],
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: [],
    properties:
      {
        '2745CAF2-F2B2-4B00-BA1F-FBD8F8C27808':
          {
            $id: '#/properties/2745CAF2-F2B2-4B00-BA1F-FBD8F8C27808',
            title: 'Placeholder Label',
            type: 'string',
            enum: ['place_holder_option_1', 'place_holder_option_2', 'place_holder_option_3'],
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});


test('convert checkboxes to json schema', () => {
  const input = [
    {
      id: 'D4E77A75-D7CC-41B0-965E-76AF8F2A6784',
      element: 'Checkboxes',
      text: 'Checkboxes',
      required: false,
      canHaveAnswer: true,
      field_name: 'checkboxes_B7EA1C39-C637-47F3-91D6-6674752BA5E2',
      label: 'Placeholder Label',
      options: [
        {
          value: 'place_holder_option_1',
          text: 'Place holder option 1',
          key: 'checkboxes_option_D1C40FB9-1819-4875-9092-42DF8FDEB9D5',
        },
        {
          value: 'place_holder_option_2',
          text: 'Place holder option 2',
          key: 'checkboxes_option_F0A1DA96-B7B4-4097-A36A-3527296C8FCA',
        },
        {
          value: 'place_holder_option_3',
          text: 'Place holder option 3',
          key: 'checkboxes_option_509E040A-D529-4310-A4A5-384E226B49F5',
        },
      ],
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: [],
    properties:
      {
        'D4E77A75-D7CC-41B0-965E-76AF8F2A6784':
          {
            $id: '#/properties/D4E77A75-D7CC-41B0-965E-76AF8F2A6784',
            title: 'Placeholder Label',
            type: 'array',
            uniqueItems: true,
            minItems: 0,
            items: {
              type: 'string',
              enum: ['place_holder_option_1', 'place_holder_option_2', 'place_holder_option_3'],
            },
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});


test('convert checkboxes required to json schema', () => {
  const input = [
    {
      id: 'D4E77A75-D7CC-41B0-965E-76AF8F2A6784',
      element: 'Checkboxes',
      text: 'Checkboxes',
      required: true,
      canHaveAnswer: true,
      field_name: 'checkboxes_B7EA1C39-C637-47F3-91D6-6674752BA5E2',
      label: 'Placeholder Label',
      options: [
        {
          value: 'place_holder_option_1',
          text: 'Place holder option 1',
          key: 'checkboxes_option_D1C40FB9-1819-4875-9092-42DF8FDEB9D5',
        },
        {
          value: 'place_holder_option_2',
          text: 'Place holder option 2',
          key: 'checkboxes_option_F0A1DA96-B7B4-4097-A36A-3527296C8FCA',
        },
        {
          value: 'place_holder_option_3',
          text: 'Place holder option 3',
          key: 'checkboxes_option_509E040A-D529-4310-A4A5-384E226B49F5',
        },
      ],
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: ['D4E77A75-D7CC-41B0-965E-76AF8F2A6784'],
    properties:
      {
        'D4E77A75-D7CC-41B0-965E-76AF8F2A6784':
          {
            $id: '#/properties/D4E77A75-D7CC-41B0-965E-76AF8F2A6784',
            title: 'Placeholder Label',
            type: 'array',
            uniqueItems: true,
            minItems: 1,
            items: {
              type: 'string',
              enum: ['place_holder_option_1', 'place_holder_option_2', 'place_holder_option_3'],
            },
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});

test('convert datePicker to json schema', () => {
  const input = [
    {
      id: 'A32F34DB-99CC-4E12-A490-556457AA34C7',
      element: 'DatePicker',
      text: '日付',
      required: false,
      readOnly: false,
      defaultToday: false,
      dateFormat: 'yyyy-MM-dd',
      timeFormat: 'hh:mm aa',
      showTimeSelect: false,
      showTimeSelectOnly: false,
      field_name: 'date_picker_8E6555AA-65FF-4E82-8445-55D4C8E7A36C',
      label: 'Placeholder Label',
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: [],
    properties:
      {
        'A32F34DB-99CC-4E12-A490-556457AA34C7':
          {
            $id: '#/properties/A32F34DB-99CC-4E12-A490-556457AA34C7',
            title: 'Placeholder Label',
            type: 'string',
            format: 'date',
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});


test('convert radioButtons to json schema', () => {
  const input = [
    {
      id: '72300191-ADCF-4321-BA2B-EC10AD876158',
      element: 'RadioButtons',
      text: 'Multiple Choice',
      required: false,
      canHaveAnswer: true,
      field_name: 'radiobuttons_BCF59E70-0E83-4DA6-ACDB-78DF86DD0B4B',
      label: 'Placeholder Label',
      options: [
        {
          value: 'place_holder_option_1',
          text: 'Place holder option 1',
          key: 'radiobuttons_option_E440B02E-E136-4686-8A03-0F882DC2ECEC',
        },
        {
          value: 'place_holder_option_2',
          text: 'Place holder option 2',
          key: 'radiobuttons_option_FC268138-7ABB-4ED8-8331-BC4EAB741B1E',
        },
        {
          value: 'place_holder_option_3',
          text: 'Place holder option 3',
          key: 'radiobuttons_option_98D6209D-37C6-418D-8905-F1D23E457562',
        },
      ],
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: [],
    properties:
      {
        '72300191-ADCF-4321-BA2B-EC10AD876158':
          {
            $id: '#/properties/72300191-ADCF-4321-BA2B-EC10AD876158',
            title: 'Placeholder Label',
            type: 'string',
            enum: ['place_holder_option_1', 'place_holder_option_2', 'place_holder_option_3'],
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});


test('convert tags to json schema', () => {
  const input = [
    {
      id: '164C60BB-54EA-4EBF-88D1-BC8B152694EA',
      element: 'Tags',
      text: 'タグ',
      required: false,
      canHaveAnswer: true,
      field_name: 'tags_BD6FF6A1-A3D5-48DC-A381-8280C2CADB50',
      label: 'ラベル',
      options: [
        {
          value: 'place_holder_tag_1',
          text: 'Place holder tag 1',
          key: 'tags_option_E9B947AF-98E6-4078-AB6D-BEB9F2F55A6E',
          label: 'Place holder tag 1',
        },
        {
          value: 'place_holder_tag_2',
          text: 'Place holder tag 2',
          key: 'tags_option_BC55713D-05D8-4C7C-9E2D-D366CDB78225',
          label: 'Place holder tag 2',
        },
        {
          value: 'place_holder_tag_3',
          text: 'Place holder tag 3',
          key: 'tags_option_5AE0C6C4-03AB-4FEC-82B0-62B672F82B8B',
          label: 'Place holder tag 3',
        },
      ],
    },
  ];

  const expected = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://example.com/root.json',
    type: 'object',
    required: [],
    properties:
      {
        '164C60BB-54EA-4EBF-88D1-BC8B152694EA':
          {
            $id: '#/properties/164C60BB-54EA-4EBF-88D1-BC8B152694EA',
            title: 'ラベル',
            type: 'string',
            enum: ['place_holder_tag_1', 'place_holder_tag_2', 'place_holder_tag_3'],
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});

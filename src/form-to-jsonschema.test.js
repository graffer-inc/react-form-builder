import Ajv from 'ajv';
import {itemsToJsonSchema} from './form-to-jsonschema';

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
            enums: ['place_holder_option_1', 'place_holder_option_2', 'place_holder_option_3'],
          },
      },
  };

  const jsonSchema = itemsToJsonSchema(input);
  expect(jsonSchema).toStrictEqual(expected);
  expect(ajv.validateSchema(jsonSchema)).toBe(true);
});

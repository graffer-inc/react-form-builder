import Ajv from 'ajv';
import { itemsToJsonSchema } from './form-to-jsonschema';

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

  expect(itemsToJsonSchema(input)).toStrictEqual(expected);
});

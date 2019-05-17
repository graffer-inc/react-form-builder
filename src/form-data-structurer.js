
const formDataToStructuredData = (formData) => {
  const data = {};
  formData.forEach(f => {
    data[f.id] = f.value;
  });
  return data;
};


// Convert to the below style data structure.
// const answers = {
//   'dropdown_38716F53-51AA-4A53-9A9B-367603D82548': 'd2',
//   'checkboxes_8D6BDC45-76A3-4157-9D62-94B6B24BB833': [
//     'checkboxes_option_8657F4A6-AA5A-41E2-A44A-3E4F43BFC4A6',
//     'checkboxes_option_1D674F07-9E9F-4143-9D9C-D002B29BA9E4',
//   ],
//   'radio_buttons_F79ACC6B-7EBA-429E-870C-124F4F0DA90B': [
//     'radiobuttons_option_553B2710-AD7C-46B4-9F47-B2BD5942E0C7',
//   ],
//   'rating_3B3491B3-71AC-4A68-AB8C-A2B5009346CB': 4,
// };
const structuredDataToFormData = (uiData, structuredData) => {
  const uiDataMap = {};
  const data = {};
  uiData.forEach(d => {
    uiDataMap[d.id] = d;
  });
  Object.keys(structuredData).forEach(k => {
    const typePrefix = uiData[k].split(/(?=[A-Z])/).join('_').toLowerCase();
    data[`${typePrefix}_${k}`] = structuredData[k];
  });
  return data;
};

const dataStructurer = {
  formDataToStructuredData,
  structuredDataToFormData,
};

export default dataStructurer;

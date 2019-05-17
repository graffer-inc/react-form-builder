
const formDataToStructuredData = (formData) => {
  const data = {};
  formData.each(f => {
    data[f.id] = f.value;
  });
  return data;
};

// const structuredDataToFormData = (structuredData) => {
//
// };

const dataStructurer = {
  formDataToStructuredData
}

export default dataStructurer

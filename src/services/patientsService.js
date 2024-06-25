
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getPatientsList = async() => {
  try {
    const result = await fetch(`${API_BASE_URL}/movies`);
    const patientsData = await result.json();
    return patientsData.data;
  } catch (error) {
    console.log(`Error al recuperar los pacientes: ${error.message}`);
  }
};

export {
  getPatientsList
};

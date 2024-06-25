import { createContext, useEffect, useState } from "react";
import { getPatientsList } from "../services/patientsService";

const PatientsContext = createContext();

const PatientsContextProvider = ({ children }) => {
  const [patientsList, setPatientsList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  useEffect(() => {
    const fetchPatients = async () => {
      const patientsData = await getPatientsList();
      setPatientsList(patientsData);
    }
    fetchMovies();
  }, []);

  const contextData = {
    patientsList,
    setPatientsList,
    selectedPatient,
    setSelectedPatient
  };

  return (
    <PatientsContext.Provider value={contextData}>
      {children}
    </PatientsContext.Provider>
  );
}

// Exportamos el context y el componente con el proveedor de información
export {
  PatientsContextProvider,
  PatientsContext
};

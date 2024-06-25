import PatientsDetail from "../components/PatientDetail";
import PatientsList from "../components/PatientsList";
import { PatientsContextProvider } from "../contexts/PatientsContext";

const Patients = () => {
  return (
    <PatientsContextProvider>
      <div>
        <header style={{height: "70px"}}>
          <h2>Bienvenido a la Aplicación de APS</h2>
        </header>
        <div className="Patients-container">
          <PatientsList />
          <PatientsDetail />
        </div>
      </div>
    </PatientsContextProvider>
  );
};

export default Patients;
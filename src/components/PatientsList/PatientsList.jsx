import { PatientsContext } from "../../contexts/PatientsContext";
import { useContext } from "react";

const PatientsList = () => {
  const patientsContext = useContext(PatientsContext);
  console.log(patientsContext);
  return (
    <section style={{width: "100%", textAlign:'start'}} id="patients-list-container">
      <h3>Lista de Pacientes</h3>
      <ul>
        {
          patientsContext.patientsList.map((patient) => (
            <li
              key={patient.doc_id}
              onClick={() => patientsContext.setSelectedPatient(patient) }>
              {patient.patient_name}
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default PatientsList;

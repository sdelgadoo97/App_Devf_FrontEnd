import { useContext } from "react";
import { PatientsContext } from "../../contexts/PatientsContext";
const PatientDetail = () => {
  const { selectedPatient } = useContext(PatientsContext);

  return (
    <section style={{width: "100%", textAlign:'start'}}>
      <h3>Detalle de Paciente</h3>
      {
        selectedPatient ?
          (<div className="patient-detail-container">
            <h5>{selectedPatient.patient_name}</h5>
            <p>{selectedPatient.patient_email}</p>
            <p>{selectedPatient.patient_phone}</p>
            <p>{selectedPatient.patient_address}</p>
            <p>{selectedPatient.patient_age}</p>
            <p>{selectedPatient.patient_gender}</p>
            <p>{selectedPatient.patient_weight}</p>
            <p>{selectedPatient.patient_height}</p>
          </div>)
          :
          <h5 className="no-patient-selected">Selecciona algun paciente</h5>
      }
    </section>
  );
};

export default PatientDetail;

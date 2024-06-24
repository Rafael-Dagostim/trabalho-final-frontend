import { useState, useEffect, useReducer } from "react";

import { Repository } from "../../shared/repository";

import ServiceTable from "../../components/Service/ServiceTable";
import ServiceForm from "../../components/Service/ServiceForm";

export function Services() {

  const serviceFormInitialState = { description: "", price: 0, openingDate: null, completionDate: null };

  const reducer = (state, action) => {
    switch (action.type) {
      case "set":
        return { ...state, ...action.obj };
      case "load":
        return action.obj;
      case "reset":
        return serviceFormInitialState;
      default:
        window.alert(`Evento '${action.type}' não reconhecido!`);
        return state;
    }
  };

  const [service, dispatch] = useReducer(reducer, serviceFormInitialState);
  const [serviceList, setServiceList] = useState([]);

  const serviceRepository = new Repository("service");
  const loadServiceList = () => serviceRepository.list().then(setServiceList);

  useEffect(() => {
    loadServiceList();
  }, []);

  const getServiceById = async (id) => {
    const service = await serviceRepository.get(id);

    if (!service) {
      window.alert(`Serviço com id ${id} não encontrado!`);
      return;
    }
    dispatch({ type: "load", obj: service });
  };

  const saveService = async (e) => {
    e.preventDefault();
    const isEdit = !!service.id;

    if (isEdit) await serviceRepository.update(service.id, service);
    else await serviceRepository.create(service);

    dispatch({ type: "reset" });
    await loadServiceList();
  };

  const deleteService = async (id) => {
    await serviceRepository.delete(id);
    await loadServiceList();
  };

  const handleDescription = (e) => {
    dispatch({ type: "set", obj: { description: e.target.value } });
  };
  const handlePrice = (e) => {
    dispatch({ type: "set", obj: { price: Number(e.target.value) } });
  };
  const handleOpeningDate = (e) => {
    dispatch({ type: "set", obj: { openingDate: e.target.value } });
  };
  const handleCompletionDate = (e) => {
    dispatch({ type: "set", obj: { completionDate: e.target.value } });
  };

  const handleClear = () => dispatch({ type: "reset" });

  return (
    <>
      <div>
        {serviceList.length > 0 ? (
          <ServiceTable
            services={serviceList}
            deleteService={deleteService}
            editService={getServiceById}
          />
        ) : (
          <h3 style={{ marginBottom: "30px" }}>Nenhum serviço cadastrado...</h3>
        )}
      </div>
      <ServiceForm
        completionDate={service.completionDate}
        openingDate={service.openingDate}
        description={service.description}
        price={service.price}
        
        handleCompletionDate={handleCompletionDate}
        handleDescription={handleDescription}
        handleOpeningDate={handleOpeningDate}
        handlePrice={handlePrice}
        onClear={handleClear}

        onSaveService={saveService}
      />
    </>
  );
}

export default Services;
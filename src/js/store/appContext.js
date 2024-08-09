import React, { createContext, useState } from 'react';

// Crear el contexto
export const Context = createContext();

// Crear el proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [store, setStore] = useState({
    contacts: [],
  });

  const addContact = (name, email, phone, address) => {
    const newContact = {
      id: new Date().getTime(), // Un ID único basado en la hora actual
      name,
      email,
      phone,
      address,
    };
    setStore({
      ...store,
      contacts: [...store.contacts, newContact],
    });
  };

  return (
    <Context.Provider value={{ store, actions: { addContact } }}>
      {children}
    </Context.Provider>
  );
};

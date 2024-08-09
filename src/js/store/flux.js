const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            delContact: async (id) => {
                try {
                    const store = getStore();
                    const contacts = store.contacts.filter(contact => contact.id !== id);
                    setStore({ contacts });

                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Isabel/contacts/${id}`, {
                        method: "DELETE"
                    });

                    const data = await resp.json();
                    console.log("Contact deleted:", data);
                    getActions().loadSomeData();

                } catch (error) {
                    console.error("Error deleting contact", error);
                }
            },

            editContact: async (id, updatedContact) => {
                try {
                    const opt = {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    };

                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Isabel/contacts/${id}`, opt);
                    const data = await resp.json();
                    console.log("Contact updated:", data);

                    const store = getStore();
                    const contacts = store.contacts.map(contact => 
                        contact.id === id ? data : contact
                    );
                    setStore({ contacts });

                    getActions().loadSomeData();

                } catch (error) {
                    console.error("Error editing contact", error);
                }
            },

            addContact: async (name, email, phone, address) => {
                const newContact = { name, email, phone, address };

                try {
                    const opt = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newContact)
                    };

                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/Isabel/contacts", opt);
                    const data = await resp.json();
                    console.log("Contact added:", data);

                    const store = getStore();
                    setStore({ contacts: [...store.contacts, data] });

                } catch (error) {
                    console.error("Error adding contact", error);
                }
            },

            createAgenda: async () => {
                try {
                    const opt = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    };

                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/Isabel", opt);
                    const data = await resp.json();
                    console.log(data);

                } catch (error) {
                    console.error("Error creating agenda", error);
                }
            },

            loadSomeData: async () => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/Isabel");
                    const data = await resp.json();
                    setStore({ contacts: data.contacts });

                } catch (error) {
                    console.error("Error loading data", error);
                }
            },

            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo });
            }
        }
    };
};

export default getState;

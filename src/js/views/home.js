import React, { useContext } from "react";
import { Contact } from "../component/contacts";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <h1 className="d-flex justify-content-center alert alert-success" role="alert">
                Contact List
            </h1>
            <div className="container w-50 p-3">
                {store.contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                        address={contact.address}
                    />
                ))}
            </div>
        </div>
    );
};

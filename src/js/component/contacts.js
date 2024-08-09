import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Contact = ({ name, email, phone, address, id }) => {
    const { actions } = useContext(Context);
    const [newContact, setNewContact] = useState({ name, email, phone, address });

    const handleClickDelete = () => {
        actions.delContact(id);
    };

    const handleClickEdit = () => {
        actions.editContact(id, newContact);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    return (
        <div className="contact-card">
            <h5>{name}</h5>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
            <div>
                <button
                    type="button"
                    className="btn btn-danger me-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#deleteModal${id}`}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#editModal${id}`}
                >
                    Edit
                </button>
            </div>

            {/* Delete Modal */}
            <div
                className="modal fade"
                id={`deleteModal${id}`}
                tabIndex="-1"
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">
                                Confirm Delete
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this contact?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger" onClick={handleClickDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <div
                className="modal fade"
                id={`editModal${id}`}
                tabIndex="-1"
                aria-labelledby="editModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">
                                Edit Contact
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                name="name"
                                value={newContact.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={newContact.email}
                                onChange={handleChange}
                                className="form-control mt-2"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={newContact.phone}
                                onChange={handleChange}
                                className="form-control mt-2"
                                placeholder="Phone"
                            />
                            <input
                                type="text"
                                name="address"
                                value={newContact.address}
                                onChange={handleChange}
                                className="form-control mt-2"
                                placeholder="Address"
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleClickEdit}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

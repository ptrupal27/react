import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        isAdmin: false,
        createdAt: '',
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="isAdmin">IsAdmin</label>
                <input
                    id="isAdmin"
                    type="checkbox"
                    checked={formData.isAdmin}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="createdAt">Creation Date</label>
                <input
                    id="createdAt"
                    type="date"
                    value={formData.createdAt}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

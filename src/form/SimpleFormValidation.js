import React, { useState } from "react";

export default function SimpleFormValidation() {
    // Managing name and gender as part of the name object
    const [name, setName] = useState({
        firstName: "",
        gender: ""
    });
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if both fields are filled
        if (name.firstName === "" || name.gender === "") {
            setError(true);
            return;
        }

        setError(false);

        // Display alerts with the form data
        alert("My Name is " + name.firstName);
        alert("My Gender is " + name.gender);

        console.log("Name: ", name.firstName);
        console.log("Gender: ", name.gender);
    };

    // Handles both firstName and gender changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setName((prevName) => ({
            ...prevName,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    value={name.firstName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={name.gender}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {error && <p style={{ color: "red" }}>Please fill out all fields</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

import React, { useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";
import JoblyApi from "../api";
import Alert from "../common/Alert";

const ProfileForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    // State to manage form data. Can't use Initial State in this form, leads to error loading currentUser.
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });

    // State for form errors and save confirmation
    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    // Effect to update form data when currentUser changes
    useEffect(() => {
        if (currentUser) {
            setFormData({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                username: currentUser.username,
                password: ""
            });
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
        setFormErrors([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        };
        let username = formData.username;

        try {
            let updatedUser = await JoblyApi.saveProfile(username, profileData);
            setFormData((f) => ({ ...f, password: "" }));
            setFormErrors([]);
            setSaveConfirmed(true);
            setCurrentUser(updatedUser);
        } catch (e) {
            setFormErrors([e.message]); // Assuming e.message contains error message
            return;
        }
    };

    if (!currentUser) {
        return <p>Loading...</p>; // Optional: Render a loading indicator if currentUser is null
    }

    return (
        <>
            <h1>Profile Update Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username</label>
                    <br />
                    <h3>{formData.username}</h3>
                </div>

                <div className="input-container">
                    <label htmlFor="firstName">First Name</label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        value={formData.email}
                        required
                    />
                </div>

                <div className="input-container">
                    <label>Confirm password to make changes:</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formData.password}
                        required
                    />
                </div>

                {formErrors.length ? <Alert messages={formErrors} /> : null}

                {saveConfirmed ? <Alert messages={["Updated successfully."]} /> : null}

                <button>Save Changes</button>
            </form>
        </>
    );
};

export default ProfileForm;

import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import Alert from "../common/Alert";


const SignUpForm = ({signup}) => {
    const INITIAL_STATE = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([])
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await signup(formData);
          if (res.success) {
            navigate("/companies");
          } else {
            setFormErrors(res.errors || ["Something went wrong"]);
          }
        } catch (err) {
          setFormErrors([err.message || "Something went wrong"]);
        }
      };


    return(
        <div className="card-container">
            <div className="auth-card">
                <div className="auth-card-title">
                <h2>Sign Up</h2>
                </div>
            <form 
                onSubmit={handleSubmit}
                className="auth-form">
                <div className="input-container">
                    <label htmlFor="username">Username</label>
                <br/>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="username"
                        value={formData.username}
                        required='True' />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                <br/>
                    <input 
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={formData.email}
                        required='True' />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                <br/>
                    <input 
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formData.password}
                        required='True' />
                </div>
                <div className="input-container">
                    <label htmlFor="firstName">First Name</label>
                <br/>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        required='True' />
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">Last Name</label>
                <br/>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        required='True' />
                </div>

                {formErrors.length ? <Alert messages={formErrors} /> : null}

                <button className="auth-btn">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default SignUpForm
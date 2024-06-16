import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import Alert from "../common/Alert";

const LoginForm = ({login}) => {
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formErrors, setFormErrors] = useState([]);
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
        let res = await login(formData)
        if(res.success){
            navigate("/companies");
        }else {
            setFormErrors(res.errors);
          }
    }

    return(
        <div className="form-container">
            <form 
                onSubmit={handleSubmit}
                className="signup-form">
               
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
                    <label htmlFor="password">Password</label>
                <br/>
                    <input 
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formData.password}
                        required='True' />
                </div>

                {formErrors.length ? <Alert messages={formErrors} /> : null}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm

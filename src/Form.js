import React from 'react'
import useForm from "./useForm";
import validate from "./validateLogin";


const Form = () => {

    const { handleChange, handleSubmit, values, errors } = useForm(submit,validate);

    function submit() {
        alert("Successfully :)))))");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div className="box">
                    <label className="label">Name:</label>
                    <div>
                        <input className={`${errors.name && "inputError"}`} type="text" name="name" values={values.name} onChange={handleChange} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                </div>
                <div className="box">
                    <label className="label">Email:</label>
                    <div>
                        <input className={`${errors.email && "inputError"}`} type="email" name="email" values={values.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>
                <div className="box">
                    <label className="label">Password:</label>
                    <div>
                        <input className={`${errors.password && "inputError"}`} type="password" name="password" values={values.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Form;


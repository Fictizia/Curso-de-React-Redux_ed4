import React from "react";
import useForm from "react-hook-form";

import "../../styles/Form.css";

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Any place in your app!</h1>
      <input
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address"
          }
        })}
      />
      <div className="form-error">{errors.email && errors.email.message}</div>

      <input
        name="password"
        // type="password"
        ref={register({
          required: 'Required',
          validate: value => value !== "password" || "Try again!",
        })}
      />
      <div className="form-error">{errors.password && errors.password.message}</div>

      <button type="submit">Submit</button>
    </form>
  );
};

export { Form }

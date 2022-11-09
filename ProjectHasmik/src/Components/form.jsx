import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(watch(""));
  };
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign in</h2>
          <span> Register and enjoy the service</span>
          <form
            id="form"
            className="flex-flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="link"
              {...register("username")}
              placeholder="username"
            />{" "}
            <br />
            <input
              type="password"
              className="link"
              {...register("password")}
              placeholder="password"
            />{" "}
            <br />
            <input
              type="password"
              className="link"
              {...register("confirm password")}
              placeholder="confirm password"
            />{" "}
            <br />
            <input
              type="number"
              className="link"
              {...register("Mobile Number", { required: true })}
              placeholder="mobile number"
            />{" "}
            <br />
            {errors.mobile?.type === "required" &&
              "Mobile Number is required"}{" "}
            <br />
            <button className="button">Sign in</button>
          </form>
        </div>
      </div>
    </section>
  );
}

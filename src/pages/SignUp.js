import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../firebase/auth";

export default function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      await signup(data);
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="First name"
              ref={register}
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputPassword4"
              placeholder="Last name"
              ref={register}
            />
          </div>
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="inputAddress"
            placeholder="email"
            ref={register}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="inputAddress2"
            placeholder="Password"
            ref={register}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Sign up
        </button>
      </form>
    </>
  );
}

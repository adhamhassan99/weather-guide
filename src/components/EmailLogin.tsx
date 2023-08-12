import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../supabaseClient";
import { toast } from "react-toastify";
import { useShowModal } from "../hooks/useShowModal";

type input = { mail: string; password: string };

const EmailLogin = () => {
  const { toggleModal } = useShowModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<input>();

  const onSubmit: SubmitHandler<input> = async (data: input) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.mail,
      password: data.password,
    });

    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toggleModal();
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="my-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col gap-3">
          <input
            className="outline-none border-2 rounded-md p-1 border-teal-600 focus:border-yellow-300"
            placeholder="abc@gmail.com"
            {...register("mail")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="outline-none border-2 rounded-md p-1 border-teal-600 focus:border-yellow-300"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </div>

        <input
          className="border w-full mt-6 rounded-md py-1 hover:cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform hover:bg-teal-600 font-semibold hover:text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default EmailLogin;

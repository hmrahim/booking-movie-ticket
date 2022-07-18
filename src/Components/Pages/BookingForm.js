import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';


const BookingForm = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onsubmit = (data) => {
    const obj = Object.assign(data, { id: Date.now(), count: 1 });

    // let arr = []
    // const get = JSON.parse(localStorage.getItem("ticket"))
    // arr = [get]
    // arr.push(data)

    // localStorage.setItem("ticket",JSON.stringify(arr))
    // console.log(arr)
    // const qty = localStorage.getItem(data.email)
    // if(qty){
    //     const newqty = parseInt(qty) + 1
    //     localStorage.setItem(data.email,newqty)
    // }else{

    //     localStorage.setItem(data.email,1)
    // }

    const exist = localStorage.getItem(obj.email);
    if (exist) {
      const newObj = JSON.parse(exist).count + 1;
      localStorage.getItem(obj.email, JSON.stringify(newObj));
    } else {
      localStorage.setItem(obj.email, JSON.stringify(obj));
      toast.success("Your ticked booked succesfully!")
      reset();
    }
  };
  return (
    <div className="w-full md:w-2/3 lg:w-2/3 mx-auto min-h-[80vh] my-5 shadow-lg">
      <h1 className="text-4xl text-center mt-5 mb-2">
        Booking for <span className="text-rose-500 font-semibold">"{id}"</span>
      </h1>{" "}
      <hr />
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 md:gap-10 gap-5">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> your first name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("fname", {
                required: {
                  value: true,
                  message: "First name is required",
                },
              })}
            />
            <label class="label">
              {errors.fname?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.fname.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> your last name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              {...register("lname", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
            />
            <label class="label">
              {errors.lname?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.lname.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> your email address?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> your phone number?</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              class="input input-bordered w-full "
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                minLength: {
                  value: 10,
                  message: "You have to provide minimum 10 digits",
                },
              })}
            />
            <label class="label">
              {errors.phone?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
              {errors.phone?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <button className="btn btn-primary m-5">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;

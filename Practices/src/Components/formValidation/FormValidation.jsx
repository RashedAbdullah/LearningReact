import { useForm } from "react-hook-form";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex align-middle justify-center">
      <form
        className=" text-center mt-10 p-5 rounded-lg border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="bg-gray-200 py-1 px-2"
            placeholder="Enter Name"
            {...register("name", { required: true }, { pattern: /^[A-Za-z]+$/i })}
          />
        </div>
        {errors.name && (
          <p className="text-[14px] text-red-600">Name is required</p>
        )}
        <div>
          {" "}
          <input
            className="bg-gray-200 py-1 px-2 mt-3"
            placeholder="Enter Password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <p className="text-[14px] text-red-600">Password is required</p>
        )}
        <input
          className="bg-green-600 text-white rounded py-1 px-4 cursor-pointer mt-3"
          type="submit"
        />
      </form>
    </div>
  );
}

import { useForm } from "react-hook-form";
import Field from "../components/field";
import FieldSet from "../components/fieldset";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    const demoUser = { email: "maarashed40@gmail.com", Password: "123456" };
    const matched =
      formData.email === demoUser.email &&
      formData.Password === demoUser.Password;

    if (!matched) {
      setError("root.random", {
        message: `User with ${formData.email} is not found`,
        type: "random",
      });
    }
  };
  return (
    <div className="p-10 bg-gray-300 rounded w-full lg:w-[40vw]">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {" "}
        <FieldSet label="Sign in">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email"
              className={`block border ${
                errors.email ? "border-red-400" : "border-white"
              } w-[100%] p-1 rounded outline-none`}
            />
          </Field>
          <Field label="Password" error={errors.Password}>
            <input
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              id="Password"
              type="password"
              name="Password"
              placeholder="Enter Password"
              className={`block border ${
                errors.Password ? "border-red-400" : "border-white"
              } w-[100%] p-1 rounded outline-none`}
            />
          </Field>
          {errors?.root?.random.message && (
            <div className="mt-5 text-sm text-center text-red-500">
              {errors?.root?.random.message}
            </div>
          )}
          <Field>
            <button className="w-full bg-green-500 text-center text-white py-1 text-lg rounded mt-6">
              Sigi in
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default SignInForm;

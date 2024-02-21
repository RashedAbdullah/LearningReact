import { useFieldArray, useForm } from "react-hook-form";
import Field from "../components/field";
import FieldSet from "../components/fieldset";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "socials",
    }
  );

  const handleSubmitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="p-10 bg-gray-300 rounded w-full lg:w-[40vw]">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {" "}
        <FieldSet label="Sign up">
          <Field label="First name" error={errors.fname}>
            <input
              {...register("fname", { required: "Name is required" })}
              id="fname"
              type="text"
              name="fname"
              placeholder="Enter first name"
              className={`block border ${
                errors.fname ? "border-red-400" : "border-white"
              } w-[100%] p-1 rounded outline-none`}
            />
          </Field>
          <Field label="Last name" error={errors.lname}>
            <input
              {...register("lname", { required: "Name is required" })}
              id="lname"
              type="text"
              name="lname"
              placeholder="Enter last name"
              className={`block border ${
                errors.lname ? "border-red-400" : "border-white"
              } w-[100%] p-1 rounded outline-none`}
            />
          </Field>
          <Field label="Email" error={errors.gmail}>
            <input
              {...register("gmail", { required: "Gmail is required" })}
              id="gmail"
              type="email"
              name="gmail"
              placeholder="Enter Email"
              className={`block border ${
                errors.gmail ? "border-red-400" : "border-white"
              } w-[100%] p-1 rounded outline-none`}
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              id="password"
              type="password"
              name="password"
              placeholder="Enter Password"
              className={`block border ${
                errors.password ? "border-red-400" : "border-white"
              } w-[100%] p-1 rounded outline-none`}
            />
          </Field>

          <div className="mt-5 text-sm text-center text-red-500">
            {errors?.root?.random.message}
          </div>

          <FieldSet label="">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex flex-col align-middle lg:items-end lg:flex-row gap-2 border p-2 rounded"
              >
                {" "}
                <Field label="Handle">
                  <input
                    {...register(`socials[${index}].name`)}
                    id={`socials[${index}].name`}
                    type="text"
                    name={`socials[${index}].name`}
                    placeholder="Enter Social Handle"
                    className={`block border  w-[100%] p-1 rounded outline-none`}
                  />
                </Field>
                <Field label="URL">
                  <input
                    {...register(`socials[${index}].url`)}
                    id={`socials[${index}].url`}
                    type="text"
                    name={`socials[${index}].url`}
                    placeholder="Enter url"
                    className={`block border  w-[100%] p-1 rounded outline-none`}
                  />
                </Field>
                <button
                  onClick={() => remove(index)}
                  className="bg-red-500 h-auto py-1 px-2 rounded text-white"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => append({ name: "", url: "" })}
              className=" bg-blue-500 text-white py-1 px-10 lg:px-20 rounded block m-auto mt-5"
            >
              Add Social Link
            </button>
          </FieldSet>
          <Field>
            <button className="w-full bg-green-500 text-center text-white py-1 text-lg rounded mt-6">
              Sigi up
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default SignUpForm;

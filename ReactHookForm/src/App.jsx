import SignInForm from "./forms/signinform";
import SignUpForm from "./forms/signupform";

const App = () => {
  return (
    <div className="m-10 flex justify-center gap-5 flex-col lg:flex-row">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default App;

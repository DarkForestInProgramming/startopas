import { Link } from "react-router-dom";
import { LoginInterface } from "../../services/interfaces/authInterfaces";
import FormLogo from "./formLogo";
import SmallLoader from "../loader/smallLoad";

const LoginForm: React.FC<LoginInterface> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <FormLogo />
      {/* Form logo ends here */}
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Prisijungimas
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={props.submitHandler}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Jūsų El. Paštas
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                name="email"
                id="email"
                type="email"
                placeholder="vardas@pastas.com"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
              />
            </div>
            {/* Email input ends here */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Slaptažodis
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
              />
            </div>
            {/* Password input ends here */}
            <button
              className="w-full bg-gray-900 text-white hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
              disabled={props.isLoading}
            >
              Prisijungti
            </button>
            {/* Submit button ends here */}
            {props.isLoading && <SmallLoader />}
            {/* Small loader ends here */}
            <p className="text-sm font-light text-gray-500">
              Esate naujas pirkėjas?{" "}
              <Link
                to={
                  props.redirect
                    ? `/register?redirect=${props.redirect}`
                    : "/register"
                }
                className="font-medium text-primary-600 hover:underline"
              >
                Registruotis
              </Link>
            </p>
            {/* Extra section ends here */}
          </form>
          {/* Login form ends here */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

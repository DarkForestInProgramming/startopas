import { Link } from "react-router-dom";
import { RegisterInterface } from "../../services/interfaces/authInterfaces";
import FormLogo from "./formLogo";
import SmallLoader from "../loader/smallLoad";
import Breadcrumb from "../breadcrumb";

const RegisterForm: React.FC<RegisterInterface> = (props) => {
  return (
    <div className="h-full">
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample"
            loading="lazy"
          />
        </div>
        {/* <!-- Left column container with background ends here--> */}
        <div className="mb-12 md:mb-0 w-8/12 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form onSubmit={props.submitHandler}>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                Registracija
              </p>
            </div>
            {/* <!-- Separator ends here --> */}
            <Breadcrumb category="Autentifikavimas" name="Registracija" />
            {/* <!-- Breadcrumb ends here --> */}
            <FormLogo />
            {/* <!-- Form logo ends here --> */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Vartotojo Vardas
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="name"
                name="name"
                id="name"
                placeholder="pirkėjas42"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
              />
            </div>
            {/* <!-- Name input ends here --> */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                El. Paštas
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                name="email"
                id="email"
                type="email"
                placeholder="pavyzdys@gmail.com"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
              />
            </div>
            {/* <!-- Email input ends here --> */}
            <div className="mb-6">
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
            {/* <!-- Password input ends here --> */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Patvirtinti Slaptažodį
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                value={props.confirmPassword}
                onChange={(e) => props.setConfirmPassword(e.target.value)}
              />
            </div>
            {/* <!-- Confirm password input ends here --> */}
            <div className="text-center lg:text-left">
              <button
                className="px-7 pb-2.5 pt-3 bg-gray-900 text-white hover:bg-gray-800 font-medium rounded text-sm text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                type="submit"
                disabled={props.isLoading}
              >
                Registruotis
              </button>
              {/* Submit button ends here */}
              {props.isLoading && <SmallLoader />}
              {/* Small loader ends here */}
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                Jau turite paskyrą?{" "}
                <Link
                  to={
                    props.redirect
                      ? `/login?redirect=${props.redirect}`
                      : "/login"
                  }
                  className="text-danger font-medium text-gray-600 hover:underline transition duration-150 ease-in-out"
                >
                  Prisijungti
                </Link>
              </p>
              {/* <!-- Login link ends here --> */}
            </div>
          </form>
        </div>
        {/* <!-- Right column container ends here --> */}
      </div>
    </div>
  );
};

export default RegisterForm;

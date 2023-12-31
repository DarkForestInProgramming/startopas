import { Link } from "react-router-dom";
import { LoginInterface } from "../../../services/interfaces/authInterfaces";
import FormLogo from "./formLogo";
import SmallLoader from "../loader/smallLoad";
import Breadcrumb from "../breadcrumb";

const LoginForm: React.FC<LoginInterface> = ({
  submitHandler,
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  redirect,
}) => {
  return (
    <div className="h-full">
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            className="w-full"
            src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699953731/Startopas/auth_logo.webp"
            loading="lazy"
            alt="Startopas viršelis"
          />
        </div>
        <div className="mb-12 md:mb-0 w-8/12 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form onSubmit={submitHandler}>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                Prisijungimas
              </p>
            </div>
            <Breadcrumb category="Autentifikavimas" name="Prisijungimas" />
            <FormLogo />
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Jūsų El. Paštas
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                name="email"
                id="email"
                type="email"
                placeholder="pavyzdys@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center lg:text-left">
              <button className="px-7 pb-2.5 pt-3" disabled={isLoading}>
                Prisijungti
              </button>
              {isLoading && <SmallLoader />}
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                Esate naujas pirkėjas?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                  className="text-danger font-medium text-gray-600 hover:underline transition duration-150 ease-in-out"
                >
                  Registruotis
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

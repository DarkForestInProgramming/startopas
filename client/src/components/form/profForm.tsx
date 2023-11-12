import { UpdateInterface } from "../../services/interfaces/authInterfaces";
import SmallLoader from "../loader/smallLoad";

const ProfileForm: React.FC<UpdateInterface> = (props) => {
  return (
    <form
      onSubmit={props.submitHandler}
      className="shadow-md rounded px-4 pt-6 pb-8 mb-6 md:w-1/4 md:mr-6"
    >
      <h2 className="mb-6 text-xl font-semibold">Vartotojo profilis</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          Vardas
        </label>
        <input
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter name"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          El. Paštas
        </label>
        <input
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Įveskite el. paštą"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Slaptažodis
        </label>
        <input
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Įveskite naują slaptažodį"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Patvirtinti slaptažodį
        </label>
        <input
          id="confirmPassword"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Patvirtinkite naują slaptažodį"
          value={props.confirmPassword}
          onChange={(e) => props.setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className="mt-2 py-2 px-4 bg-gray-900 text-white hover:bg-gray-800 font-medium rounded text-sm text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        type="submit"
      >
        Atnaujinti
      </button>
      {props.loadingUpdateProfile && <SmallLoader />}
    </form>
  );
};

export default ProfileForm;

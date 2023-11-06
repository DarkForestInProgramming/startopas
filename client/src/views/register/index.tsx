import { useEffect } from "react";
import AppLayout from "../../layouts/main";
import RegisterForm from "../../components/form/regForm";
import { useRegisterHandlers } from "../../services/handlers/regHandlers";

const RegisterView = () => {
  const {
    submitHandler,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    userInfo,
    redirect,
    navigate,
    isLoading,
  } = useRegisterHandlers();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  return (
    <AppLayout header="Registracija">
      <section>
        <RegisterForm
          submitHandler={submitHandler}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          isLoading={isLoading}
          redirect={redirect}
        />
      </section>
    </AppLayout>
  );
};

export default RegisterView;

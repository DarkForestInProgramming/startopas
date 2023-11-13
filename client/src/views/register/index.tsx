import { useEffect } from "react";
import AppLayout from "../../layouts/main";
import RegisterForm from "../../components/ui/form/regForm";
import { useRegisterHandlers } from "../../services/handlers/regHandlers";
import Meta from "../../components/meta";

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
    <AppLayout>
      <Meta title="Registracija" />
      <section className="md:py-16 py-4">
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

import { useEffect } from "react";
import AppLayout from "../../layouts/main";
import LoginForm from "../../components/form/logForm";
import { useLoginHandlers } from "../../services/handlers/logHandlers";

const LoginView = () => {
  const {
    submitHandler,
    email,
    setEmail,
    password,
    setPassword,
    userInfo,
    redirect,
    navigate,
    isLoading,
  } = useLoginHandlers();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  return (
    <AppLayout header="Prisijungti">
      <section>
        <LoginForm
          submitHandler={submitHandler}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          redirect={redirect}
          isLoading={isLoading}
        />
      </section>
    </AppLayout>
  );
};

export default LoginView;

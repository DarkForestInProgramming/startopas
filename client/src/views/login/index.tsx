import { useEffect } from "react";
import AppLayout from "../../layouts/main";
import LoginForm from "../../components/ui/form/logForm";
import { useLoginHandlers } from "../../services/handlers/logHandlers";
import Meta from "../../components/meta";

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
    <AppLayout>
      <Meta title="Prisijungimas" />
      <section className="md:py-16 py-4">
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

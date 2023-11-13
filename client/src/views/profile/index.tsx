import { useEffect } from "react";
import AppLayout from "../../layouts/main";
import { useProfileHandlers } from "../../services/handlers/profileHandlers";
import ProfileForm from "../../components/ui/form/profForm";
import ProfileTable from "../../components/ui/table/profTable";
import Meta from "../../components/meta";

const ProfileView = () => {
  const {
    userInfo,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loadingUpdateProfile,
    isLoading,
    orders,
    submitHandler,
  } = useProfileHandlers();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo.name, userInfo.email]);

  return (
    <AppLayout>
      <Meta title={`${userInfo.name} profilis`} />
      <div className="w-full py-8 md:py-16 flex items-center justify-center">
        <div className="max-w-10xl mx-auto lg:ml-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <ProfileForm
              submitHandler={submitHandler}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              loadingUpdateProfile={loadingUpdateProfile}
            />
            <ProfileTable orders={orders} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileView;

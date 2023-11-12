import { useEffect } from "react";
import AppLayout from "../../layouts/main";
import { useProfileHandlers } from "../../services/handlers/profileHandlers";
import ProfileForm from "../../components/form/profForm";
import ProfileTable from "../../components/table/profTable";

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
    <AppLayout header="Profilis">
      <div className="w-full py-8 md:py-16 flex items-center justify-center">
        <div className="max-w-10xl mx-auto lg:ml-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Form Block on the Left */}
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
            {/* Table with Orders on the Right */}
            <ProfileTable orders={orders} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileView;

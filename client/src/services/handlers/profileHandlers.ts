import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice";

export const useProfileHandlers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.auth);

  const { data: orders, isLoading } = useGetMyOrdersQuery({});

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Nesutampa slaptažodžiai.");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Vartotojo profilis sėkmingai atnaujintas.");
      } catch (err: any) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return {
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
  };
};

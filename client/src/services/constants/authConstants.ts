const initialUserInfo = localStorage.getItem("userInfo");

export const initialState = {
  userInfo: initialUserInfo ? JSON.parse(initialUserInfo) : null,
};

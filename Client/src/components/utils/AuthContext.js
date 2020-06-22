import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
	token: null,
	user: {
		email: null,
		userName: null,
		isManager: false,
		department: null,
	},
	loading: true,
	logIn: () => {},
	logOut: () => {},
});

export function useAuthData() {
	const { token, user, loading, logIn, logOut } = useContext(AuthContext);
	return { token, user, loading, logIn, logOut };
}

export default AuthContext;

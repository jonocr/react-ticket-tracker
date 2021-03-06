import { createContext, useContext } from "react";

export const AuthContext = createContext({
	token: null,
	user: {
		email: null,
		userName: null,
		isManager: false,
		department: null,
		msg: 0,
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

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

// const AuthProvider = ({ children }) => {
// 	const [auth, setAuth] = useState({
// 		token: null,
// 		user: {
// 			email: null,
// 			userName: null,
// 			isManager: false,
// 			department: null,
// 		},
// 		loading: true,
// 	});
// 	// we will use loading later

// 	const setAuthData = (data) => {
// 		setAuth({ data: data });
// 	};
// 	// a function that will help us to add the user data in the auth;

// 	return (
// 		<AuthContext.Provider value={{ auth, setAuthData }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export default AuthProvider;

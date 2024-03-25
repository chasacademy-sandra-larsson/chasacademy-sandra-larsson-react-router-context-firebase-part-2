import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const signIn = (mockUser) => {
        setUser(mockUser); // Simulate a user signing in with mock data
      };
      
      const signOut = () => {
        setUser(null); // Simulate a user signing out
      };


    useEffect(() => {
  
    
    // Här kommer vi kolla om användaren är inloggad eller inte
    const mockUser = { name: "John Doe", email: "john@example.com" };
    signIn(mockUser);

    }, []);


return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
)
}

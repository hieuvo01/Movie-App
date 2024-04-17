'use client'
import React, { createContext, useEffect, useState } from "react";
// const AuthContext = createContext(null);

export const AuthContext = createContext<any>(null);
  
  
// export const AuthProvider: FC<AuthProviderProps> = ({ c

 export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const token = localStorage.getItem("token") as any;
    if (token) {
      const tokenToUse = token.replace(/"/g, "");
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${tokenToUse}`,
          },
        });
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>    
  );
}

// export default AuthProvider;

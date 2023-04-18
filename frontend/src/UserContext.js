import { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
  refetchUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, _setUser] = useState(null);

  // Custom setUser function that also updates localStorage
  const setUser = (newUser) => {
    _setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Load user data from localStorage when the component is mounted
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const refetchUser = async () => {
    // Fetch the updated user data
    const response = await fetch(`http://localhost:9000/Users/${user._id}`);
    const data = await response.json();
    const updatedUser = data.data.user;

    // Update user state
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser, refetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

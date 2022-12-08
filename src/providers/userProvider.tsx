import React, { useState } from "react";
import UserContext from "../contexts/userContext";
import { State } from "../types";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<State['users']>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UserContext.Provider value={{ users, setUsers, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

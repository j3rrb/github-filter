import { useContext, createContext } from "react";
import { User } from "../types";

type UserContextProps = {
  users: User[];
  setUsers: (value: User[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const UserContext = createContext<UserContextProps>({
  users: [],
  setUsers: (value: User[]) => {},
  isLoading: false,
  setIsLoading: (value: boolean) => {},
});

export const useUsers = () => useContext(UserContext);

export default UserContext;

import { useEffect } from "react";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";
import SearchBar from "./components/SearchBar/SearchBar";
import { User } from "./types";
import { useUsers } from "./contexts/userContext";
import { getAllUsers, getUserByName } from "./services/users";

export default function App() {
  const { users, setUsers, isLoading, setIsLoading } = useUsers();

  const getUsers = async () => {
    setIsLoading(true);

    const users = (await getAllUsers()).map(
      ({ avatar_url, html_url: url, login: name }) => ({
        avatar_url,
        url,
        name,
      })
    );

    setIsLoading(false);

    setUsers(users);
  };

  useEffect(() => {
    (async () => await getUsers())();
  }, []);

  return (
    <main>
      <div>
        <h1>GitHub Filter</h1>
      </div>
      <div>
        <SearchBar
          onChange={async (text) => {
            if (text) {
              setIsLoading(true);

              const {
                avatar_url,
                html_url: url,
                login: name,
              } = await getUserByName(text);

              setIsLoading(false);

              setUsers([{ avatar_url, url, name }]);
            } else {
              await getUsers();
            }
          }}
          timeout={200}
        />
      </div>
      <div>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <List data={users} renderItem={(e: User) => <ListItem data={e} />} />
        )}
      </div>
    </main>
  );
}

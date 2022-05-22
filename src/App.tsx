import React from "react";
import { Provider } from "react-redux";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";
import SearchBar from "./components/SearchBar/SearchBar";
import { store } from "./redux/store";
import { User } from "./types";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>GitHub Filter</h1>
      </div>
      <div>
        <SearchBar
          onChange={(text) => {
            console.log(text);
          }}
        />
        <List
          data={[
            {
              avatar_url: "https://cameronmcefee.com/img/work/the-octocat/walk-1.gif",
              name: "test",
              url: "https://google.com",
            },
            {
              avatar_url: "https://cameronmcefee.com/img/work/the-octocat/walk-1.gif",
              name: "test",
              url: "https://google.com",
            },
          ]}
          renderItem={(e: User) => <ListItem data={e} />}
        />
      </div>
    </Provider>
  );
}

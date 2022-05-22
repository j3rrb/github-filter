import { User } from "../../types";
import List from "../List/List";

interface Props {
  data: User;
}

const ListItem: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.avatar_url} alt="Avatar URL" />
        <a target="_blank" rel="noreferrer" href={data.url}>
          {data.name}
        </a>
      </div>
      <div>{/* <List /> */}</div>
    </div>
  );
};

export default ListItem;

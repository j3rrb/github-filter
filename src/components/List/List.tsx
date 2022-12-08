import "./List.css";

interface Props<T> {
  data?: T[]; // List with a generic type
  renderItem: (item: T) => React.ReactNode; // Function that will render the generic element
}

const List = <T extends unknown>({ data, renderItem }: Props<T>) => {
  return (
    <ul style={{ maxHeight: 400, overflow: "auto" }}>
      {data && data.map((item: T) => renderItem(item))}
    </ul>
  );
};

export default List;

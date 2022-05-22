interface Props<T> {
  data?: T[]; // List with a generic type
  renderItem: (item: T) => React.ReactNode; // Function that will render the generic element
}

const List = <T extends unknown>({ data, renderItem }: Props<T>) => {
  return (
    <ul>{data && data.map((item: T) => renderItem(item))}</ul>
  );
};

export default List;

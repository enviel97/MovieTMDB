interface IListViews<T> {
  data: T[];
  createItem: ({ data: T }) => JSX.Element;
}

interface IListStyles {}

type IListProps<T = any> = IListViews<T> & IListStyles;

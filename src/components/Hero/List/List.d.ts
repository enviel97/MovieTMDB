interface IListViews<T> {
  className?: string;
  data: T[];
  createItem: ({ data: T }) => JSX.Element;
}

interface IListStyles {}

type IListProps<T = any> = IListViews<T> & IListStyles;

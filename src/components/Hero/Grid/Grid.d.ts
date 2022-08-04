interface IGridView {
  data: T[];
  createItem: ({ data: T }) => JSX.Element;
}

interface IGridStyles {}

type IGridProps = IGridView;

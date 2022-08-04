interface LoadingWraperView {
  className?: string;
  isLoading: boolean;
  loadingComponent?: JSX.Element;
}

type LoadingWraperProps = LoadingWraperView & IComponentChildren;

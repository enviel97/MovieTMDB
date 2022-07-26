interface IModalContentView {
  className?: string;
  onClose?: () => void;
}

type IModalContentProps = IModalContentView & IComponentChildren;

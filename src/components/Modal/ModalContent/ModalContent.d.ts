interface IModalContentStyle {
  onClose?: () => void;
}

type IModalContentProps = IModalContentStyle & IComponentChildren;

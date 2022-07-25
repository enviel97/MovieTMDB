interface IModalStyle {
  active: boolean;
}

interface IModalView {
  id: string;
}

type IModalProps = IModalView & IModalStyle & IComponentChildren;

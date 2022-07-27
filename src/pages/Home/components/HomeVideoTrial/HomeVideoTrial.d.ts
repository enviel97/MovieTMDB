interface IHomeVideoTrialViewProps {}
interface IHomeVideoTrialStylesProps {}

interface IHomeVideoTrialController {
  openModal: (src: string | undefined) => void;
}

type IHomeVideoTrialProps = IHomeVideoTrialViewProps &
  IHomeVideoTrialStylesProps;

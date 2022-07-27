interface IHomeVideoTrialViewProps {}
interface IHomeVideoTrialStylesProps {}

interface IHomeVideoTrialController {
  connectTrailer: (src: string | undefined) => void;
  loadingIs: (isLoading: boolean) => void;
  openModal: () => void;
}

type IHomeVideoTrialProps = IHomeVideoTrialViewProps &
  IHomeVideoTrialStylesProps;

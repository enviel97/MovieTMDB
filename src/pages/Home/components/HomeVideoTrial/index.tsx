import { Modal, ModalContent } from "@components/Modal";
import useWindowDimensions from "@/hooks/features/useDeviceViewPort";
import React, {
  forwardRef,
  useCallback,
  useRef,
  useState,
  useImperativeHandle,
  ForwardedRef,
} from "react";
import Spinner from "@components/Spinner";
import useBox from "@/hooks/styles/useBox";

const HomeVideoTrial = forwardRef(
  (_, ref: ForwardedRef<IHomeVideoTrialController>) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { height: h } = useWindowDimensions();
    const [src, setSrc] = useState<string | undefined>(undefined);
    const [active, setActive] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const box = useBox({ height: h / 2 });

    const _reset = () => {
      setSrc(undefined);
      setActive(false);
      setLoading(false);
    };

    const onClose = useCallback(() => {
      iframeRef.current?.setAttribute("src", "");
      _reset();
    }, [iframeRef]);

    useImperativeHandle(ref, () => ({
      loadingIs: (loading: boolean) => setLoading(loading),
      openModal: () => setActive(true),
      connectTrailer: (src?: string) => setSrc(src),
    }));

    return (
      <Modal id={"trial_video"} active={active}>
        <ModalContent onClose={onClose}>
          {loading ? (
            <Spinner.Default height={h / 2} />
          ) : !src ? (
            <h1 className={`${box.height} ${box.center}`}>Not trailer</h1>
          ) : (
            <iframe
              ref={iframeRef}
              title={"trial"}
              frameBorder='0'
              width='100%'
              src={src}
              height={h / 2}
            ></iframe>
          )}
        </ModalContent>
      </Modal>
    );
  }
);

export default HomeVideoTrial;

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

const HomeVideoTrial = forwardRef(
  (_, ref: ForwardedRef<IHomeVideoTrialController>) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { height } = useWindowDimensions();
    const [src, setSrc] = useState<string | undefined>(undefined);

    const onClose = useCallback(() => {
      iframeRef.current?.setAttribute("src", "");
      setSrc(undefined);
    }, [iframeRef]);

    useImperativeHandle(ref, () => ({
      openModal(src: string | undefined) {
        setSrc(src);
      },
    }));

    return (
      <Modal id={`trial_video`} active={!!src}>
        <ModalContent className={`trial_content`} onClose={onClose}>
          {!src ? (
            <h3>Not trailer</h3>
          ) : (
            <iframe
              ref={iframeRef}
              title={"trial"}
              frameBorder='0'
              width='100%'
              src={src}
              height={height / 2}
            ></iframe>
          )}
        </ModalContent>
      </Modal>
    );
  }
);

export default HomeVideoTrial;

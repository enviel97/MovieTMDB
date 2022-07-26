import { Modal, ModalContent } from "@components/Modal";
import useWindowDimensions from "@/hooks/features/useDeviceViewPort";
import React, { useRef } from "react";

const HomeVideoTrial = ({ idVideo }: IHomeVideoTrialProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { height } = useWindowDimensions();

  const onClose = () => iframeRef.current?.setAttribute("src", "");
  return (
    <Modal id={`trial_${idVideo}`} active={false}>
      <ModalContent className={`trial_content_${idVideo}`} onClose={onClose}>
        <iframe
          ref={iframeRef}
          title={"trial"}
          frameBorder='0'
          width='100%'
          height={height / 2}
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HomeVideoTrial;

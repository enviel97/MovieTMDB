import React from "react";
import usePageHeaderStyles from "./PageHeader.styles";
import bgHeader from "@assets/images/bgHeader.jpg";

const PageHeader = (props: IPageHeaderProps) => {
  const styles = usePageHeaderStyles({ src: bgHeader });

  return (
    <div className={`${styles.background} ${styles.pageHeader}`}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;

import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaProps {
  title?: string;
}

const SEO = (props: MetaProps) => {
  const title = !!props.title ? `${" | " + props.title}` : "";
  return (
    <Helmet>
      <title>Movie App{title}</title>
    </Helmet>
  );
};

export default SEO;

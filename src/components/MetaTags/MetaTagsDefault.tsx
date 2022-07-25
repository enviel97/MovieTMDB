import { Helmet } from "react-helmet-async";

const MetaTagsDefault = () => {
  return (
    <Helmet>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/statics/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/statics/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/statics/favicon-16x16.png'
      />
      <link rel='manifest' href='/statics/site.webmanifest' />
      <link rel='shortcut icon' href='/statics/favicon.ico' />
      <link
        rel='mask-icon'
        href='/statics/safari-pinned-tab.svg'
        color='#d62525'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='crossorigin'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
        rel='stylesheet'
      />
      <meta name='msapplication-config' content='/statics/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#ffffff' />
    </Helmet>
  );
};

export default MetaTagsDefault;

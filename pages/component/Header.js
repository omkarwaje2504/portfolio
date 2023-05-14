import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Welcome to my Portfolio</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="HTML, CSS, Javascript" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1" />
      <meta
        name="descriptive"
        content="Here you get the top level graphically represented analysis tool. get the market cap and market detail and market up's and down's on one single place. Trade using the analysis and be the hero of the crypto market."
      />
      <link rel="icon" href="/_images/logo.png" type="image/x-icon" />
    </Head>
  );
};

export default Header;

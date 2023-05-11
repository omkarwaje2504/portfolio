import Head from "next/head";
import Profile from "./component/Profile.jsx";
import Portfolio from "./component/Portfolio.jsx";
export default function Home() {
  return (
    <div className="font-Montserrat">
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
        <link rel="icon" href="/images/logo.png" type="image/x-icon" />
      </Head>
      <main className="bg-[#171717] h-screen p-8 ">
        <div className=" h-full w-full">
          <div className="flex flex-row space-x-6">
            <div className="w-2/4">
              <Profile />
            </div>
            <div className="w-full">
              <Portfolio />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

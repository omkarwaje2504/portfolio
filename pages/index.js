import Profile from "./component/Profile.js";
import Portfolio from "./component/Portfolio.js";
import Header from "./component/Header.js";
export default function Home() {
  return (
    <div className="font-Montserrat ">
      <Header />
      <main className="h-screen p-2 md:p-8 ">
        <div className=" h-full w-full">
          <div className="flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0">
            <div className="w-full md:w-2/4">
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

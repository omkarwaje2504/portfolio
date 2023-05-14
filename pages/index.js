import Profile from "./component/Profile.js";
import Portfolio from "./component/Portfolio.js";
import Header from "./component/Header.js";
export default function Home() {
  return (
    <div className="font-Montserrat">
      <Header />
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

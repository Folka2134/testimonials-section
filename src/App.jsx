import "./App.css";

import danielAvatar from "./assets/image-daniel.jpg";
import quotationBg from "./assets/bg-pattern-quotation.svg";

function App() {
  return (
    <div className="App bg-[#EDF2F8] xl:h-screen flex justify-center items-center">
      {/* GRID */}
      <div className="grid gap-4 grid-cols-1 grid-rows-none xl:grid-cols-4 xl:grid-rows-2 mt-20 xl:mt-0 mx-10">
        {/* CARD */}
        <div className="flex flex-col bg-purple-600 xl:col-span-2 p-8 rounded-xl relative max-w-xl">
          <img className="absolute right-20 z-0" src={quotationBg} alt="" />
          <div className="flex items-center z-10">
            <img
              className="h-10 w-10 border-2 border-white border-opacity-40 mr-5 rounded-full"
              src={danielAvatar}
              alt="avatar"
            />
            <div>
              <p className="text-sm font-semibold text-gray-200">
                Daniel Clifford
              </p>
              <p className="text-xs font-semibold text-gray-200 text-opacity-70">
                Verified Graduate
              </p>
            </div>
          </div>
          <h4 className="text-xl text-white font-semibold py-4 z-10">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h4>
          <p className="text-sm text-white text-opacity-70 font-semibold">
            “ I was an EMT for many years before I joined the bootcamp. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
        <div className="bg-green-400">2</div>
        <div className="bg-blue-400 xl:row-span-2">3</div>
        <div className="bg-red-400">4</div>
        <div className="bg-yellow-400 xl:col-span-2">5</div>
      </div>
    </div>
  );
}

export default App;

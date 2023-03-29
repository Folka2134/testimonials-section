import "./App.css";

import danielAvatar from "./assets/image-daniel.jpg";
import jonathanAvatar from "./assets/image-jonathan.jpg";
import kiraAvatar from "./assets/image-kira.jpg";
import jeanetteAvatar from "./assets/image-jeanette.jpg";
import patrickAvatar from "./assets/image-patrick.jpg";
import quotationBg from "./assets/bg-pattern-quotation.svg";

function App() {
  return (
    <div className="App bg-[#EDF2F8] xl:h-screen flex justify-center items-center">
      {/* GRID */}
      <div className="grid gap-4 grid-cols-1 grid-rows-none xl:grid-cols-4 xl:grid-rows-2 my-20 xl:my-0 mx-10">
        {/* CARD */}
        <div className="flex flex-col bg-purple-600 xl:col-span-2 p-8 rounded-xl relative ">
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
              <p className="text-xs font-semibold text-gray-200 text-opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>
          <h4 className="text-xl text-white font-semibold py-4 z-10">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h4>
          <p className="text-sm text-gray-200 text-opacity-70 font-semibold">
            “ I was an EMT for many years before I joined the bootcamp. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
        <div className="flex flex-col bg-[#48556A] p-8 rounded-xl relative">
          <div className="flex items-center z-10">
            <img
              className="h-10 w-10 border-2 border-white border-opacity-40 mr-5 rounded-full"
              src={jonathanAvatar}
              alt="avatar"
            />
            <div>
              <p className="text-sm font-semibold text-gray-200">
                Jonathan Walters
              </p>
              <p className="text-xs font-semibold text-gray-200 text-opacity-70">
                Verified Graduate
              </p>
            </div>
          </div>
          <h4 className="text-xl text-white font-semibold py-4 z-10">
            The team was very supportive and kept me motivated
          </h4>
          <p className="text-sm text-white text-opacity-70 font-semibold">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. ”
          </p>
        </div>
        <div className="flex flex-col bg-white p-8 rounded-xl relative xl:row-span-2 row-end-6">
          <div className="flex items-center z-10">
            <img
              className="h-10 w-10 border-2 border-white border-opacity-40 mr-5 rounded-full"
              src={kiraAvatar}
              alt="avatar"
            />
            <div>
              <p className="text-sm font-semibold text-gray-600">
                Kira Whittle
              </p>
              <p className="text-xs font-semibold text-gray-600 text-opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>
          <h4 className="text-xl text-gray-600 font-semibold py-4 z-10">
            Such a life-changing experience. Highly recommended!
          </h4>
          <p className="text-sm text-gray-600 text-opacity-70 font-semibold">
            “ Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
        <div className="flex flex-col bg-white p-8 rounded-xl relative">
          <div className="flex items-center z-10">
            <img
              className="h-10 w-10 border-2 border-white border-opacity-40 mr-5 rounded-full"
              src={jeanetteAvatar}
              alt="avatar"
            />
            <div>
              <p className="text-sm font-semibold text-gray-600">
                Jeanette Harmon
              </p>
              <p className="text-xs font-semibold text-gray-600 text-opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>
          <h4 className="text-xl text-gray-600 font-semibold py-4 z-10">
            An overall wonderful and rewarding experience
          </h4>
          <p className="text-sm text-gray-600 text-opacity-70 font-semibold">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
        <div className="flex flex-col bg-[#19212E] p-8 rounded-xl relative xl:col-span-2">
          <div className="flex items-center z-10">
            <img
              className="h-10 w-10 border-2 border-white border-opacity-40 mr-5 rounded-full"
              src={patrickAvatar}
              alt="avatar"
            />
            <div>
              <p className="text-sm font-semibold text-gray-200">
                Patrick Abrams
              </p>
              <p className="text-xs font-semibold text-gray-200 text-opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>
          <h4 className="text-xl text-gray-200 font-semibold py-4 z-10">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h4>
          <p className="text-sm text-gray-200 text-opacity-70 font-semibold">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

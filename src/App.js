import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { IoCodeOutline } from 'react-icons/io5';

function App() {
  let classButton = "text-white font-normal hover:text-gray-500";
  const [popUp, setPopUp] = React.useState(false)
  const handlePopUp = () => {
    setPopUp(!popUp)
  }
  return (
    <React.Fragment>
      <div className="w-full h-[100vh] bg-gray-500">
        {/*  HEADER  */}
        <div className=" bg-[#161b22] h-[8%] w-full lg:hidden flex items-center justify-between px-5 relative z-50">
          <button className="h-10 w-10 bg-slate-700 rounded-full" onClick={handlePopUp}></button>
          <button className="h-10 w-10 bg-slate-700 rounded-full"></button>
          <button className="h-10 w-10 bg-slate-700 rounded-full"></button>
        </div>
        {/*  HEADER  */}
        <div className=" bg-[#161b22] h-[8%] w-full hidden lg:grid grid-cols-5 items-center px-5">
          <section className="flex items-center">
            <span className="text-white h-10 w-14 rounded-full"><AiFillGithub className="h-full w-full" /></span>
            <input className="h-5 w-full border rounded-md px-2 py-3 ml-3" placeholder="Search or Jump to ..." />
          </section>
          <section className="col-span-3 h-full flex items-center ml-10 space-x-5">
            <button className={classButton}>Pull Request</button>
            <button className={classButton}>Issue</button>
            <button className={classButton}>Marketplace</button>
            <button className={classButton}>Explore</button>
          </section>
          <section className="flex items-center h-full w-full space-x-2 justify-end">
            <span className="h-8 w-8 bg-slate-700 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-700 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-700 rounded-full"></span>
          </section>
        </div>
        {/*  MOBILE VERSION  */}
        <div className="bg-sky-500 h-full w-full sm:block lg:flex items-center relative">
          {/* {popUp && (
          <section className="bg-gray-700 w-full h-3/4 top-0 lg:hidden block absolute z-10"></section>
        )} */}
          <section className={`${popUp ? 'transform translate-y-0 transition duration-300' : 'transform -translate-y-full transition duration-150'} bg-gray-700 w-full h-3/4 top-0 lg:hidden absolute z-10 flex items-center`}>
            <h5 className="font-bold text-black text-xl -rotate-90 whitespace-nowrap">waku waku</h5>
          </section>
          <div className="h-full sm:w-full lg:w-[20%] bg-gray-800 p-5">
            <section className="flex items-center space-x-2 border-b-2 pb-5 border-gray-500">
              <div className="h-7 w-7 rounded-full bg-white"></div>
              <button className="text-white">GeorgeIsFounded</button>
            </section>
            <section className="space-y-4 border-b-2 border-gray-500">
              <div className="flex justify-between items-center">
                <p className="text-white">Recent Repositories</p>
                <button className=" flex bg-green-700 px-3 h-8 font-semibold rounded-md mt-2 cursor-pointer items-center text-white hover:bg-green-500"><RiGitRepositoryLine className="h-5 w-5 text-white mr-1" />New</button>
              </div>
              <div>
                <input className="border px-2 w-full rounded-md h-7" placeholder="Find a Repository" />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
                  return (
                    <div key={item} className="flex pb-3 space-x-2 items-center">
                      <div className="h-6 w-6 rounded-full bg-white"></div>
                      <p className="text-white">GeorgeIsFounded Repositories</p>
                    </div>
                  )
                })}
              </div>
            </section>
            <section className="mt-3">
              <h1 className="text-white">Recent activity</h1>
              <p className="text-gray-500 font-light">When you take actions across GitHub, we'll provide links to that activity here.</p>
            </section>
            <section>

            </section>
          </div>
          <div className="h-full w-full lg:w-[80%] bg-gray-700 p-9">
            <div className="w-[850px]">
              <h1 className="text-white text-4xl">The home for all developers — including you.</h1>
              <p className="text-gray-400 font-light mt-3">Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code.</p>
              <div className="flex pb-2 mt-11 justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-9 w-9 rounded-full bg-gray-300 flex justify-center text-gray-500"><IoCodeOutline className="w-5 h-9" /></div>
                  <p className="text-gray-400">Start writing code</p>
                </div>
                <div>
                  <div className="rounded-lg"><BsThreeDots className="text-white h-11 w-9 hover:text-black" /></div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="bg-gray-700 border border-solid h-[400px] w-[405px] rounded-md p-5">
                  <p className="text-white text-lg">Start a new repository </p>
                  <p className="text-gray-400 font-light mt-2">A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                  <p className="text-white text-md font-light mt-6">GeorgeIsFounded / <input className="h-5 border rounded-md p-2 py-3 ml-3 text-black" placeholder="name your new repository" /></p>
                  <div className="flex items-center mt-5 h-10 space-x-2">
                    <input type={"checkbox"} />
                    <RiGitRepositoryLine className="h-10 w-11 ml-2 text-gray-500" />
                    <div>
                      <p className="text-white">Public</p>
                      <p className="text-gray-400 text-sm font-light">Anyone on the internet can see this repository</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-6 h-10 space-x-2">
                    <input type={"checkbox"} />
                    <RiGitRepositoryPrivateLine className="h-10 w-12 ml-2 text-gray-500" />
                    <div>
                      <p className="text-white">Private</p>
                      <p className="text-gray-400 text-sm font-light">You choose who can see and commit to this repository</p>
                    </div>
                  </div>
                  <button className="bg-green-700 px-4 h-8 font-semibold rounded-md mt-9 cursor-pointer text-white hover:bg-green-600">Create a new repository</button>
                </div>
                <div className="bg-gray-700 border border-solid h-[400px] w-[405px] rounded-md p-5">
                  <p className="text-white text-lg">Introduce yourself with a profile README</p>
                  <p className="text-gray-400 font-light mt-2">Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>
                  <div className="bg-gray-800 h-14 w-full mt-4 border rounded-t-md items-center flex px-4 text-white font-mono text-sm justify-between">
                    <div className="flex"><p>GeorgeIsFounded / README</p><p className="text-gray-400">.md</p></div>
                    <button className="bg-green-700 px-3 h-7 font-semibold rounded-md cursor-pointer text-white hover:bg-green-600">Create</button>
                  </div>
                  <div className="bg-gray-600 h-40 w-full border rounded-b-md items-center flex px-4 text-white font-mono text-sm">
                    <div>
                      {[1, 2, 3, 4, 5]?.map((item) => {
                        return (
                          <div key={item.lenght} className="flex pb-1 space-x-2 items-center">
                            <p>{item} Hi I'm GeorgeIsFounded</p>
                          </div>
                        )
                      })}
                      6
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pb-2 mt-11 justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-9 w-9 rounded-full bg-gray-300 flex justify-center text-gray-500"><IoCodeOutline className="w-5 h-9" /></div>
                  <p className="text-gray-400">Use tools for trade</p>
                </div>
                <div>
                  <div className="rounded-lg"><BsThreeDots className="text-white h-11 w-9 hover:text-black" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* M V */}
      </div>
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;
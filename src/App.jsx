import VoiceInput from "./Components/VoiceInput";



function App() {
  return (
    <div className=" h-screen  flex items-center  justify-around flex-col bg-slate-900 ">
      <div className="h-1/2 w-1/3 md:w-2/3 sm:w-[90%] sm:h-2/3 sm:m-1" id="Sounddiv">
      <VoiceInput/>
      </div>

      <div className=" w-full ">
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 sm:p-1">
          <div className="mx-auto max-w-screen-xl text-center">
          <a href="#Sounddiv" className="text-white text-3xl sm:text-xl">
            Sound Solver
          </a>
            <p className="my-3 text-gray-500 dark:text-gray-400 capitalize sm:my-1">
              takes your voice as input and performs calculations for you
              instantly.
            </p>
            <ul className="flex flex-wrap justify-center items-center mb-4 text-gray-900 dark:text-white">
              <li>
                <a
                  href="https://github.com/Utkarshalways/SoundSolver/blob/main/README.md"
                  className="mr-4 hover:underline md:mr-6 "
                >About
                </a>
              </li>
              <li>
                <a
                  href="mailto:unknownbrry@gmail.com"
                  className="mr-4 hover:underline md:mr-6"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="mailto:unknownbrry@gmail.com"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Contact
                </a>
              </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2021-2022{" "}
              <a
                href="https://github.com/utkarshalways/SoundSolver"
                className="hover:underline"
              >
                Sound-Solver™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

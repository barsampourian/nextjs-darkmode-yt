import useDarkMode from "/useDarkMode";
import {MoonIcon, SunIcon} from '@heroicons/react/outline'

export default function Home() {

  const [colorTheme, setTheme] = useDarkMode();


  return (
    <div className="h-screen bg-white dark:bg-gray-900 grid place-items-center  items-center">
      <h1 className="text-7xl text-gray-900 dark:text-gray-200 font-semibold text-center">Dark Mode</h1>
      <p className="text-4xl text-gray-900 dark:text-gray-200 font-semibold text-center">NextJS & Tailwind CSS</p>


      <div className="cursor-pointer rounded-full bg-gray-200 p-5">
                        {colorTheme === "light" ? (
                            <SunIcon onClick={() => setTheme("light")}

                                className="h-12 text-yellow-500 text-gray-500"

                            />
                        ) : (
                            <MoonIcon onClick={() => setTheme("dark")}

                                className="h-12 text-gray-500 "

                            />
                        )}
                    </div>
    </div>
  )
}

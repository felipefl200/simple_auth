"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      router.push("/");
    } else {
      let e = await response.json();
      setError(e.message);
    }
  };
  return (
    <section className="h-screen bg-gray-900">
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <div className="w-full max-w-xl text-gray-400 mb-12 sm:mb-0 px-2 sm:px-0">
            <div className="px-2 flex flex-col items-center justify-center">
              <svg
                className="w-32 h-32"
                id="logo"
                enableBackground="new 0 0 300 300"
                height={44}
                viewBox="0 0 300 300"
                width={43}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    fill="#4c51bf"
                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                  />
                </g>
              </svg>
            </div>
            <div className="pt-8 px-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl sm:text-4xl font-bold leading-tight">
                Login To Your Account
              </h3>
              <h6 className="text-xs pt-2">Username: dog Password: dog</h6>
            </div>
            <div className="mt-12 w-full px-2 sm:px-6">
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="username"
                  className="text-lg font-semibold leading-tight"
                >
                  Username
                </label>
                <input
                  required
                  id="username"
                  name="username"
                  className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                  type="text"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold fleading-tight"
                >
                  Password
                </label>
                <input
                  required
                  id="password"
                  name="password"
                  className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 focus:border-indigo-700 border-gray-300 border shadow"
                  type="password"
                />
                {error && (
                  <span className="italic text-red-600 text-center pt-2">
                    {error}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-8"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

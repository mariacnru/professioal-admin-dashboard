import React from "react";

function NotFoundPage() {
  return (
    <>
      <main className="grid h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-400">404</p>
          <h1 className="font-MorabbaMedium mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            صفحه مورد نظر پیدا نشد
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="font-DanaDemiBold rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              خانه
            </a>
            <a
              href="#"
              className="font-DanaDemiBold text-sm font-semibold text-white"
            >
              ارتباط با پشتیبانی <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;

function Home() {
  return (
    <div className="bg-secondary3">
      <div className="container mx-auto h-screen ">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full">
          <div className="mx-auto flex justify-center flex-col">
            <img
              src="/assets/home.svg"
              className="w-9/12 sm:w-6/12 lg:9/12 mx-auto"
            ></img>
            <div className="flex lg:hidden justify-center mt-6">
              <a href="/create">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-primary3 to-primary4 font-medium rounded-lg text-md px-10 py-2.5 text-center"
                >
                  🎉 Create my event
                </button>
              </a>
            </div>
          </div>
          <div className="mx-auto">
            <div className="leading-loose text-center lg:text-right text-3xl lg:text-5xl font-semibold tracking-wide">
              <h1 className="">Imagine if</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary3 to-primary4 ">
                Snapchat
              </span>
              <h1 className="">had events</h1>
            </div>
            <p className="text-net1 font-light lg:w-9/12 ml-auto tracking-wide mt-4 text-center lg:text-right">
              Easily host and share events with your friends across any social
              media
            </p>
            <div className="hidden lg:flex justify-end mt-6">
              <a href="/create">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-primary3 to-primary4 font-medium rounded-lg text-md px-10 py-2.5 text-center"
                >
                  🎉 Create my event
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

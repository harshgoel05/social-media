function Home() {
  return (
    <div className="bg-secondary3">
      <div className="container mx-auto h-screen ">
        <div className="flex justify-center items-center h-full">
          <div className="mx-auto">
            <img src="/assets/home.svg" className="w-9/12"></img>
          </div>
          <div className="mx-auto">
            <div className="leading-loose text-right text-5xl font-semibold tracking-wide">
              <h1 className="text-right">Imagine if</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary3 to-primary4 text-right">
                Snapchat
              </span>
              <h1 className="text-right">had events</h1>
            </div>
            <p className="text-net1 font-light w-9/12 text-right ml-auto tracking-wide mt-4">
              Easily host and share events with your friends across any social
              media
            </p>
            <div className="flex justify-end mt-6">
              <a href="/create">
                <button
                  type="button"
                  className="
          text-white bg-gradient-to-br from-primary3 to-primary4 font-medium rounded-lg text-md px-10 py-2.5 text-center"
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

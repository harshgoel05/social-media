import { ImCalendar, ImLocation } from "react-icons/im";
function Event() {
  return (
    <div className="bg-light">
      <div className="container mx-auto h-screen ">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full">
          <div className="mx-auto">
            <h1 className="text-5xl text-primary1 font-bold">Birthday Bash</h1>
            <p className="text-net2 text-md">
              Hosted by <span className="text-bold">Elysia</span>
            </p>
            <div className="flex flex-col mt-4 gap-4">
              <div className="flex">
                <div className="bg-white p-4 shadow-sm rounded-md">
                  <ImCalendar className="text-primary2"></ImCalendar>
                </div>
                <div className="leading-tight text-sm font-medium flex flex-col my-auto mx-4">
                  <p className="text-primary1">18 August 6:00PM</p>
                  <p className="text-net2">
                    to <span className="font-semibold">19 August 1:00PM</span>{" "}
                    UTC +10
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-white p-4 shadow-sm rounded-md">
                  <ImLocation className="text-primary2"></ImLocation>
                </div>
                <div className="leading-tight text-sm font-medium flex flex-col my-auto mx-4">
                  <p className="text-primary1">Street name</p>
                  <p className="text-net2">Suburb, State, Postcode</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <img src="/assets/event.svg" className="w-9/12" alt="Event" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

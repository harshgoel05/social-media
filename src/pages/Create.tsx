import e from "express";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    eventName: "",
    street: "",
    city: "",
    state: "",
    post: "",
  });
  const [isInvalid, setIsInvalid] = useState(
    Object.values(formData).findIndex((el) => el == "") != -1
  );
  let navigate = useNavigate();

  const printValues = (e: any) => {
    e.preventDefault();
    console.log(formData); // prints for data
    navigate("/event");
  };

  const setValue = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    setIsInvalid(Object.values(formData).findIndex((el) => el == "") != -1);
  };
  return (
    <div className="bg-light">
      <div className="container mx-auto h-screen">
        <div className="flex justify-center items-center h-full">
          <form
            className="w-full max-w-lg bg-white p-10 rounded-lg shadow-lg mx-auto"
            onSubmit={(e) => printValues(e)}
          >
            <h1 className="text-primary1 text-2xl font-semibold">
              Create new event
            </h1>
            <div className="my-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-net5 text-gray-700 border border-alert-red-20 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setValue("firstName", e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-net5 text-gray-700 border border-net5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setValue("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="eventName"
                  >
                    Event Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-net5 text-gray-700 border border-net5 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="eventName"
                    type="text"
                    placeholder="Birthday Bash"
                    value={formData.eventName}
                    onChange={(e) => setValue("eventName", e.target.value)}
                  />
                  <p className="text-gray-600 text-xs italic">
                    Name it something crazyyyy! 🥳
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="street"
                  >
                    Street
                  </label>
                  <input
                    className="appearance-none block w-full bg-net5 text-gray-700 border border-net5 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="street"
                    type="text"
                    placeholder="Street 101 Cross"
                    value={formData.street}
                    onChange={(e) => setValue("street", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-net5 text-gray-700 border border-net5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="city"
                    type="text"
                    placeholder="Sydney"
                    value={formData.city}
                    onChange={(e) => setValue("city", e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-net5 border border-net5 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="state"
                      onChange={(e) => setValue("state", e.target.value)}
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="post"
                  >
                    Postal Code
                  </label>
                  <input
                    className="appearance-none block w-full bg-net5 text-gray-700 border border-net5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="post"
                    type="text"
                    placeholder="826001"
                    value={formData.post}
                    onChange={(e) => setValue("post", e.target.value)}
                  />
                </div>
              </div>
            </div>
            {isInvalid && (
              <p className="text-alert-red-2 text-xs italic">
                Please fill out all the fields!
              </p>
            )}
            <button
              type="submit"
              disabled={isInvalid}
              className="mt-3 text-white bg-gradient-to-br from-primary3 to-primary4 font-medium rounded-lg text-md px-10 py-2.5 text-center"
            >
              🎪 Submit Event
            </button>
            <p className="text-gray-600 text-xs italic mt-4">
              (PS: We print data in console on submitting) 🥳
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;

import React from "react";
import { TeamsCard } from "../components/Teams/teamsCard";
import { LwsFloating } from "./../components/lwsFloating";
import { Navbar } from "./../components/navbar";

function Teams() {
  return (
    <React.Fragment>
      <Navbar>
        <div className="px-10 mt-6 flex justify-between">
          <h1 className="text-2xl font-bold">Teams</h1>
          <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto">
          <TeamsCard />
          <TeamsCard />
          <TeamsCard />
          <TeamsCard />
        </div>
      </Navbar>
      <LwsFloating />
    </React.Fragment>
  );
}

export default Teams;

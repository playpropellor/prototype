import { Slips } from "./Slips";

import data from "../data.json";

const teams = data.teams;
const classes = ["text-blue-300", "text-yellow-300"];

const teamMemberListItems = teams[0].members.map((member) => (
  <li key={member.id}>{member.name}</li>
));

export function Teams() {
  return (
    <section className="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
      <div className="p-2 border-b border-white">
        <h2>My Teams ({teams.length})</h2>
      </div>
      <div className="p-2 mb-2">
        <h3 className="my-2">{teams[0].name}</h3>
        <ul>{teamMemberListItems}</ul>
      </div>
      <div className="flex justify-end pb-2 border-b border-transparentWhite-500">
        <button className="uppercase">
          Create Ticket <span className="text-blue-400">+</span>
        </button>
      </div>
      <Slips teamSlips={teams[0].tickets} />
    </section>
  );
}

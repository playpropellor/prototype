import * as React from "react";
import { Link, Outlet } from "@remix-run/react";

import { Teams } from "~/components/Teams";
import { Sidebar } from "~/components/Sidebar";
import { Ticket } from "../components/Ticket";

import { activeTicketContext } from "~/components/TicketContext";

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Play Propellor | Demo" }];
};

export default function Index() {
  const activeTicket = React.useContext(activeTicketContext);

  return (
    <div>
      <header>
        <Link to="/">
          <h1 className="text-blue-400">Propellor</h1>
        </Link>
      </header>
      <main className="flex gap-4">
        <Sidebar />
        <Teams />
        {activeTicket && <Ticket activeTicket={activeTicket} />}
      </main>
    </div>
  );
}

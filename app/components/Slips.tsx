import { Slip } from "./Slip";

type TicketPick = {
  id: Number;
  userId: Number;
  propType: String;
  game: String;
  propNumber: Number;
  over: Boolean;
  amount: String;
};

type Ticket = {
  id: String;
  name: String;
  wager: String;
  payout: String;
  picks: TicketPick[];
};

const slipsListItems = (slips) => {
  return slips.map((slip) => <Slip key={slip.id} slip={slip} />);
};

export function Slips({ teamSlips }) {
  return (
    <div className="p-2">
      {/* {teamSlips.map((tSlip: any, index: any) => {
        <div key={index}>{JSON.stringify(tSlip)}</div>;
      })} */}
      {slipsListItems(teamSlips)}
    </div>
  );
}

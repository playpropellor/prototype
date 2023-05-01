export function Slip({ slip }) {
  return (
    <div className="p-2 cursor-pointer border-sm hover:bg-transparentWhite-900">
      <h3 className="text-lg">{slip.name}</h3>
      <p className="text-sm text-transparentWhite-500">
        Team wager <span className="text-green-500">{slip.wager}</span>
      </p>
      <p className="text-sm text-transparentWhite-500">
        Team payout <span className="text-green-500">{slip.payout}</span>
      </p>
    </div>
  );
}

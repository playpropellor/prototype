import data from "../data.json";

const sportsData = data.sports;

export function Sidebar() {
  return (
    <section className="w-1/4 p-2 border rounded-sm border-transparentWhite-500">
      <div className="p-2 border-b border-white">
        <h2>Sports</h2>
      </div>
      <p className="p-2 text-blue-400 border-b border-blue-400">Home</p>
      <ul>
        {sportsData.map((sport: string, index: any) => (
          <li
            className="border-b border-transparent cursor-pointer hover:border-blue-400"
            key={index}
          >
            <p className="p-2 hover:text-blue-400">{sport}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

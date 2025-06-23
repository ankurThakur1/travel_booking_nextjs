export default function Filters() {
  return (
    <div className="bg-white p-4 rounded shadow h-fit">
      <h3 className="font-semibold mb-2">Filters</h3>
      <div className="mb-4">
        <label className="block text-sm mb-1">Stops</label>
        <select className="w-full border rounded p-2">
          <option>Any</option>
          <option>Non-stop</option>
          <option>1 Stop</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Airline</label>
        <select className="w-full border rounded p-2">
          <option>All</option>
          <option>Delta</option>
          <option>United</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-1">Max Price</label>
        <input type="range" min="100" max="1000" className="w-full" />
      </div>
    </div>
  );
}

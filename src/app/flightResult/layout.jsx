import Filters from "@/components/Filters";


export default function FlightResultLayout({ children }) {
  return (
    <div className="w-full h-full  ">
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen  px-4 py-28 gap-4   lg:container mx-auto">
        <aside className="md:col-span-1 shadow p-1 ">
            <Filters />
        </aside>
        <main className="md:col-span-3 space-y-4">
            {children}
        </main>
      </div>
    </div>
  );
}

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
{/* se cambia por la liena de abajo para usar query por SQL import { fetchRevenue } from '@/app/lib/data'; */}
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data'; {/*se agregan consultas por SQL */}
 
export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices(); // Se agrega esta línea para traer las primeras 5 facturas usando SQL query
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        { <RevenueChart revenue={revenue}  /> }
        { <LatestInvoices latestInvoices={latestInvoices}/> }  {/*esraba comentado hasta que se importo fetchLatestInvoices */}
      </div>
    </main>
  );
}
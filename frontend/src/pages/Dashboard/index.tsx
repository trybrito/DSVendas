import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

export default function Dashboard() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div>
          <h2 className="py-3 text-primary">Todas vendas</h2>
          <DataTable />
        </div>
      </main>

      <Footer />
    </>
  );
}

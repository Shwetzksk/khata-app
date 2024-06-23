import AddCustomerDialog from "@/components/add-customer-dialog";
import Table from "@/components/customer-table";
import EditCustomerDialog from "@/components/edit-customer-dialog";
import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const columns = useMemo(() => {
    return [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "count",
        header: "Purchased count",
      },
      {
        accessorKey: "total",
        header: "Total Amount",
      },
      {
        accessorKey: "action",
        header: "Actions",
        cell: ({ row }) => (
          <EditCustomerDialog
            data={row.original}
            onClick={(edittedData) => {
              const index = edittedData.index;
              const dataArr = [...data];
              dataArr[index] = edittedData;
              setData(dataArr);
            }}
          />
        ),
      },
    ];
  }, [data]);
  function handleAddData(data) {
    const { name, items } = data;
    const totalAmount = items.reduce((acc, cur) => acc + +cur.amount, 0);

    setData((state) => [
      ...state,
      {
        count: items.length,
        total: totalAmount,
        index: state.length,
        items,
        name,
      },
    ]);
  }
  return (
    <section className="w-screen">
      <nav className="w-full shadow bg-white flex justify-center py-1.5 px-3">
        <div className="flex w-full items-center justify-between max-w-5xl">
          <h3>Khata</h3>
          <AddCustomerDialog onClick={handleAddData} />
        </div>
      </nav>
      <main className="max-w-6xl p-2">
        <Table columns={columns} data={data} />
      </main>
    </section>
  );
}

export default App;

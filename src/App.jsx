import AddCustomerDialog from "@/components/add-customer-dialog";
import Table from "@/components/customer-table";
import EditCustomerDialog from "@/components/edit-customer-dialog";
import { useMemo, useState } from "react";
import "./App.css";
import CustomerDetail from "@/components/customer-detail";
import DeleteCustomer from "@/components/delete-customer";

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
          <div>
            <EditCustomerDialog
              data={row.original}
              onClick={(edittedData) => {
                const index = edittedData.index;
                const dataArr = [...data];
                dataArr[index] = edittedData;
                setData(dataArr);
              }}
            />
            <CustomerDetail data={row.original} />
            <DeleteCustomer
              onClick={() => {
                const filteredData = data.filter(
                  (_, i) => i !== row.original.index
                );
                setData(filteredData);
              }}
            />
          </div>
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
    <section className="w-screen flex flex-col items-center">
      <nav className="w-full shadow bg-white flex justify-center py-1.5 px-3">
        <div className="flex w-full items-center justify-between max-w-5xl">
          <h3>Khata</h3>
          <AddCustomerDialog onClick={handleAddData} />
        </div>
      </nav>
      <main className="max-w-5xl py-2 w-11/12">
        <Table columns={columns} data={data} />
      </main>
    </section>
  );
}

export default App;

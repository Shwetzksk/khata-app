import AddCustomerDialog from "@/components/add-customer-dialog";
import CustomerDetail from "@/components/customer-detail";
import Table from "@/components/customer-table";
import DeleteCustomer from "@/components/delete-customer";
import EditCustomerDialog from "@/components/edit-customer-dialog";
import { useMemo } from "react";
import "./App.css";
import useStore from "./store.js";

function App() {
  const data = useStore((state) => state.data);
  const onUpdate = useStore((state) => state.update);
  const onAdd = useStore((state) => state.add);
  const onDelete = useStore((state) => state.delete);
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
              onClick={(edittedData) => onUpdate(edittedData)}
            />
            <CustomerDetail data={row.original} />
            <DeleteCustomer onClick={() => onDelete(row.original.index)} />
          </div>
        ),
      },
    ];
  }, [data]);

  return (
    <section className="w-screen flex flex-col items-center">
      <nav className="w-full shadow bg-white flex justify-center py-1.5 px-3">
        <div className="flex w-full items-center justify-between max-w-5xl">
          <h3>Khata</h3>
          <AddCustomerDialog
            onClick={(data) => {
              console.log("data add", data);
              onAdd(data);
            }}
          />
        </div>
      </nav>
      <main className="max-w-5xl py-2 w-11/12">
        <Table columns={columns} data={data} />
      </main>
    </section>
  );
}

export default App;

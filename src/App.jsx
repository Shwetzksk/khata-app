import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { Table, column } from "@/components/customer-table";

function App() {
  return (
    <section className="w-screen">
      <nav className="w-full shadow bg-white flex justify-center py-1.5 px-3">
        <div className="flex w-full items-center justify-between max-w-5xl">
          <h3>Khata</h3>
          <Button size="sm">Add</Button>
        </div>
      </nav>
      <main className="max-w-6xl p-2">
        <Table columns={column} data={[]} />
      </main>
    </section>
  );
}

export default App;

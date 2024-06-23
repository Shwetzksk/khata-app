import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

function CustomerForm({ name, items, onChange }) {
  return (
    <div>
      <Input
        label="Customer Name"
        onChange={(e) => onChange("name", e.target.value)}
        value={name}
      />
      <section className="mt-4">
        <h3 className="text-bg font-semibold">Purchases</h3>
        <div className="flex justify-evenly items-end gap-2 mt-3">
          <AddItemForm
            onClick={(data) => onChange("items", [...items, data])}
          />
        </div>

        {items.length ? (
          <div className=" my-3 ">
            <ul className="border border-gray-200 rounded-md  max-h-44 hover:overflow-y-auto overflow-hidden">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-12 p-2 border-b border-gray-200"
                >
                  <p className="col-span-7">{item.item}</p>{" "}
                  <p className="col-span-4">₹ {item.amount}</p>
                  <Button
                    size="xs"
                    variant="outline"
                    className="col-span-1"
                    onClick={() =>
                      onChange(
                        "items",
                        items.filter((_, i) => index !== i)
                      )
                    }
                  >
                    <Cross2Icon />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end items-center gap-2 border-t border-gray-200 mt-2">
              <p className="font-semibold text-lg">Total</p>{" "}
              <p className="">
                ₹ {items.reduce((acc, curr) => acc + +curr.amount, 0)}
              </p>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default CustomerForm;

function AddItemForm({ onClick }) {
  const [val, setVal] = useState({ item: "", amount: "" });

  function handleInput(e) {
    const { name, value } = e.target;
    setVal((state) => ({ ...state, [name]: value }));
  }

  return (
    <>
      <Input
        label="Item"
        onChange={handleInput}
        name="item"
        value={val.item}
        placeholder="Enter name"
      />
      <Input
        label="Amount"
        type="number"
        onChange={handleInput}
        name="amount"
        value={val.amount}
        placeholder="Enter amount"
      />
      <Button
        onClick={() => {
          onClick(val);
          setVal({ item: "", amount: "" });
        }}
        disabled={!val.item || !val.amount}
      >
        Add
      </Button>
    </>
  );
}

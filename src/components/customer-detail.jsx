import React from "react";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

function CustomerDetail({ data }) {
  console.log("drawer data", data);
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="text" size="sm">
          Details
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{data.name}</DrawerTitle>
        </DrawerHeader>

        <div className=" py-2 px-4">
          <section className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-bg font-semibold">Purchases</h3>
              <p>Count: {data.count}</p>
            </div>

            {data.items.length ? (
              <div className=" my-3 overflow-y-auto">
                <ul className="border border-gray-200 rounded-md  ">
                  {data.items.map((item, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-12 p-2 border-b border-gray-200"
                    >
                      <p className="col-span-9">{item.item}</p>{" "}
                      <p className="col-span-3">₹ {item.amount}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end items-center gap-2 border-t border-gray-200 mt-2">
                  <p className="font-semibold text-lg">Total</p>{" "}
                  <p className="">₹ {data.total}</p>
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default CustomerDetail;

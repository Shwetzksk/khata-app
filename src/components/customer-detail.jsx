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
          <DrawerTitle>Customer Detail</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CustomerDetail;

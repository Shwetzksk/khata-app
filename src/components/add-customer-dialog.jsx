import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import CustomerForm from "./customer-form";

function AddCustomerForm({ onClick }) {
  const [formData, setFormData] = useState({ name: "", items: [] });

  function handleInput(name, value) {
    setFormData((state) => ({ ...state, [name]: value }));
  }

  function handleClose() {
    setFormData({ name: "", items: [] });
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Customer</Button>
      </DialogTrigger>
      <DialogContent onClose={handleClose}>
        <DialogHeader>
          <DialogTitle>Add Customer</DialogTitle>
        </DialogHeader>
        <CustomerForm {...formData} onChange={handleInput} />
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                onClick(formData);
                handleClose();
              }}
              disabled={!formData.name || !formData.items.length}
            >
              Add Customer
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddCustomerForm;

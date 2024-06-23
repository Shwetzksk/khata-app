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
import { useEffect } from "react";

function EditCustomerDialog({ onClick, data }) {
  const [formData, setFormData] = useState({ name: "", items: [] });

  function handleInput(name, value) {
    setFormData((state) => ({ ...state, [name]: value }));
  }

  function handleClose() {
    setFormData({ name: "", items: [] });
  }

  function handleChange() {
    const index = data.index;
    const total = formData.items.reduce((acc, cur) => acc + +cur.amount, 0);
    onClick({
      index,
      count: formData.items.length,
      total,
      ...formData,
    });
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setFormData({ name: data.name, items: data.items })}
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent onClose={handleClose}>
        <DialogHeader>
          <DialogTitle>Edit Customer</DialogTitle>
        </DialogHeader>
        <CustomerForm {...formData} onChange={handleInput} />
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                handleChange();
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCustomerDialog;

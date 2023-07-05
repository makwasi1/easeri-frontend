import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(true);
  
  return (
    <Fragment>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert open={open} onClose={() => setOpen(false)}>
        A dismissible alert for showing message.
      </Alert>
    </Fragment>
  );
}
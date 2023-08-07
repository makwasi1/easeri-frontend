import React from "react";
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
} from "@material-tailwind/react";

export default function ConfirmDialog({openLink, url }) {
   const handleOpen = () => setOpen(!openLink);
    return (
        <Dialog open={openLink} handler={handleOpen}>
            <DialogHeader>Payment Information</DialogHeader>
            <DialogBody divider>
                Thank you for your interest in our services. Please confirm your payment information below.
                Click the confirm button to complete your purchase. + {url}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="green"
                   
                    className="mr-1"
                >
                    <span>confirm</span>
                </Button>
                <Button variant="gradient" color="red">
                    <span>cancel</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}
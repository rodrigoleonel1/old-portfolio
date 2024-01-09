"use client";

import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function IconClipboard({ icon: Icon, text, ...props }) {
  return (
    <div
      className=""
      {...props}
    >
      <Mail
        onClick={() => {
          navigator.clipboard.writeText(text.contact);
          toast.success(
            `${text.type}: ${text.contact} has been copied to your clipboard.`
          );
        }}
        size={32}
        className="cursor-pointer hover:text-red-700"
      />
    </div>
  );
}

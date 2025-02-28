"use client";

import { useFormStatus } from "react-dom";

export default function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed text-center max-w-70"
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
}

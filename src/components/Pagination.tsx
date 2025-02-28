"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Pagination({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        disabled={!hasPrev}
        className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        onClick={() => createPageURL(currentPage - 1)}
      >
        Prev
      </button>
      <button
        disabled={!hasNext}
        className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        onClick={() => createPageURL(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

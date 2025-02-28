"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("search") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
}

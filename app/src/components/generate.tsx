import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
const GenerateDropdown = () => {
  const [data, setData] = useState();

  const handleLoad = async () => {
    const urlGene = `http://localhost:3001/genres`;
  
    const { data } = await axios.get(urlGene).then(res => res.data);

    setData(data);

  }

  useEffect(() => {
    handleLoad();
  }, [])


  // const data = [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center text-white">
        Category
        <FaChevronDown className="ml-1 mt-1" />{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Category selection: </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.map((genre: any) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/generate/${genre.id}?generate=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenerateDropdown
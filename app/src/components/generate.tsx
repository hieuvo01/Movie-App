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
const GenerateDropdown = async () => {
  const urlGene = `${process.env.URL_MOVIE}/genres`;

  const {data} = await axios.get(urlGene).then(res => res.data);

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex justify-center items-center text-white">Category<FaChevronDown className="ml-1 mt-1" /> </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Category selection: </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {data.map((genre: any) => <DropdownMenuItem key={genre.id}>
        <Link href={`/generate/${genre.id}?generate=${genre.name}`} >{genre.name}</Link>
      </DropdownMenuItem>)}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default GenerateDropdown
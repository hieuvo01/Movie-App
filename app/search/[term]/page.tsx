import { notFound } from "next/navigation"

type IProps= {
    params: {
    term: string
    }
}


export default function SearchPag({params: {term}} :IProps)
{
    if(!term) return notFound;
    const termToUse = decodeURI(term);
    return (
        <div>
          <h1>{termToUse}</h1>
        </div>
    )
  }
  
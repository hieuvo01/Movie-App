import { notFound } from "next/navigation"

type IProps= {
    params: {
        id: string
    };
    searchParams: {
        generate: string
    }
}


export default function GeneratePage({params: {id}, searchParams: {generate}} :IProps)
{
    if(!id) return notFound;
    const idToUse = decodeURI(id);
    return (
        <div>
          <h1>{idToUse}</h1>
          <h1>{generate}</h1>
        </div>
    )
}
  
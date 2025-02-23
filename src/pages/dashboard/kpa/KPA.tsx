import {Card,CardHeader,CardTitle} from "@/components/ui/card";
import { CheckSquare,XCircle } from 'lucide-react';
import Inbox from "./InboxTable";

interface CardProps {
    title:string,
    digit:number,
    icons?:JSX.Element
}
const Cards: CardProps[] = [
    {title:"Total Projects", digit:5, icons:<CheckSquare/>},
    {title:"Pending Projects", digit:4, icons:<XCircle/>}
]

const KPA: React.FC = () => {
  return (
    <>
    <div className="px-2">
      <div className=" md:flex md:gap-4">
        {Cards.map((card,index)=>(
        <Card className="w-full my-4 md:mx-4 shadow-md" key={index}>
          <CardHeader>
            <CardTitle className="flex justify-between text-base">{card.title} {card.icons}</CardTitle>

            <p className="text-lg font-bold text-black">{card.digit}</p>
          
          </CardHeader>
          
        </Card>
        ))}
      </div>
      <div className="md:flex md:flex-row flex flex-col gap-5 md:justify-between p-4">

      <Inbox/>
      </div>
      </div>
    </>
  );
};
export default KPA;

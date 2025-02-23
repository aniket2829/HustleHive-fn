import { Separator } from "@/components/ui/separator"
import {Card, CardDescription, CardTitle} from "@/components/ui/card"

interface MailProps {
    name:string,
    message:string
}

const mailData: MailProps[] = [
    {name:"Unknown", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa iusto magni maxime voluptas veritatis perspiciatis illo dignissimos! Esse, nemo?"},
    {name:"Unknown", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa iusto magni maxime voluptas veritatis perspiciatis illo dignissimos! Esse, nemo?"},
    {name:"Unknown", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa iusto magni maxime voluptas veritatis perspiciatis illo dignissimos! Esse, nemo?"}]


const Mail:React.FC = () => {
    return(
        <>
        <div className="flex items-center justify-between py-2 px-3">
            <h1 className="text-xl font-bold">Inbox</h1>
        </div>
        <Separator />
        <div className="p-4">
            {mailData.map((items,user)=>(
                <Card className="my-3 p-6 shadow-lg cursor-pointer" key={user}>
                    <div className="flex justify-between">
                    <CardTitle className="font-semibold">{items.name}</CardTitle>
                    </div>
                    <CardDescription>{items.message}</CardDescription>
                </Card>
            ))}
        </div>
        </>
    )
}
export default Mail;
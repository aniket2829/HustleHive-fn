import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface InboxMessage {
  name: string;
  message: string;
}

const Inbox: React.FC = () => {
  const InboxTable: InboxMessage[] = [
    { name: "User 1", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, beatae!"},
    { name: "Unknown", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, beatae!"}
  ];

  return (
    <div className="md:flex items-center">
      <Card className="md:w-[1100px] shadow-md md:h-[450px] overflow-auto"> 
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
        </CardHeader>
        <Separator/>
          {InboxTable.map((inbox, index) => (
            <CardContent className="flex flex-col mt-4" key={index}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <p className="ml-4">{inbox.name}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-semibold">
                  <p>{inbox.message}</p>
                </CardContent>
              </Card>
            </CardContent>
          ))}
      </Card>
    </div>
  );
};

export default Inbox;

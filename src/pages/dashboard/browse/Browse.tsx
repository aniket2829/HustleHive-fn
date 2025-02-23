import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
interface UserData {
  name: string;
  bio: string;
  field: string;
  Profile?: boolean;
}

const userData: UserData[] = [
  {
    name: "Name 1",
    bio: "This is the bio section blah blah blah",
    field: "Web Development",
  },
  {
    name: "Name 2",
    bio: "This is the bio section blah blah blah",
    field: "Web Development",
  },
  {
    name: "Name 3",
    bio: "This is the bio section blah blah blah",
    field: "Web Development",
  },
];

const Browse: React.FC = () => {

  return (
    <div className="flex flex-col md:flex-row md:flex gap-8 p-8">
      {/* <Filter /> */}
      <div className="flex flex-col gap-5 md:w-[900px]">
        {userData.map((user, index) => (
          <Card key={index}>
            <CardHeader>
{/*               <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage src={avatar} height={55} width={55} />
                </Avatar>
              </div> */}
                <CardTitle className="text-xl">{user.name}</CardTitle>
              <div className="text-start font-medium">
                <CardDescription>{user.field}</CardDescription>
                <p className="mt-4">{user.bio}</p>
                <p>Additional things </p>
                <p>Additional things </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default Browse;

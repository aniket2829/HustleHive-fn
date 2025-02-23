import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"  
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCheck } from 'react-icons/fa';

type ProjectCardProps = {
  name: string,
  description: string,
  author: string,
  attachments: number,
  status: "completed" | "ongoing"
}

const truncateDescription = (text: string, limit: number): string => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
};

const exampleProjects: ProjectCardProps[] = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      attachments: 2,
      author: "Aniket",
      status: "ongoing"
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      attachments: 5,
      author: "Anshika",
      status: "completed"
    }
  ];

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, attachments, author, status }) => {
    const truncatedDescription = truncateDescription(description, 20);

    return (
      <div className="p-8">
      <Card>
        <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
          {status === 'completed' && <FaCheck />}
        </div>
          <CardDescription>By {author}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{truncatedDescription}</p>
          <p className="mt-6">{attachments} Attachments</p>
        </CardContent>
        <CardFooter>
          <Button>Details</Button>
        </CardFooter>
      </Card>
      </div>
    )
  }

const MyProjects: React.FC = () => {
    return (
        <>
        <div className="flex justify-between items-center p-4 h-auto">
            <Tabs defaultValue="assignee" className="w-auto">
                <TabsList>
                    <TabsTrigger value="assignee">Assignee</TabsTrigger>
                    <TabsTrigger value="assigned">Assigned</TabsTrigger>
                </TabsList>
            </Tabs>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="grid grid-cols-3 gap-5 md:w-[900px]">
        {exampleProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
        ))}
        </div>
        </>
    )
}

export default MyProjects
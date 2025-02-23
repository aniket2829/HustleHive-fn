import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const SignUp: React.FC = () => {
  return (
    <>
      <Card className="w-[350px] mx-auto mt-[10rem]">
        <CardHeader className="text-center">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>To get you dream projects running</CardDescription>
        </CardHeader>
        <CardContent className="">
          <Label className="py-2" htmlFor="username">
            Full Name
          </Label>
          <Input id="username" placeholder="Name" />
          <Label className="py-2" htmlFor="email">
            Email
          </Label>
          <Input id="email" placeholder="Email" />
          <Label htmlFor="pass" className="py-2">
            Password
          </Label>
          <Input id="pass" placeholder="Password" type="password" />
          <Label htmlFor="con" className="py-2">
            Confirm Password
          </Label>
          <Input id="con" placeholder="Confirm Password" type="password" />
          <div className="flex items-center mt-4 ">
            <Checkbox id="Checkbox" />
            <Label id="Checkbox" className="ml-3">Sign Up as a freelancer</Label>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">Sign up</Button>
          <Button variant="secondary" className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignUp;

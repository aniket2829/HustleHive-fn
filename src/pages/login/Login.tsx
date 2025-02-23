import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login: React.FC = () => {
    return (
        <>
            <Card className="w-[350px] mx-auto mt-[10rem]">
                <CardHeader className="text-center">
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        to get you dream projects running
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email" />
                    <Label htmlFor="pass" className="mt-2">Password</Label>
                    <Input id="pass" placeholder="Password" type="password" />
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button className="w-full">Login</Button>
                    <Button variant="secondary" className="w-full">Sign up</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Login
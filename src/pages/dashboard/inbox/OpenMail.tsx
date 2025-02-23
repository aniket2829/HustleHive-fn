import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const messageData = [{ title: "Unknown" }];

const OpenMail: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between py-[8px] px-6">
                <h1 className="text-xl font-bold">Message</h1>

            </div>
            <Separator />
            <div className="p-7">
                {messageData.map((user, index) => (
                    <div className="flex justify-between items-center" key={index}>
                        <div className="flex space-x-4 items-center">
                            <div>
                                <h1 className="font-semibold">{user.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Separator />
            <div className="p-8 font-medium">
                <p>
                    I hope this message finds you well. I wanted to provide a quick
                    update on the project timeline. Due to unforeseen circumstances, we
                    have encountered some delays in the development phase. After careful
                    consideration and evaluation of our current progress, we have revised
                    the timeline accordingly. Please find attached the updated project
                    schedule reflecting these changes. We understand the importance of
                    delivering the project on time and are committed to minimizing any
                    further disruptions. Our team will be working diligently to expedite
                    the remaining tasks and ensure that we meet our objectives. Thank you
                    for your continued dedication and support during this time. Should you
                    have any questions or concerns, please don't hesitate to reach out.
                </p>
            </div>
            <Separator />
            <div className="p-4">
                <Label htmlFor="reply">Reply</Label>
                <Input className="my-3" type="reply" id="reply" placeholder="Enter your message" />
                <Button variant="secondary">Send</Button>
            </div>
        </div>
    );
};

export default OpenMail;

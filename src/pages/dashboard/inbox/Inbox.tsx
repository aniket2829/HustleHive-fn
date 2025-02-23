import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Mail from "./Mail";
import OpenMail from "./OpenMail";

const Inbox: React.FC = () => {
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={40}>
          <Mail />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <OpenMail />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Inbox;
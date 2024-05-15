import CodeCustomHeader from "@/app/pages/CodeCustomHeader";
import MakeACallWithHeader from "@/app/pages/MakeACallWithHeader";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteCustomHeader: React.FC<CallSection> = ({index, url}) => {
  
  return (
    <div>
      <h3>{index}. Send a Simple POST with a Custom Header</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server allows custom headers.</p>
      <p>Note: Custom headers often trigger a preflight request. While POST requests are allowed by default, the presence of custom headers will initiate a preflight request to check for permissions. In this example, the custom header is allowed.</p>
      <CodeCustomHeader source={url} origin={ORIGIN.ALL} methods={""} headers={"Content-Type, Authorization, X-Custom-Header"}></CodeCustomHeader>
      <MakeACallWithHeader method={HttpMethod.POST} url={url}></MakeACallWithHeader>
    </div>
  );
};

export default CallRemoteCustomHeader;
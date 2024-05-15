import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteDefaultPort: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Explicit Default Port</h3>
      <p>In this section, my frontend calls a server on a remote origin while explicitly setting the default port.</p>

      <Code source={url} origin={ORIGIN.DEFAULT_PORT} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteDefaultPort;
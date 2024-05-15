import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteWrongPort: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allow My Origin but with the Wrong Port</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server defines CORS to accept my domain and protocol but not my port.</p>

      <Code source={url} origin={ORIGIN.WRONG_PORT} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteWrongPort;
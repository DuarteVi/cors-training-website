import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteSubDomain: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allow a Higher Domain</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server defines CORS to accept a higher domain than mine.</p>

      <Code source={url} origin={ORIGIN.SUBDOMAIN} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteSubDomain;
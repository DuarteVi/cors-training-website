import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemotePutMethod: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allow Only the PUT Method</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server defines CORS to accept any website but only the &quot;PUT&quot; method.</p>

      <Code source={url} origin={ORIGIN.ALL} methods={"PUT"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.HEAD} url={url}></MakeACall>
      <MakeACall method={HttpMethod.POST} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
      <MakeACall method={HttpMethod.PUT} url={url}></MakeACall>
    </div>
  );
};

export default CallRemotePutMethod;
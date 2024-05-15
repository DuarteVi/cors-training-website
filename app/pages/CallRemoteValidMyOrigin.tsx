import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteValidMyOrigin: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allow Only My Origin</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server defines CORS to accept only my origin.</p>

      <Code source={url} origin={ORIGIN.MY_ORIGIN} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteValidMyOrigin;
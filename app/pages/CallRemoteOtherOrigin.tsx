import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteOtherOrigin: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allow Only &quot;https://other-website.com&quot;</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server defines CORS to accept only &quot;https://other-website.com&quot; without any specific methods.</p>
      <p>Note: Notice how the DELETE request is not even sent because it is not allowed by the server&lsquo;s CORS policy.</p>

      <Code source={url} origin={ORIGIN.OTHER}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteOtherOrigin;
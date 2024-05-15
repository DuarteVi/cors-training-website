import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteValidOrigin: React.FC<CallSection> = ({index, url}) => {
  
  return (
    <div>
      <h3>{index}. Allows all Requests</h3>
      <p>In this section, my frontend calls a server on a remote origin. The server defines CORS to allow all origins and methods.</p>
      <Code source={url} origin={ORIGIN.ALL} methods={"GET,PATCH,POST,PUT,OPTIONS,DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.HEAD} url={url}></MakeACall>
      <MakeACall method={HttpMethod.POST} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
      <MakeACall method={HttpMethod.PUT} url={url}></MakeACall>
      <MakeACall method={HttpMethod.PATCH} url={url}></MakeACall>
      <MakeACall method={HttpMethod.OPTIONS} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteValidOrigin;
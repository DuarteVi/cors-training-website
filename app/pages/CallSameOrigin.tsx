import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, URL } from "@/app/pages/utils";

const CallSameOrigin: React.FC<CallSection> = ({url}) => {

  return (
    <div>
      <h3>Same-Origin Policy (SOP)</h3>
      <p>The Same-Origin Policy (SOP) is a crucial security measure enforced by web browsers. It ensures that your frontend can securely interact with your backend when both are hosted on the same origin. An &ldquo;origin&ldquo; is defined by the combination of the protocol, hostname, and port. With SOP, there is no need for additional CORS headers because the browser inherently trusts requests made to the same origin, preventing unauthorized access to resources across different origins.</p>

      <h5>No CORS configuration for URL : {URL.SAME_ORIGIN}</h5>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallSameOrigin;
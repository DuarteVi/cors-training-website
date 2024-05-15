"use client"
import CallRemoteCustomHeader from '@/app/pages/CallRemoteCustomHeader';
import CallRemoteDefaultPort from '@/app/pages/CallRemoteDefaultPort';
import CallRemoteOtherOrigin from '@/app/pages/CallRemoteOtherOrigin';
import CallRemotePutMethod from '@/app/pages/CallRemotePutMethod';
import CallRemoteSubDomain from '@/app/pages/CallRemoteSubDomain';
import CallRemoteValidAllOrigin from '@/app/pages/CallRemoteValidAllOrigin';
import CallRemoteValidMyOrigin from '@/app/pages/CallRemoteValidMyOrigin';
import CallRemoteWrongPort from '@/app/pages/CallRemoteWrongPort';
import CallRemoteWrongProtocol from '@/app/pages/CallRemoteWrongProtocol';
import CallSameOrigin from '@/app/pages/CallSameOrigin';
import { URL } from '@/app/pages/utils';

export default function Home() {
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Welcome to my CORS training site!</h1>

      <p>Here, you can easily test different CORS configurations. Some requests are made to the same origin, while others are sent to a remote API.</p>
      
      <h3>Inspecting Your Developer Tools</h3>
      <p>To inspect your developer tools, right-click and select &quot;Inspect&quot;. Next, go to the &quot;Network&quot; tab and make sure all requests are displayed.</p>

      <h2 style={{ color: 'green'}}>Requests on the Same Origin</h2>
      <CallSameOrigin url={URL.SAME_ORIGIN}></CallSameOrigin>

      <h2 style={{ color: 'green'}}>Requests to a Remote API</h2>
      <CallRemoteValidAllOrigin index="1" url={URL.REMOTE_VALID_ALL_ORIGIN}></CallRemoteValidAllOrigin>
      <CallRemoteCustomHeader index="2" url={URL.REMOTE_VALID_CUSTOM_HEADER}></CallRemoteCustomHeader>
      <CallRemoteValidMyOrigin index="3" url={URL.REMOTE_VALID_MY_ORIGIN}></CallRemoteValidMyOrigin>
      <CallRemotePutMethod index="4" url={URL.REMOTE_PUT_METHOD}></CallRemotePutMethod>
      <CallRemoteOtherOrigin index="5" url={URL.REMOTE_NOBODY_ORIGIN}></CallRemoteOtherOrigin>
      <CallRemoteWrongProtocol index="6" url={URL.REMOTE_WRONG_PROTOCOL}></CallRemoteWrongProtocol>
      <CallRemoteWrongPort index="7" url={URL.REMOTE_WRONG_PORT}></CallRemoteWrongPort>
      <CallRemoteSubDomain index="8" url={URL.REMOTE_SUBDOMAIN}></CallRemoteSubDomain>
      <CallRemoteDefaultPort index="9" url={URL.REMOTE_DEFAULT_PORT}></CallRemoteDefaultPort>
    </main>
  );
}


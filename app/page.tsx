"use client";

import { useEffect, useState } from "react";

export default function DebugPage() {
  const [serverInfo, setServerInfo] = useState<any>(null);
  const [clientInfo, setClientInfo] = useState<any>(null);

  useEffect(() => {

    setClientInfo({
      devicePixelRatio: window.devicePixelRatio,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      platform: navigator.platform,
      browserLanguage: navigator.language,
      cookiesEnabled: navigator.cookieEnabled,
      userAgent: navigator.userAgent,
    });
  }, []);

  return (
    <div className="p-4 text-sm">
      <h1 className="text-lg font-semibold mb-2">🧩 Debug Info</h1>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Client Info</h2>
        <div className="bg-gray-200 p-2 rounded" onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(clientInfo, null, 2));
        }}>Скопировать</div>
      </div>
      <pre className="bg-gray-200 p-2 rounded mt-2">
        {JSON.stringify(clientInfo, null, 2)}
      </pre>
    </div>
  );
}
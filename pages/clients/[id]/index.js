import { useRouter } from 'next/router';
import React from 'react';

function ClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: '1', clientprojectid: 'projecta' },
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;

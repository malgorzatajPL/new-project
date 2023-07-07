import React from 'react';
import { useRouter } from 'next/router';

function SelectedClientPRojectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The projects of a given clients</h1>
    </div>
  );
}

export default SelectedClientPRojectPage;

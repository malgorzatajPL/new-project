import React from 'react';
import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);

  return <div>PortfolioProjectPage</div>;
}

export default PortfolioProjectPage;

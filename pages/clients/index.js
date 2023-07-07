import Link from 'next/link';
import React from 'react';

function ClientsPage() {
  const clients = [
    {
      id: 1,
      first_name: 'Nyssa',
      last_name: 'Eam',
      email: 'neam0@shop-pro.jp',
    },
    {
      id: 2,
      first_name: 'Arda',
      last_name: 'Fulcher',
      email: 'afulcher1@jugem.jp',
    },
    {
      id: 3,
      first_name: 'Timothy',
      last_name: 'Trevers',
      email: 'ttrevers2@dedecms.com',
    },
    {
      id: 4,
      first_name: 'Scotty',
      last_name: 'Perrone',
      email: 'sperrone3@ustream.tv',
    },
    {
      id: 5,
      first_name: 'Marylee',
      last_name: 'Giovanardi',
      email: 'mgiovanardi4@gnu.org',
    },
    {
      id: 6,
      first_name: 'Lanny',
      last_name: 'Sineath',
      email: 'lsineath5@unicef.org',
    },
    {
      id: 7,
      first_name: 'Egan',
      last_name: 'Navein',
      email: 'enavein6@economist.com',
    },
    {
      id: 8,
      first_name: 'Katusha',
      last_name: 'Cattach',
      email: 'kcattach7@si.edu',
    },
    {
      id: 9,
      first_name: 'Innis',
      last_name: 'Bedells',
      email: 'ibedells8@nps.gov',
    },
    {
      id: 10,
      first_name: 'Lorrie',
      last_name: 'Unitt',
      email: 'lunitt9@squidoo.com',
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.first_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;

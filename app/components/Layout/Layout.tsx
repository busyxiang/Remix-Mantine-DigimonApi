import { AppShell, Header, Title } from '@mantine/core';
import { ReactNode } from 'react';

import NavBar from '../Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AppShell
      padding="md"
      fixed
      navbar={<NavBar />}
      header={
        <Header height={60} p="xs">
          <Title order={2}>Remix - Digimon API</Title>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;

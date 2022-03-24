import {
  AppShell,
  Header,
  Title,
  ScrollArea,
  Group,
  Switch,
  useMantineColorScheme,
} from '@mantine/core';
import { ReactNode } from 'react';

import NavBar from '../Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      fixed
      navbar={<NavBar />}
      header={
        <Header height={60} p="xs">
          <Group position="apart">
            <Title order={2}>Remix - Digimon API</Title>

            <Group>
              <Switch
                color={colorScheme === 'dark' ? 'yellow' : 'blue'}
                label="Dark Theme"
                onClick={() => toggleColorScheme()}
              />
            </Group>
          </Group>
        </Header>
      }
    >
      <ScrollArea>{children}</ScrollArea>
    </AppShell>
  );
};

export default Layout;

import {
  Navbar as MantineNavBar,
  Anchor,
  Group,
  Text,
  ScrollArea,
} from '@mantine/core';
import { Link } from 'remix';

type NavLink = {
  label: string;
  path: string;
};

const NavBar = () => {
  const navLinks: NavLink[] = [
    {
      label: 'All',
      path: '/',
    },
    {
      label: 'Fresh',
      path: '/fresh',
    },
    {
      label: 'Training',
      path: '/training',
    },
    {
      label: 'Rookie',
      path: '/rookie',
    },
    {
      label: 'Champion',
      path: '/champion',
    },
    {
      label: 'Ultimate',
      path: '/ultimate',
    },
    {
      label: 'Mega',
      path: '/mega',
    },
  ];

  return (
    <MantineNavBar width={{ base: 200 }} p="md">
      <MantineNavBar.Section grow component={ScrollArea}>
        <Group direction="column">
          {navLinks.map((link) => (
            <Anchor key={link.label} component={Link} to={link.path}>
              {link.label}
            </Anchor>
          ))}
        </Group>
      </MantineNavBar.Section>
    </MantineNavBar>
  );
};

export default NavBar;

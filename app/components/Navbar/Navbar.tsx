import {
  Navbar as MantineNavBar,
  Anchor,
  Group,
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
      path: '/level/fresh',
    },
    {
      label: 'Training',
      path: '/level/training',
    },
    {
      label: 'Rookie',
      path: '/level/rookie',
    },
    {
      label: 'Champion',
      path: '/level/champion',
    },
    {
      label: 'Ultimate',
      path: '/level/ultimate',
    },
    {
      label: 'Mega',
      path: '/level/mega',
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

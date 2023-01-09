import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Header>
  );
};

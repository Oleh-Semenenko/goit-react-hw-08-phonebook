import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>
  );
};

import { Logo } from "@components/basic/logo";
import { ThemeToggle } from "@components/basic/theme-toggle";

import { Container } from "./container";

export const Navbar = () => {
  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <ThemeToggle />
      </Container>
    </header>
  );
};

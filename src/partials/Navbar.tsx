import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
          <img
            className="h-10"
            src="/edinburgh-logo.png"
            alt="university logo"
            loading="lazy"
          />
        }
          name=<span class="indent-2 font-light"> Jingjie @ Edinburgh </span>
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/publication/"><span class="text-zinc-800 opacity-60"> Publication</span></NavMenuItem>
        <NavMenuItem href="/team/"><span class="text-zinc-800 opacity-60"> Team</span></NavMenuItem>
        <NavMenuItem href="/teaching/"><span class="text-zinc-800 opacity-60">Teaching</span></NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };

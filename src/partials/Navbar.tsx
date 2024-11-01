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
          name="Jingjie @ Edinburgh"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/"><span class="text-zinc-800 opacity-60"> Blogs</span></NavMenuItem>
        <NavMenuItem href="/"><span class="text-zinc-800 opacity-60">GitHub</span></NavMenuItem>
        <NavMenuItem href="/"><span class="text-zinc-800 opacity-60">Twitter</span></NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };

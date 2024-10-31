import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={

        <div class="relative mt-5 mb-0">
          <h3 class="font-light text-4xl -tracking-wider mt-0 mb-8 mx-0">
            Jingjie Li <span class="text-2xl opacity-60"> </span>
          </h3>

        </div>
      }
      description={
          <h4 class="font-light mt-0 mb-4 mx-0">
            I am a Lecturer (Asstistant Professor) in the School of Informatics, University of Edinburgh.
            As a researcher, I am passionate about solving emerging challenges towards making digital technologies more human-centric, efficient, and safer.

            nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
            <a className="text-cyan-400 hover:underline" href="/">
              consectetur
            </a>{' '}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </h4>
      }
      avatar={
        <img
          className="h-60 w-50"
          src="/assets/images/Headshot_Jingjie Li.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/j_j_li">
            <HeroSocial
              src="/assets/images/icon-twitter.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/cv-icon.png"
              alt="CV icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };

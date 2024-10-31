import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
  ColorTags,
  Tags,
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
        <div>
          <p class="font-light text-sm mt-0 mb-4 mx-0">
            I am a Lecturer (Asstistant Professor) in the School of Informatics, University of Edinburgh.
            As a researcher in computer systems and cybersecurity, I am passionate about solving big challenges towards making emerging digital technologies -- such as 
            smart home 🛜, AR/VR 👾, and AI 🤖 systems -- <mark>safer</mark>, 
            more <mark>human-centric</mark>, and more <mark>efficient</mark>. 
            My research allows me to do a range of things that exhaust my daydreams, from building tools against "mind-reading" to 
            exploring the boundaries between machines and human agency.
          </p>

          <h4 class="font-light text-sm mt-0 mb-4 mx-0">
            During my academic journey, I left footprints in four continents and am actively collaborating with talents across the globe. 
            If you are interested in working with me or joining my research team, feel free to drop me an email :)
          </h4>



        </div>



          
      }
      avatar={
        <img
          className="h-80"
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

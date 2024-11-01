import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <div>
        <h3 class="font-light">
          <span class="text-blue-900">Research</span> Themes
        </h3>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name={<span class="font-light text-lime-300 font-xl">User-Centric Security and Privacy Control</span>}
        description={<span class="text-sm text-slate-100">Security and privacy are "expensive" for cyber-physical systems that interact with users, which drawing rising concerns. 
        Our research designs tools to make security and privacy practical and affordable to end-users, by preserving 
        utilities and offering flexible and automated controls, in applications such as AR/VR technologies [USENIX Security21], mobile and IoT systems [ACM CCS19, MobiQuitous19]. </span>}
        img={{
          src: '/assets/images/privacy control_illustration.png',
          alt: 'Privacy tool illustration',
        }}

      />
      <Project
        name={<span class="font-light text-lime-300 font-xl">User-Centric Security and Privacy Control</span>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/human centric system_illustration.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

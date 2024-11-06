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
      <div className="flex items-baseline justify-between">
      <div>
        <h3 class="font-light">
          <span class="text-blue-900">Research</span> Themes
        </h3>
      </div>
    
    <div className="font-light text-sm">
          <a href="/publication/">View all publications →</a>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name={<span class="font-light text-lime-300 font-xl">User-Centric Security and Privacy Control</span>}
        description={<span class="text-sm text-slate-100">Security and privacy are "expensive" for cyber-physical systems that interact with users.
        Our research uncovers risks from the novel use of digital technologies, e.g., AI personalization [CHI19, TiiS20]; we design tools to make security and privacy practical and affordable to end-users, by preserving 
        utilities and offering flexible and automated controls, in applications such as AR/VR technologies [USENIX Security21], IoT systems [ACM CCS19, MobiQuitous19]. </span>}
        img={{
          src: '/assets/images/privacy control_illustration.png',
          alt: 'Privacy tool illustration',
        }}

      />

      <Project
        name={<span class="font-light text-cyan-300 font-xl">Measuring Human Behavior and Digital Risks </span>}
        description={<span class="text-sm text-slate-100">It is crucial to understand people's perceptions and behaviors in using digital technologies, 
        for identifying barriers for security, privacy, and online safety. Our work designs mixed-methods approaches
        to measure complicated human behaviors, which are otherwise hidden, computationally and qualitatively [IEEE SP23, ACM CSCW24, ACM CHI24]. 
        This work informs safer smart homes, hardware chip design, vulnerability research, and protection for at-risk users. </span>}
        img={{ src: '/assets/images/human behavior_illustration.png', alt: 'human behavior illustration' }}
      />


      <Project
        name={<span class="font-light text-red-300 font-xl">Efficient Human-Machine Interface</span>}
        description={<span class="text-sm text-slate-100"> We build hardware and software platforms that 
        enable next-generation human-machine interactions, e.g., AI-powered brain-computer interface [ISCA22, IEEE EMBC20], 
        and beyond (e.g., wearables for animals [CEA20]). 
        We design new compute elements and architectures that remove the efficiency bottleneck and allows dynamic
         tradeoffs between energy, performance, and quality [ISCA20, IEEE TVLSI19]. </span>}
        img={{ src: '/assets/images/human centric system_illustration.png', alt: 'Human-Centered Systems Illustration' }}
      />
    </div>
  </Section>
);

export { ProjectList };

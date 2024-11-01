import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Education = () => (
  <Section
    title={

      <div>
        <h3 class="font-light">
          <span class="text-blue-900">Education</span> Background
        </h3>
      </div>


    }
    children={
    <ul class="list-disc list-inside font-light text-base">
      <li><span class="text-blue-900">Ph.D. in Computer Engineering</span>, 
          University of Wisconsin-Madison <span class="italic">(2017 - 2023)</span>
      </li>
      <li><span class="text-blue-900">B.Eng. (R&D) with First-Class Honours</span>, 
          Australian National University <span class="italic">(2015 - 2017)</span>
      </li>
      <li><span class="text-blue-900">B.Sc.</span>, 
          Beijing Institute of Technology <span class="italic">(2013 - 2015)</span>
      </li>
    </ul>
    }


  >

  </Section>

);

export { Education };

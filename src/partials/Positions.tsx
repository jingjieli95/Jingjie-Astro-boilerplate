import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Positions = () => (
  <Section
    title={

      <div>
        <h3 class="font-light">
          Academic <span class="text-blue-900">Positions</span>
        </h3>
      </div>


    }
    children={
    <ul class="list-disc list-inside font-light text-base">
      <li><span class="text-blue-900">Lecturer (Assistant Professor)</span>, 
          University of Edinburgh <span class="italic">(2023 - Present)</span>
          <ul class="list-disc list-inside font-light text-sm indent-12">
            <li> Member of the Institute for Computing Systems Architecture, School of Informatics</li>
            <li> Member of the Ethics Committee, School of Informatics</li>
          </ul>

      </li>
      <li><span class="text-blue-900">Research Assistant</span>, 
          University of Wisconsin-Madison <span class="italic">(2017 - 2023)</span>
      </li>
      <li><span class="text-blue-900">Research Intern</span>, 
          Visa Research <span class="italic">(2022)</span>
      </li>
      <li><span class="text-blue-900">Visiting Scholar</span>, 
          Max Planck Institute for Security and Privacy <span class="italic">(2021)</span>
      </li>
      <li><span class="text-blue-900">Research Intern</span>, 
           Commonwealth Scientific and Industrial Research Organisation <span class="italic">(2016 - 2017)</span>
      </li>
    </ul>
    }


  >

  </Section>

);

export { Positions };

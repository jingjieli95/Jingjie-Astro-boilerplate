import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Teaching = () => (
    <Section
    title={

      <div>
        <h3 class="font-light">
          <span class="text-blue-900">Teaching and Mentoring</span>
        </h3>
      </div>


    }
    children={


      <div>
      
      <h3 class="text-blue-900">Instructor</h3>
         <ul class="list-disc list-inside font-light text-sm indent-6">
            <li> <a href="https://opencourse.inf.ed.ac.uk/usec"><GradientText>INFR11158/11230 Usable Security and Privacy</GradientText></a>, University of Edinburgh (Spring 2024, Spring 2025) </li>

      </ul>

      <h3 class="text-blue-900">Guest Lecturer</h3>
         <ul class="list-disc list-inside font-light text-sm indent-6">
            <li> INFR10067/11244 Computer Security, University of Edinburgh (Fall 2023)</li>
            <li> ECE 751 Embedded Computing Systems, UW-Madison (Fall 2022)</li>
            <li> CS 642 Introduction to Computer Security, UW-Madison (Fall 2022)</li>
          </ul>

      <h3 class="text-blue-900">Teaching Assistant and Research Mentor</h3>
         <ul class="list-disc list-inside font-light text-sm indent-6">
            <li>  NSF Research Experiences for Undergraduates Program, UW-Madison (Spring 2021 - Fall 2022)</li>
            <li> ECE 399 Independent Study, UW-Madison (Fall 2021 - Spring 2022)</li>
            <li> Undergraduate Research Scholars Program, UW-Madison (Fall 2020 - Spring 2021)</li>
            <li>  CS 354 Machine Organization and Programming, UW-Madison (Spring 2019)</li>
          </ul>

      </div>




  
 






    }


  >

  </Section>

);

export { Teaching };

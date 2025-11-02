import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Team = () => (
    <Section
    title={

      <div>
        <h3 class="font-light">
          Research <span class="text-blue-900">Team Members</span>
        </h3>
      </div>


    }
    children={


      <div>
      
      <h3 class="text-blue-900">PhD Students</h3>
         <ul class="list-disc list-inside font-light text-sm indent-6">
            <li> <a href="https://a.cupof.beer/"> <GradientText> Jiuming Jiang </GradientText> </a> (2024 - Present, as primary supervisor) </li>
            <li> <a href=""> <GradientText> Karen Jiamin Zheng </GradientText> </a> (2025 - Present, as primary supervisor) </li>
            <li> <a href=""> <GradientText> Yan Wang </GradientText> </a> (2025 - Present, as primary supervisor) </li>
            <li> <a href="https://blogs.ed.ac.uk/yangheran_piao/"> <GradientText> Lawrence Piao </GradientText> </a> (2023 - Present, as co-supervisor)  </li>
            <li> Temima Hrle (2023 - Present, as co-supervisor)  </li>

         </ul>

      // <h3 class="text-blue-900">Undergrad Researchers and Interns</h3>
      //    <ul class="list-disc list-inside font-light text-sm indent-6">
      //       <li> Bei Yi Ng (2024 - Present, Philosophy, Psychology & Language) </li>
      //       <li> Carrie Li (2024 - Present, Informatics)  </li>
      //       <li> Helen Wang (2024 - Present, Informatics)  </li>
      //       <li> Justin Tong (2024 - Present, Informatics)  </li>
      //     </ul>

      <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p class="font-bold text-base">For prospective students</p>
        <p class="text-sm">I am actively looking for prospective Ph.D. students to join my team. I also welcome students (undergrad/MSc) 
         at Edinburgh who are looking for research opportunities. Please feel free to contact me by email with your CV and research interests. 
         (I will carefully read your emails, but I may not be able to reply to everyone due to the volume of emails recevied.)</p>
      </div>





      <h3 class="text-blue-900">Alumni</h3>
         <ul class="list-disc list-inside font-light text-sm indent-6">
            <li> Jessica Chen (2025, Electrical Engineering) </li>
            <li> Bei Yi Ng (2024 - 2025, Philosophy, Psychology & Language) </li>
            <li> Carrie Li (2024 - 2025, Informatics)  </li>
            <li> Helen Wang (2024 - 2025, Informatics) -&gt; MPhil student @ Cambridge </li>
            <li> Justin Tong (2024 - 2025, Informatics)  </li>
            <li> Karen Zheng (2024 - 2025, UG @ Informatics) -&gt; Ph.D. student @ UoE</li>
            <li> Luna Rubio (2024, MSc @ Philosophy, Psychology & Language) </li>
            <li> Akshay Gautam (2024, UG @ Informatics) -&gt; Ph.D. student @ UoE </li>
            <li> Joshua Hew (2024, UG @ Philosophy, Psychology & Language)  </li>
            <li> Diya Goel (2024, UG @ Philosophy, Psychology & Language)  </li>
          </ul>

      </div>




  
 






    }


  >

  </Section>

);

export { Team };

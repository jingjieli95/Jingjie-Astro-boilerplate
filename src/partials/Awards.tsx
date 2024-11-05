import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Awards = () => (
  <Section
    title={

      <div>
        <h3 class="font-light">
          Selected <span class="text-blue-900">Awards and Honors</span>
        </h3>
      </div>


    }
    children={
    <ul class="list-disc list-inside font-light text-base">
      <li><span class="text-blue-900">Generative AI Laboratory Seedcorn Award</span>, 
      University of Edinburgh <span class="italic">(2024)</span>
      </li>
      <li><span class="text-blue-900">CPS (Cyber-Physical Systems) Rising Star</span>, 
      CPS-VO @ National Science Foundation <span class="italic">(2022)</span>
      </li>
      <li><span class="text-blue-900">Norton Labs Graduate Fellowship Finalist </span> 
      <span class="italic">(2022)</span>
      </li>
      <li><span class="text-blue-900">Facebook Towards Trustworthy Products in AR, VR, and Smart Devices Award </span>  
      <span class="italic">(2021)</span>
      </li>
      <li><span class="text-blue-900">Qualcomm Innovation Fellowship Finalist </span> 
      <span class="italic">(2019 & 2021)</span>
      </li>
        <li><span class="text-blue-900">UW–Madison Chancellor’s Opportunity Fellowship </span> 
      <span class="italic">(2019 - 2021)</span>
      </li>
      <li><span class="text-blue-900">Foxconn “Smart Cities-Smart Futures” Competition Final Winner </span> 
      < span class="italic">(2019)</span>
      </li>
      <li><span class="text-blue-900">ACM CHI Best Paper Award </span>  
       <span class="italic">(2019)</span>
      </li>
      <li><span class="text-blue-900">ISLPED Low-Power Design Contest Award </span>  
       <span class="italic">(2018)</span>
      </li>
      <li><span class="text-blue-900">A. Richard Newton Young Student Fellowship </span>   
       <span class="italic">(2018)</span>
      </li>
      <li><span class="text-blue-900">ANU College of Engineering & Computer Science International Partnership Scholarship </span>   
       <span class="italic">(2015 & 2016)</span>
      </li>


    </ul>
    }


  >

  </Section>

);

export { Awards };

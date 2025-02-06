import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Services = () => (
  <Section
    title={

      <div>
        <h3 class="font-light">
          Academic <span class="text-blue-900">Services</span>
        </h3>
      </div>


    }
    children={
    <ul class="list-disc list-inside font-light text-base">
      <li><span class="text-blue-900">Program Committee Member</span>
         <ul class="list-disc list-inside font-light text-sm indent-12">
            <li> ACM CCS (2023, 2024 & 2025) </li>
            <li> USENIX Security (2025)</li>
            <li> EuroUSEC (2024)</li>
            <li> IEEE SafeThings (2023)</li>
          </ul>
      </li>
      <li><span class="text-blue-900">Organizing Committee Member</span>
          <ul class="list-disc list-inside font-light text-sm indent-12">
            <li> EuroSys (2026) </li>
            <li> MobiUK (2025)</li>
          </ul>     
      </li>
      <li><span class="text-blue-900">Reviewer</span>
         <ul class="list-disc list-inside font-light text-sm indent-12"> <li> I regularly accept review invitations for conferences and journals in computer and mobile systems 
            (e.g., IEEE TC, IEEE TMC, IEEE Pervasive Computing), cybersecurity (e.g., IEEE S&P Magazine), and HCI (ACM CHI and ACM CSCW).</li>
          </ul>
      </li>


    </ul>

    }


  >

  </Section>

);

export { Services };

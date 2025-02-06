import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Updates = () => (
  <Section
    title={

      <div>
        <h3 class="font-light">
          Recent <span class="text-blue-900">Updates</span>
        </h3>
      </div>


    }
    children={
    <ul class="list-disc list-inside font-light text-sm overflow-y-auto h-64 bg-sky-50">
      <li> 01/2025 - Our work on on-device AI transprency is accepted by ACM CHI 2025, congrats to Jack! </li>
      <li> 10/2024 - With Civic Digits, Citadel Youth Centre, and Dr. Tara Capel @ Design Informatics of UoE, we successfully concluded the <a href="https://www.linkedin.com/pulse/hack-your-age-intergenerational-dive-tech-drama-design-ryan-mckay--u0uce"><GradientText> 
      Hack Your Age</GradientText></a> workshop, which engaged intergenerational participants from Edinburgh in imagining risks of the future technologies through maker space and performance experiences. Stay tuned for futuer events!</li>
      <li> 10/2024 - Jiuming successfully defended his thesis at Imperial College and joined our group for his PhD at University of Edinburgh. </li>
      <li> 07/2024 - Temima's first first-author paper on port scan legality is accepted by EuroUSEC, congrats!  </li>
      <li> 06/2024 - Jingjie gave talks at the OFFIS - Institut für Informatik and Max Planck Institute for Security and Privacy, Germany.  </li>
      <li> 06/2024 - Our work on child safety and privacy in smart home marketing will appear at ACM CSCW 2024 and is presented at the <a href = "https://www.cnil.fr/en/privacy-research-day-2024-topics-registration#:~:text=The%20CNIL%20presents%20its%20third,the%20program%20and%20register%20below.">
      <GradientText>CNIL Privacy Day</GradientText> </a> in Paris by Kaiwen.  </li>
      <li> 05/2024 - Our work on human factors of hardware reverse engineering was presented at ACM CHI 2024.  </li>
      <li> 10/2023 - Jingjie gave a talk at the University of Kent.  </li>
      <li> 09/2023 - Jingjie moved to UK and started his new position in Edinburgh :)  </li>
      <li> 08/2023 - Jingjie graduated his Ph.D. from UW-Madison, under the advise of Prof. Younghyun Kim and Prof. Kassem Fawaz, after six wonderful years!  </li>






    </ul>

    }


  >

  </Section>

);

export { Updates };

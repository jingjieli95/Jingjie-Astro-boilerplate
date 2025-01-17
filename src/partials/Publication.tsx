import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Publication = () => (
    <Section
    title={

      <div>
        <h3 class="font-light">
          List of <span class="text-blue-900">Publications</span>
        </h3>
      </div>


    }
    children={
    <ul class="list-disc list-inside font-light text-base">

      <li><span class="text-blue-900">"Impressively Scary:" Exploring User Perceptions and Reactions to Unraveling Machine Learning Models in Social Media Applications  </span> 
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Jack West, Bengisu Cagiltay, Shirley Zhang, Jingjie Li, Kassem Fawaz, and Suman Banerjee </li>
            <li> ACM Conference on Human Factors in Computing Systems (CHI), 2025 (To appear)</li>
          </ul>
      </li>

      <li><span class="text-blue-900">Exploring Reddit Users’ Questions and Advice on the Legality of Port Scans </span> 
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Temima Hrle, Mary Milad, Jingjie Li, and Daniel Woods </li>
            <li> European Symposium on Usable Security (EuroUSEC), 2024</li>
            <li> <a href="https://eurousec24.kau.se/pre-proceedings/49.pdf" class="bg-slate-500"> PDF </a> </li>
          </ul>
      </li>

      <li><span class="text-blue-900">A Mixed-Methods Approach to Study Human Problem-Solving Processes in Hardware Reverse Engineering</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> René Walendy, Markus Weber, Jingjie Li, Steffen Becker, Carina Wiesen, Malte Elson, Younghyun Kim, Kassem Fawaz, Nikol Rummel, and Christof Paar </li>
            <li> ACM Conference on Human Factors in Computing Systems (CHI), 2024</li>
            <li> <a href="https://dl.acm.org/doi/10.1145/3613904.3642837" class="bg-slate-500"> PDF </a> </li>
          </ul>
      </li>   

      <li><span class="text-blue-900">Exploring the Interplay between Interaction Experience and Security Perception of Payment Authentication in Virtual Reality</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Jingjie Li, Sunpreet Singh Arora, Kassem Fawaz, Younghyun Kim, Can Liu, Sebastian Meiser, Mohsen Minaei, Maliheh Shirvanian, and Kim Wagner </li>
            <li> IEEE Conference on Virtual Reality and 3D User Interfaces Workshop (IEEE VRW), 2024 </li>
            <li> <a href="https://www.pure.ed.ac.uk/ws/portalfiles/portal/455553201/LiEtalIEEEVRW2024ExploringTheInterplay.pdf" class="bg-slate-500"> PDF</a>  
             <a> </a> <a class="bg-blue-500">US Patent Pending </a></li>
          </ul>
      </li>       

      <li><span class="text-blue-900">Unfulfilled Promises of Child Safety and Privacy: Portrayals and Use of Children in Smart Home Marketing</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Kaiwen Sun, Jingjie Li, Yixin Zou, Jenny Radesky, Chris Brooks, and Florian Schaub  </li>
            <li> ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW), 2024 </li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3637422" class="bg-slate-500"> PDF</a>  
             <a> </a> <a class="bg-lime-500" href="https://www.cnil.fr/en/privacy-research-day-2024-topics-registration#:~:text=The%20CNIL%20presents%20its%20third,the%20program%20and%20register%20below.">📢 CNIL Privacy Day </a></li>
          </ul>
      </li>  

      <li><span class="text-blue-900">“It’s up to the Consumer to be Smart”: Understanding the Security and Privacy Attitudes of Smart Home Users on Reddit</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Jingjie Li, Kaiwen Sun, Brittany Huff, Anna Bierley, Younghyun Kim, Florian Schaub, and Kassem Fawaz </li>
            <li> IEEE Symposium on Security and Privacy (S&P), 2023 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/10179344" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>    

      <li><span class="text-blue-900">uBrain: A Unary Brain Computer Interface</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Di Wu, Jingjie Li, Zhewen Pan, Younghyun Kim, Joshua San Miguel</li>
            <li> International Symposium on Computer Architecture (ISCA), 2022 </li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3470496.3527401" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>   
      <li><span class="text-blue-900">UNO: Virtualizing and Unifying Nonlinear Operations for Emerging Neural Networks</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Di Wu, Jingjie Li, Setareh Behroozi, Younghyun Kim, and Joshua San Miguel</li>
            <li> International Symposium on Low Power Electronics and Design (ISLPED), 2021 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/9502473" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">uGEMM: Unary Computing for GEMM Applications</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Di Wu, Jingjie Li, Ruokai Yin, Hsuan Hsiao, Younghyun Kim, and Joshua San Miguel​</li>
            <li> IEEE Micro (Special Issue on IEEE Micro Top Picks), 2021 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/9502473" class="bg-slate-500"> PDF</a>  
            <a> </a> <a class="bg-red-500" >🏆 IEEE Micro Top Pick </a></li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Kalεido: Real-Time Privacy Control for Eye-Tracking Systems</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Jingjie Li, Amrita Roy Chowdhury, Kassem Fawaz, and Younghyun Kim</li>
            <li> USENIX Security Symposium (USENIX Sec.), 2021 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/9502473" class="bg-slate-500"> PDF</a>  
            <a> </a> <a class="bg-lime-500" href="https://www.ftc.gov/news-events/events/2022/11/privacycon-2022">📢 US FTC PrivacyCon</a>
            <a> </a> <a class="bg-red-500" >🏆 Towards Trustworthy Products in AR, VR, and Smart Devices Award </a></li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Using Implantable Biosensors and Wearable Scanners to Monitor Dairy Cattle’s Core Body Temperature in Real-Time</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Hanwook Chung, Jingjie Li, Younghyun Kim, Jennifer Van Os, Sabrina Brounts, Christopher Choi</li>
            <li> Elsevier Computers and Electronics in Agriculture, 2020 </li>
            <li> <a href="https://www.sciencedirect.com/science/article/pii/S0168169919326420" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  


      <li><span class="text-blue-900">Detecting Personality Traits Using Inter-Hemispheric Asynchrony of the Brainwaves</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Roneel V. Sharan, Shlomo Berkovsky, Ronnie Taib, Irena Koprinska, and Jingjie Li</li>
            <li> International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), 2020 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/9176108" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  


      <li><span class="text-blue-900">uGEMM: Unary Computing Architecture for GEMM Applications</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Di Wu, Jingjie Li, Ruokai Yin, Hsuan Hsiao, Younghyun Kim, and Joshua San Miguel</li>
            <li> International Symposium on Computer Architecture (ISCA), 2020 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/9139000" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Personality Sensing: Detection of Personality Traits Using Physiological Responses to Image and Video Stimuli</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Ronnie Taib, Shlomo Berkovsky, Irena Koprinska, Eileen Wang, Yucheng Zeng, and Jingjie Li</li>
            <li> ACM Transactions on Interactive Intelligent Systems (TiiS), 2020 </li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3357459" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Approximate Hardware Techniques for Energy-Quality Scaling Across the System</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Younghyun Kim, Joshua San Miguel, Setareh Behroozi, Tianen Chen, Kyuin Lee, Yongwoo Lee, Jingjie Li, and Di Wu</li>
            <li> International Conference on Electronics, Information, and Communication (ICEIC) 2020 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/9051208" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">MicPrint: Acoustic Sensor Fingerprinting for Spoof-Resistant Mobile Device Authentication</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Yongwoo Lee, Jingjie Li, and Younghyun Kim</li>
            <li> EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous), 2019 </li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3360774.3360801" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Velody: Nonlinear Vibration Challenge-Response for Resilient User Authentication</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Jingjie Li, Kassem Fawaz, and Younghyun Kim</li>
            <li> ACM Conference on Computer and Communications Security (CCS), 2019 </li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3319535.3354242" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">SAADI-EC: A Quality-Configurable Approximate Divider for Energy Efficiency</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Jackson Melchert, Setareh Behroozi, Jingjie Li, and Younghyun Kim</li>
            <li> IEEE Transactions on VLSI Systems (TVLSI), 2019 </li>
            <li> <a href="https://ieeexplore.ieee.org/abstract/document/8766885" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Detecting Personality Traits Using Eye-Tracking Data</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Shlomo Berkovsky, Ronnie Taib, Irena Koprinska, Eileen Wang, Yucheng Zeng, Jingjie Li, and Sabina Kleitman</li>
            <li> ACM CHI Conference on Human Factors in Computing Systems (CHI), 2019 </li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3290605.3300451" class="bg-slate-500"> PDF</a>  
            <a> </a> <a class="bg-red-500" >🏆 ACM CHI Best Paper Award </a></li>
          </ul>
      </li>

      <li><span class="text-blue-900">SAADI: A Scalable Accuracy Approximate Divider for Dynamic Energy-Quality Scaling</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Setareh Behroozi, Jingjie Li, Jackson Melchert, and Younghyun Kim</li>
            <li> ASP-DAC (Asia South Pacific Design Automation Conference), 2019</li>
            <li> <a href="https://dl.acm.org/doi/abs/10.1145/3287624.3287668" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

      <li><span class="text-blue-900">Continuous and Wireless Skin Contact and Ear Implant Temperature Measurements and Relations to the Core Body Temperature of Heat Stressed Dairy Cows</span>
         <ul class="list-undisc list-inside font-light text-sm indent-6">
            <li> Hanwook Chung, Jingjie Li, Younghyun Kim, and Christopher Y. Choi</li>
            <li> ASABE ILES (International Livestock Environment Symposium), 2018</li>
            <li> <a href="https://elibrary.asabe.org/abstract.asp?aid=49669" class="bg-slate-500"> PDF</a>  </li>
          </ul>
      </li>  

    </ul>
    }


  >

  </Section>

);

export { Publication };

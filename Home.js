import Navbar from './Navbar';

const Typewriter = ({ text }) => {
  return (
    <div className="typing-effect">
      {text}
    </div>
  )
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Junbo Wang</h1>
      </header>
      <main>
        <Navbar />
        <section>
          <div style={{ display: 'flex', flexDirection: 'row', }}>
            <img src={process.env.PUBLIC_URL + 'favicon.png'} style={{ width: '25%', height: '25%', marginRight: '5%' }} />
            <div>
              <Typewriter text={"Hi, I'm Junbo!"} />
              <p>I am pursuing my <b>Bachelor of Electrical Engineering</b> at <b>McMaster University</b>, expected to graduate in June 2025. I was awarded a $1k McMaster Entrance Scholarship for an entrance average of 90%.</p>
              <p>Connect with me on <a href="https://linkedin.com/in/junbowang16">LinkedIn</a> and email me at <a href="mailto:wangj430@mcmaster.ca">wangj430@mcmaster.ca</a>! </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Work Experience</h2>
            <p><b>Shred-Tech</b>, Cambridge ON</p>
            <ul>
              <li>Electrical Engineering Co-op Student [Sept 2022 – Aug 2023]</li>
              <li>Experienced with SolidWorks Electrical by designing electric panel which contains electric circuits and the 2D layout of electronic components.</li>
              <li>Assisted senior electrical engineers to modify circuit design drawings of electric panels.</li>
              <li>Used the HIOKI machine to record the current flows data and display the waveform when motor drives lead the shredder to cut the material and did the calculations through the software waveform processor 9335.</li>
              <li>Developed Microsoft Excel skills by listing electronic components from different companies and comparing products quality and prices.</li>
            </ul>
            <p><b>Professional Projects</b></p>
            <ul>
              <li><a href="https://github.com/JunboWang3/Electrical-Systems-Integration-Project">Electrical Systems Integration Project</a> [Jan 2024 – April 2024]</li>
              <li><a href="https://github.com/JunboWang3/Microprocessor-Systems-Project">Microprocessor-Systems-Project</a> [Jan 2022 – April 2022]</li>
              <li><a href="https://github.com/JunboWang3/Engineering-Design-Graph">Engineering-Design-Graph</a> [Sep 2020 – Dec 2020]</li>
              <li><a href="https://github.com/JunboWang3/Engineering-Profession-Practice">Engineering-Profession-Practice</a> [Sep 2019 – Dec 2019]</li>
              <li>Electrical Energy Conversion Experiments [Jan 2022 – April 2022]</li>
              <li>Assistive Device [Sep 2019 – Dec 2019]</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Extracurricular Activities</h2>
          <ul>
            <li>Volunteered at Agape Centre, Cornwall ON [2017-2019]</li>
            <li>Swimmer at Sealion swimming club, Cornwall ON [2017-2019]</li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li><b>Technical</b>: MATLAB, Python, Microsoft Office, Circuits using PCBs, Oscilloscopes, Multimeters, Ampere meter, Microcontrollers, SolidWorks Electrical, Waveform Processor 9335, Autodesk Inventor</li>
            <li><b>Languages</b>: Fluent in English and Chinese (verbal and writing)</li>
          </ul>
        </section>
        <section>
          <h2>Awards</h2>
          <ul>
            <li>McMaster Entrance Scholarship - Awarded for entrance average of 90%.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()} Junbo Wang. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home;

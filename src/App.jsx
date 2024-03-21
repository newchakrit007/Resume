import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/newzera.png" />

        <Title title="Chakrit Salaprakhon (New)">
          <h3>ตำแหน่ง : Database management</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("21 Mar 2024")}</p>
          <p>วันเกิด: {moment("2002/09/08").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66815654993
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : chakhritslaprakhon@gmail.com.com</p>
          <p>Email : s64122202072@ssru.ac.th</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Skills and Abilities Ready to learn all the time, punctual
Attention to details, leadership skills, programming knowledge, database knowledge skills.</p>
        </Title>

        <Title title="Work Experience">
          <p>Become a database manager for customers within the Siamchai Appliances network.
Become a database manager for customers who rent and purchase motorcycles under Golden Plus GP Management.</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>Database management</p>
          <p>Creative</p>
          <p>Teamwork</p>
          <p>Innovate</p>
        </Title>
      </div>
    </main>
  )
}

export default App

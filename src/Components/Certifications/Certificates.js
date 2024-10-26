import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Certificates.css'
export default function Certificates(){
    const [ihide,setIhide] = useState('');
    const [chide,setChide] = useState('hide');
    const [nhide,setNhide] = useState('hide');
    const [ahide,setAhide] = useState('hide');
    return <>
    <button className="backbutton"><Link className="back" to="/">Back</Link></button>
    <h1 className='hc'>My Certificates</h1>
    <div className="cbuttons">
        <button onClick={()=>{setIhide('');setChide('hide');setNhide('hide');setAhide('hide')}} className={ihide==='' && 'active'}>Internships</button>
        <button onClick={()=>{setIhide('hide');setChide('');setNhide('hide');setAhide('hide')}} className={chide==='' && 'active'}>Certifications</button>
        <button onClick={()=>{setIhide('hide');setChide('hide');setNhide('');setAhide('hide')}} className={nhide==='' && 'active'}>NPTEL</button>
        <button onClick={()=>{setIhide('hide');setChide('hide');setNhide('hide');setAhide('')}} className={ahide==='' && 'active'}>Achievements</button>
    </div>
    <div className="intern" id={ihide}>
        <div>
        <a href="https://drive.google.com/file/d/18Zd6rgbz14LdNVOCDxDXDXfw3FsnwJY2/view?usp=drive_link" target='blank'><img src="/assets/bharatintern.png" alt="Bharat Intern Fs" />
        <p>Full Stack Web Dev Intern - <span>Bharat Intern</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1Ts2YrNQ4PO6_H53JU9373HA2Pr55Dczj/view?usp=drive_link" target='blank'><img src="/assets/instalearn.png" alt="Insta Learn" />
        <p>Software Development Intern - <span>InstaLearn</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1zD_RCjpfgFL_MYPTzK8ugXvp2Il0MuVQ/view?usp=drive_link" target='blank'><img src="/assets/solarsecure.png" alt="Solar Secure Solutions Full Stack" />
        <p>Full Stack Web Dev Intern - <span>Solar Secure</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1TIBiGZwutXtNtUrgRu8HyqiB_XerBBk4/view?usp=drive_link" target='blank'><img src="/assets/skilldzire.png" alt="Skill Dzire" />
        <p>Machine Learning Intern - <span>SkillDzire</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1UgInTXZiljfhznE0ZdmTgdyoZawb9RWd/view?usp=drive_link" target='blank'><img src="/assets/bharatinternds.png" alt="Bharat Intern DS" />
        <p>Data Science Intern - <span>Bharat Intern</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1s7ufaHr6Uw-nExIsG1WU5_ZfPcd6XjwJ/view?usp=drive_link" target='blank'><img src="/assets/slashmark.png" alt="Slah Mark" />
        <p>Data Science Intern - <span>Slash Mark</span></p></a>
        </div>   
    </div>
    <div className="course" id={chide}>
        <div>
        <a href="https://drive.google.com/file/d/1gkc3iR5BuMYheZXWAk6O96BmdBKOdzQ0/view?usp=drive_link" target='blank'><img src="/assets/uweb.png" alt="Udemy FS" />
        <p>Full Stack Web Development - <span>Udemy</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1zN2w-exDdhYeV5OiHn7oZwzWgtMhbo64/view?usp=drive_link" target='blank'><img src="/assets/ibmml.png" alt="IBM ML" />
        <p>Machine Learning With Python - <span>IBM</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1NmCNQ3UkJH0Cn8z5IJ0JqvIwN7yYiMg-/view?usp=sharing" target='blank'><img src="/assets/ibmdsp.png" alt="IBM DSP" />
        <p>Data Science Practitioner - <span>IBM</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1v2uF58IXleNUUOmfDQlySkBX01yrAhLQ/view?usp=drive_link" target='blank'><img src="/assets/ujs.png" alt="Udemy JS" />
        <p>Java Script for React JS - <span>Udemy</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1J3ZHHtmldpuhdCwPxYIANe2um1CKZ4u6/view?usp=sharing" target='blank'><img src="/assets/amazon.jpg" alt="AWS" />
        <p>AWS Workshop - <span>APSSDC</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1xtmBEFcqanGkHXeE6G34L7s94Y0cuUlb/view?usp=drive_link" target='blank'><img src="/assets/ibmds.png" alt="IBM DS" />
        <p>Data Science & ML Capstone - <span>IBM</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1KoU9tyMm73Nh5l6whiIyV3RqK1rbaRVu/view?usp=drive_link" target='blank'><img src="/assets/design.png" alt="IBM Design" />
        <p>Enterprise Design Thinking - <span>IBM</span></p></a>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1dcAh_IMBi8p8EbZeX7Hn-fKyDN8YC3vu/view?usp=drive_link" target='blank'><img src="/assets/excelr.png" alt="ExcelR" />
        <p>Foundations Of Full Stack - <span>ExcelR</span></p></a>
        </div>
    </div>
    <div className="nptel" id={nhide}>
        <div>
            <a href="https://drive.google.com/file/d/1CuI12pYJJrZ4IeJiBlgImUuWQ1nqJE7s/view?usp=drive_link" target='blank'><img src="/assets/dl.png" alt="Deep Learning NPTEL" />
            <p>Deep Learning - <span>NPTEL</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1AtUujMRvuRgBUexS4-WNdOnkE591jPI6/view?usp=drive_link" target='blank'><img src="/assets/iot.png" alt="Foundation Of Cloud IoT Edge ML" />
            <p>Foundation Of Cloud IoT Edge ML - <span>NPTEL</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1r1fM8hu-1KtC-e_X8Oz7b_06RO8_o0a7/view?usp=drive_link" target='blank'><img src="/assets/googlecloud.png" alt="Google Cloud Computing Foundations" />
            <p>Google Cloud Computing - <span>NPTEL</span></p></a>
        </div>
    </div>
    <div className="achieve" id={ahide}>
        <div>
            <a href="https://drive.google.com/file/d/1ItMCtiy7wivYdnsSBf52V1yqIjZUUS5A/view?usp=sharing" target='blank'><img src="assets/ppt1st.png" alt="PPT 1st prize in NEC" />
            <p>1st Prize in PPT - <span>NEC</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1dm7Eu76CSiKLWbqtdZBy8G_c5sZ4EsVD/view?usp=drive_link" target='blank'><img src="/assets/necppt.png" alt="PPT 2nd prize in NEC" />
            <p>2nd Prize in PPT - <span>NEC</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1e6xL7kTQH6E3X_pYW5X0kgJjs0YQ09k7/view?usp=drive_link" target='blank'><img src="/assets/nitppt.png" alt="PPT 2nd prize in NIT" />
            <p>2nd Prize in PPT - <span>NIT</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1eDBuDEJHlYakMGB15HVVIllv4Vs7QVIQ/view?usp=drive_link" target='blank'><img src="/assets/amppt.png" alt="PPT 1st prize in amreddy" />
            <p>1st Prize in PPT - <span>AM REDDY</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1eBdsoDFHEMIlpeO1eywjfui_wBJumYn7/view?usp=drive_link" target='blank'><img src="/assets/jntucode.png" alt="Code 1st prize in jntu" />
            <p>1st Prize in Coding - <span>JNTUN</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1dyv7TGgi7bBt3QeH0EJNwwh3qmUsSKQD/view?usp=drive_link" target='blank'><img src="/assets/nitcode.png" alt="Code 2nd prize in NIT" />
            <p>2nd Prize in Coding - <span>NIT</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1dxyxdNN4BGPSRz9UKIDg2yljxyFmnPIt/view?usp=drive_link" target='blank'><img src="/assets/necth.png" alt="Techhunt 2nd prize in NEC" />
            <p>2nd Prize in Tech Hunt - <span>NEC</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1eGNkM34pBkSP6PP9q9yNWcCpD04D79EF/view?usp=drive_link" target='blank'><img src="/assets/necessay.png" alt="Essay consolation prize in NEC" />
            <p>Consolation Prize in Essay Writing - <span>NEC</span></p></a>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1eLTPc0_BQ3Fv-DU-oAKcVbpEM0khUeQ9/view?usp=drive_link" target='blank'><img src="/assets/necpainting.png" alt="Painting consolation prize in NEC" />
            <p>Consolation Prize in Painting - <span>NEC</span></p></a>
        </div>
    </div>
    </>
}
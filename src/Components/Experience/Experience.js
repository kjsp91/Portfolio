import './Experience.css'
export default function Experience(){
    return <>
    <h1 className='expr'>Experience</h1>
    <div className="exp">
        <div className="ecard">
            <img id='bi' src="assets/BI logo.png" alt="Bharat Intern Logo" />
            <div>
                <h2>Full Stack Web Developer</h2>
                <p>Remote | Dec 2023 - Jan 2024</p>
                <ul>
                    <li>Developed a blog website in which user can create a post and also update and delete a post from their blog (CRUD).</li>
                    <li>The blog website runs through server side using AXIOS.</li>
                    <li>Developed a Student Registration Page in which student can register through their details.</li>
                    <li>Used MongoDB Database to store the details of all students who registered through the Registration Page.</li>
                </ul>
            </div>
        </div>
        <div className="ecard">
            <img id='il' src="assets/IL logo.jpeg" alt="Insta Learn Logo" />
            <div>
                <h2>Software Development Intern</h2>
                <p>Remote | Jan 2024 - Mar 2024</p>
                <ul>
                    <li>Worked as a software development intern in InstaLearn sponsered by UIX Labs.</li>
                    <li>Collaboratively worked with a team of five members to complete several high-impact project.</li>
                    <li>Developed several projects in the domain of web development and gained valuable real-world experience, enhancing both technical skills and problem-solving abilities.</li>
                    <li>Got this internship oppertunity through INTERNSHALA.</li>
                </ul>
            </div>
        </div>
        <div className="ecard">
            <img id='si' src="assets/sss.webp" alt="Solar Secure  Solutions Logo" />
            <div>
                <h2>Full Stack Web Developer</h2>
                <p>Remote | Jun 2023 - Aug 2023</p>
                <ul>
                    <li>Worked throughout on JavaScript and build numerous applications using JavaScript.</li>
                    <li>Build numerous tasks using html , css and javascript and got a strong domain knowledge.</li>
                    <li>Worked with EJS (Embedded JavaScript) and API's.</li>
                    <li>Build a simple Restaurant Website with all the knowledge.</li>
                </ul>
            </div>
        </div>
        <div className="ecard">
            <img id='si' src="assets/sd.jpg" alt="SkillDzire Logo" />
            <div>
                <h2>Machine Learning Intern</h2>
                <p>Remote | May 2024 - Jul 2024</p>
                <ul>
                    <li>Worked on various regions of Machine Learning from scratch.</li>
                    <li>Build numerous projects on the concepts of classification and regression.</li>
                    <li>Designed and trained various machine learning algorithms to address specific business challenges.</li>
                    <li>Conducted extensive data cleaning, normalization, and feature engineering on large datasets.</li>
                </ul>
            </div>
        </div>
    </div>
    </>
}
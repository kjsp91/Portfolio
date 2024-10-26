import './About.css'
export default function About(){
    return(
        <div id='about'>
        <div className="main-about">
        <h2 className='habout'>About Me</h2>
        <div className="about">
        {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-developing-website-6546126-5515521.png" alt="about" /> */}
        <img src="/assets/about.png" alt="about" />
        <p>Greetings and Welcome to my portfolio! I'm Jahnavi Sai Priya, a passionate full-stack web developer and Python programmer. With expertise in crafting dynamic web applications and leveraging Python for efficient solutions, I bring creativity and enthusiasm to every project. As a skilled presenter, I excel at communicating complex ideas with clarity and energy. I'm constantly learning and adapting to stay at the forefront of technology. Let's connect and bring your ideas to life! </p>
        </div> 
        </div>
        <hr />

        </div>
    )
}
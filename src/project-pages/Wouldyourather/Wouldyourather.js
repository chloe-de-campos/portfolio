import "../../App.css"
import { useNavigate } from "react-router-dom";
import uvw from "./usevideowyr.mov" 


const Wouldyourather = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>
            
            <div class="projectDescription">
            {/* <img src={require('./nugo mockup dark short.png')}></img> */}
            <p className="date">June 2024</p>
                <h1 style={{fontFamily:'baskerville', fontWeight: '600'}}>Would You Rather</h1>

                <video width="750" height="500" autoPlay loop> 
                    <source src={uvw} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {/* <iframe  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlZhvvWzzXo2zdXdbJbuRZ2%2FWould-You-Rather-Prototype%3Fpage-id%3D0%253A1%26node-id%3D245-1007%26viewport%3D-4560%252C3862%252C0.4%26t%3DEFGKPZArjtBTDWRy-1%26scaling%3Dscale-down" style={{border:" 1px solid rgba(0, 0, 0, 0.1)", width:"800", height:"450"}} allowfullscreen></iframe> */}

                <p>  This project was a quick step into the world of user interaction, data collection, and statistical analysis. the web app engages users in a series of "Would You Rather" questions, gathering their responses and presenting statistical insights based on the collected data. </p>

                <h2>The Stack</h2>

                <h3>Frontend: </h3>
                
                <p>React.js: I wanted the interface to be playful, but simple enough to be intuitive. </p>

                <h3>Backend:</h3>
                
                
                <p>Firebase database: Ensures that user responses are efficiently stored and retrieved, allowing for users to see eachothers' responses with real-time updates and analysis. </p>



                <h2>UX Design</h2>
                
                <p>I wanted the app to feel engaging, giving a user time to consider each question for themselves and then to have the immediate feedback of seeing popular responses. The design features: </p>

                <ul>
                    <li>  Animated Transitions: Questions smoothly slide in and out, making the experience fluid and engaging.
                </li>
                <li>Responsive Design: I wanted to be able to poll my friends on all devices, from smartphones to desktops.
                </li>
                <li>Intuitive Navigation: Users can easily move back and forth between questions and statistics with clear buttons.</li>
                </ul>

                <h2>Challenges</h2>
                
                <h3>Infinite Voting Prevention:</h3>
                    Initially, the database didn't have a removal function, so users either had to be locked into their decision, or they could be able to vote infinitely, skewing the data. I implemented session storage and cookies to ensure each user could only vote once per question, but they could change their response and the database would update to match. 

                <h3>Delayed Animations</h3>
                    Getting the animations just right was tricky. I wanted the app to wait a moment before revealing the next question, giving users a brief pause to reflect on their choice. After some trial and error with CSS animations and delays, I achieved the perfect balance.

                <h3>Data Vizualization</h3>
                    Showing real-time statistics without overwhelming the user required careful design. I opted for a pie chart that dynamically updates, providing a clear and immediate visual representation of the data. The color of the pie chart matches the color of the selected button, so users can understand their responses. I also added shortened versions of the labels for quick recognition with the longer labels available on hover. 

                <h2>The App</h2>

                    6/12: I broke it! The database on the backend is full! Stay tuned for repairs.
                    <a href={"https://chloe-de-campos.github.io/wouldyourather/#/"}>Check out the app here. </a>


            </div> 
        </div>
       
   
    )

}

export default <Wouldyourather/>;

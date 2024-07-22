import AboutTop from '../assets/aboutTop.jpg'
import '../Styles/About.css'

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${AboutTop})`}}></div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio corporis aut veniam nulla. Vitae, voluptatum blanditiis! Velit nobis eaque soluta corporis ipsum labore animi similique nam alias, vero voluptatibus.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eligendi sunt tempora ratione ut odio accusantium tenetur expedita repudiandae quasi, cupiditate sit exercitationem adipisci atque asperiores dolorem! Non, vel omnis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui ducimus id saepe itaque ullam fuga perspiciatis cupiditate cum adipisci facilis dolore ipsa, deleniti obcaecati odio doloribus assumenda quod est!
            </p>
        </div>
    </div>
  )
}

export default About
import ContactLeft from  '../assets/contactLeft.jpg'
import '../Styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide">
            <img src={ContactLeft} alt="Blurred image of our store"/>
        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' type="text" placeholder='Enter full name'/>

                <label htmlFor='email'>Email</label>
                <input name='email' type="temail" placeholder='Enter full name'/>

                <label htmlFor='message'>Message</label>
                <textarea 
                rows='6' 
                placeholder='Enter Message...' 
                name='message' 
                required>
                </textarea>

                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
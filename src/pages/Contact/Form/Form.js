import React from 'react'
import './Form.css'

import bgImage from '../../../assets/Pitha/BackGround2.jpeg'

const Form = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    Get in line to be a <span>PART of the Bengali FAM :D</span>
                </h1>

                <img src={bgImage} alt="get in touch" />

                <p>The picture on the top is full of fashion icon designer Pithas: Nokshi & Pakkon. If you have not already added this to your cart, I would definitely like you to think twice about what are you missing out. Fun Fact: We can CUSTOMIZE this rice cake aka "Pitha" for you. Just send us your drawings and we will try our best!</p>
                <h2>
                We are taking Applications to include you into our culture:
                </h2>
                <p>This is a small beginning. We would love to expand our business if we gain <span className='phoneNumber'>POPULARITY</span> and we want you to tell us how we are doing, what should we improve, what kind of different dishes are you dying to try. Last but not the least, find some new hidden gems of Bengali cuisine and demand those dishes. You never know, we might be the genie and fulfil your wish.</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Form
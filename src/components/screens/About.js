import React from 'react'
import LeftArrow from "../assets/icons/short-arrow-left.svg"
import RightArrow from "../assets/icons/short-arrow-right.svg"
import QuoteIcon from "../assets/icons/quotes.svg"
import UserImage from "../assets/icons/span-7.svg"


function About() {
  return (
    <>
      <section id="about">
            <section class="wrapper">
                <section class="about">
                    <div class="head">
                        <h3>What Our Customer Say About Us</h3>
                        <div class="right">
                            <img class="left-arrow" src={LeftArrow} alt='Left-Arrow' />
                            <img class="right-arrow" src={RightArrow} alt='Right-Arrow' />
                        </div>
                    </div>
                    <div class="body">
                        <ul>
                            <li>
                                <img src={QuoteIcon} alt='Quote' />
                                <p>"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.</p>
                                <div class="role">
                                        <img src={UserImage} alt='User-Image' />
                                    <div class="name">
                                        <h4>Jane Doe</h4>
                                        <small>Designer</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={QuoteIcon} alt='Quote' />
                                <p>"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.</p>
                                <div class="role">
                                        <img src={UserImage} alt='User-Image' />
                                    <div class="name">
                                        <h4>Jane Doe</h4>
                                        <small>Designer</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={QuoteIcon} alt='Quote' />
                                <p>"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.</p>
                                <div class="role">
                                    <img src={UserImage} alt='User-Image' />
                                    <div class="name">
                                        <h4>Jane Doe</h4>
                                        <small>Designer</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default About

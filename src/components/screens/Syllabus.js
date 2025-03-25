import React from 'react'
import ArrowDown from "../assets/icons/arrow-down.svg"

function Syllabus() {
  return (
    <>
    <section id="syllabus">
        <section className="wrapper">
            <section className="syllabus">
                <h5>Syllabus</h5>
                <ul>
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Introduction to UX Design</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                    <hr />
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Introduction to UX Design</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                    <hr />
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Introduction to UX Design</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                    <hr />
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Introduction to UX Design</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                </ul>
                <hr />
            </section>
        </section>
    </section>    
    </>
  )
}

export default Syllabus

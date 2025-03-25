import React from 'react'
import { Helmet } from 'react-helmet'
import SinglePageHeader from '../screens/SinglePageHeader'
import CourseDetailings from "../screens/CourseDetailing"
import CourseInfo from '../screens/CourseInfo'
import Syllabus from '../screens/Syllabus'

function Course() {
  return (
    <>
        <Helmet>
            <title>Course | Web Development</title>
        </Helmet>
        
        <SinglePageHeader/>

        <CourseDetailings />

        <CourseInfo />

        <Syllabus />
        
    </>
  )
}

export default Course
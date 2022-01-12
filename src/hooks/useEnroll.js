import React, { useEffect, useState } from 'react'

function useEnroll() {
    const [enrolled, setEnroll] = useState([])
    useEffect(() => {
        const enrolled_courses = localStorage.getItem('enrolled_courses');
        if (enrolled_courses) {
            setEnroll(JSON.parse(enrolled_courses))
        }
        else {
            setEnroll([])
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('enrolled_courses', JSON.stringify(enrolled))
    }, [enrolled])

    const handleEnroll = (course,type) => {
        if (enrolled.length<1) {
            setEnroll([course])
            alert('Course starting soon')
        }
        else if(type=='-'){
            setEnroll([])
        }else{
            alert('Maximum one course at a time')
        }
    }

    return [enrolled, handleEnroll];
}

export default useEnroll

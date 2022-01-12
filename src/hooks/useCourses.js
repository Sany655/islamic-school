import { useEffect, useState } from 'react'

function useCourses() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses];
}

export default useCourses

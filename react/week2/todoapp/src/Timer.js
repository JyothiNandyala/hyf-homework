import React, { useState, useEffect } from 'react'

function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(prev => prev + 1)
        }, 1000)
        return () => clearTimeout(timer)
    });

    return (
        <h3>You Have Used {time} Seconds On This Website</h3>
    )

}
export default Timer;
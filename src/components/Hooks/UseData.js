import React, { useEffect, useState } from 'react';

const UseData = () => {
          const [tasks, setTasks] = useState([]);
          useEffect(() => {
                    fetch('http://localhost:5000/task')
                              .then(res => res.json())
                              .then(data => setTasks(data));
          }, [])
          return [tasks, setTasks];
};

export default UseData;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const EditTask = () => {
          const { taskId } = useParams();
          const [task, setTask] = useState({});
          useEffect(() => {
                    const url = `http://localhost:5000/task/${taskId}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setTask(data));
          }, []);


          return (
                    <div >
                              <h2>Clicked Task</h2>
                              <Card className='mx-auto w-50' style={{ width: '18rem' }}>
                                        <Card.Body>
                                                  <Card.Title className='text-success'>{task._id}</Card.Title>
                                                  <Card.Text>Description: {task._id}</Card.Text>

                                        </Card.Body>

                              </Card>
                              <div>

                              </div>
                    </div>
          );
};

export default EditTask;
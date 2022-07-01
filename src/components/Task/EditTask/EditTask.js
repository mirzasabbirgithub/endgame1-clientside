import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button, Modal } from 'bootstrap';
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
                              <h3>Your Task</h3>
                              <Card className='mx-auto w-50 mb-3' style={{ width: '18rem' }}>
                                        <Card.Body>
                                                  <Card.Title className='text-success'>{task.taskname}</Card.Title>
                                                  <Card.Text><b>Description:</b> {task.detials}</Card.Text>
                                        </Card.Body>
                              </Card>
                              <div>

                              </div>
                    </div>
          );
};

export default EditTask;
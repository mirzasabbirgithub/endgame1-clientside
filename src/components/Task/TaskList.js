import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskList = ({ task }) => {
          const { _id, taskname, detials } = task;
          const navigate = useNavigate();
          const navigateToEditablePage = id => {
                    navigate(`/edit/${id}`);
          }
          return (
                    <div className="card col-sm-12 col-md-6 col-lg-4">
                              <div class="card-body">
                                        <h5 className="card-title"> {taskname}</h5>
                                        <p className="card-text">Detials About Task: {detials}</p>
                                        <button onClick={() => navigateToEditablePage(_id)} className='btn btn-danger'>Edit</button>
                              </div>
                    </div >
          );
};

export default TaskList;
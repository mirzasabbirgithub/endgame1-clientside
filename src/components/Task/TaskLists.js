import React from 'react';
import UseData from '../Hooks/UseData';
import TaskList from './TaskList';

const TaskLists = () => {
          const [tasks, setTasks] = UseData([]);

          return (
                    <div className='container gx-5' >
                              <h1 className='text-info text-center mt-2'>ToDo List / Task List</h1>
                              <div className="row">
                                        {
                                                  tasks.map(task => <TaskList
                                                            key={task._id}
                                                            task={task}
                                                  >
                                                  </TaskList>)
                                        }

                              </div>
                    </div>
          );
};

export default TaskLists;
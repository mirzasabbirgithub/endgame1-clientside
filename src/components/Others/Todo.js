import React from 'react';
import { useForm } from 'react-hook-form';

const Todo = () => {
          const { register, handleSubmit } = useForm();
          const onSubmit = data => {
                    const url = `http://localhost:5000/task`;
                    fetch(url, {
                              method: 'POST',
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(data)
                    })
                              .then(res => res.json())
                              .then(result => {
                                        console.log(result);
                              })
          };
          return (
                    <div className='w-50 mx-auto'>
                              <h2>Add A Task</h2>
                              <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                        <input className='mb-2' placeholder='Task Name' {...register("taskname", { required: true, maxLength: 50 })} />
                                        <textarea className='mb-2' placeholder='Detials' {...register("detials")} />
                                        <input className='mb-3 bg-success text-white' type="submit" value="Submit Task" />
                              </form>

                    </div>
          );
};

export default Todo;
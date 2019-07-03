import React from 'react';
import { shallow } from "enzyme";
import Task from './Task';
import reducers from './reducers';

it('reducers', () => {
  let state;
  state = reducers({tasks:{list:[{id:0,name:'Learn React',done:false},{id:1,name:'Learn CSS',done:true},{id:2,name:'Web development',done:false}]}}, {type:'CHANGE_TASK_STATE',id:2});
  expect(state).toEqual({tasks:{list:[{id:0,name:'Learn React',done:false},{id:1,name:'Learn CSS',done:true},{id:2,name:'Web development',done:true}]}});
});

it("click", () => {
  const click = jest.fn()
  const wrapper = shallow(<Task click={click} id='0' key='0' name='task1' done='false' />);
  // TODO const task = wrapper.find('.card')
  
  task.simulate('click')
  expect(click).toHaveBeenCalledTimes(1)
});

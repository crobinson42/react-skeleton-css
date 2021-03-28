import React from 'react';
import PropTypes from 'prop-types';
import './List.sass';

const List = ({ Title, description }) => {


	return (
        <section class="container">

        <header>
            <div class="button-col">
                <button class="btn" name="Add Task"> Add Task </button>
            </div>
    
            <div class="status-col">
                <label> Status </label>
            </div>
    
            <div class="progress-col">
                <label> Progress </label>
            </div>
            
            <div class="dates-col">
                <label> Dates </label>
            </div>
    
            <div class="priority-col">
                <label> Priority </label>
            </div>
            
            <div class="icon-col">
                <i class="icon fa fa-user-o"> </i>
            </div>
    
        </header>
    
        <ul class="task-items">
            
            <!-- List Item -->
            <li class="item type1">
                <div class="task">
                    <div class="icon"> </div>
                    <div class="name" style="width:150px"> </div>
                </div>
    
                <div class="status">
                    <div class="icon off"> </div>
                    <div class="text"> Off Track </div>
                </div>
    
                <div class="progress">
                    <progress value="15" max="100" />
                </div>
    
                <div class="dates">
                    <div class="bar"> </div>
                </div>
    
                <div class="priority">
                    <div class="bar"> </div>
                </div>
    
                <div class="user">
                    <img src="https://source.unsplash.com/40x40/?indian" alt="Image 001" class="owner-img" />
                </div>
            </li>
            
            <li class="item type4">
                <div class="task">
                    <div class="icon"> </div>
                    <div class="name" style="width:120px"> </div>
                </div>
    
                <div class="status">
                    <div class="icon warning"> </div>
                    <div class="text"> At Risk </div>
                </div>
    
                <div class="progress">
                    <progress value="45" max="100" />
                </div>
    
                <div class="dates">
                    <div class="bar"> </div>
                </div>
    
                <div class="priority">
                    <div class="bar"> </div>
                </div>
    
                <div class="user">
                    <img src="https://source.unsplash.com/40x40/?face" alt="Image 001" class="owner-img" />
                </div>
            </li>
            
            <li class="item type2">
                <div class="task">
                    <div class="icon"> </div>
                    <div class="name" style="width:120px"> </div>
                </div>
    
                <div class="status">
                    <div class="icon off"> </div>
                    <div class="text"> Off Track </div>
                </div>
    
                <div class="progress">
                    <progress value="10" max="100" />
                </div>
    
                <div class="dates">
                    <div class="bar"> </div>
                </div>
    
                <div class="priority">
                    <div class="bar"> </div>
                </div>
    
                <div class="user">
                    <img src="https://source.unsplash.com/40x40/?european" alt="Image 001" class="owner-img" />
                </div>
            </li>
            
            <li class="item type2">
                <div class="task">
                    <div class="icon"> </div>
                    <div class="name" style="width:100px"> </div>
                </div>
    
                <div class="status">
                    <div class="icon"> </div>
                    <div class="text"> On Track </div>
                </div>
    
                <div class="progress">
                    <progress value="75" max="100" />
                </div>
    
                <div class="dates">
                    <div class="bar"> </div>
                </div>
    
                <div class="priority">
                    <div class="bar"> </div>
                </div>
    
                <div class="user">
                    <img src="https://source.unsplash.com/40x40/?asian" alt="Image 001" class="owner-img" />
                </div>
            </li>
            
            <li class="item type1">
                <div class="task">
                    <div class="icon"> </div>
                    <div class="name"> </div>
                </div>
    
                <div class="status">
                    <div class="icon warning"> </div>
                    <div class="text"> At Risk </div>
                </div>
    
                <div class="progress">
                    <progress value="35" max="100" />
                </div>
    
                <div class="dates">
                    <div class="bar"> </div>
                </div>
    
                <div class="priority">
                    <div class="bar"> </div>
                </div>
    
                <div class="user">
                    <img src="https://source.unsplash.com/40x40/?american" alt="Image 001" class="owner-img" />
                </div>
            </li>		
            
        </ul>
    
    </section>
	);
}
export default Input;
import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Teachers List" />
            <form id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" />
                </div>

                <div className="input-block">
                    <label htmlFor="weekday">Weekday</label>
                    <input type="text" id="weekday" />
                </div>

                <div className="input-block">
                    <label htmlFor="time">Time</label>
                    <input type="text" id="time" />
                </div>

            </form>
        </div>
    )
}

export default TeacherList;
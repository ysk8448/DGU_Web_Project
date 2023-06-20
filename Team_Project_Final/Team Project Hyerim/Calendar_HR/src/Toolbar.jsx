import React from 'react';

export default function Toolbar(props) {
    const {
      date,
    } = props;
  
    const navigate = (action) => {
      props.onNavigate(action);
    };
  
    return (
        <div className="rbc-toolbar" style={{ display: "flex", flexFlow: "column"}} >
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={navigate.bind(null, 'PREV')}
          >
            {"<"}
          </button>
          <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
          <button
            type="button"
            onClick={navigate.bind(null, 'NEXT')}
          >
            {">"}
          </button>
        </span>
        <div>
            <button type="button" onClick={navigate.bind(null, 'TODAY')} >
                오늘
            </button>
        </div>
      </div>
    );
  }
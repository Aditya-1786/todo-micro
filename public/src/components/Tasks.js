import React, { useState } from "react";
import "./Tasks.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { TextField } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Tasks = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="tasks-container">
      <div className="task-body">
        <div
          className="circle"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {!isHover && <CircleOutlinedIcon className="checking" />}
          {isHover && (
            <CheckCircleOutlineIcon className="checking"></CheckCircleOutlineIcon>
          )}
        </div>
        <div className="description">
          <div>Do Laundry</div>
          <div>Tasks</div>
        </div>
        <StarBorderOutlinedIcon className="favorite" />
      </div>
      <div className="task-body">
        <div
          className="circle"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {!isHover && <CircleOutlinedIcon className="checking" />}
          {isHover && (
            <CheckCircleOutlineIcon className="checking"></CheckCircleOutlineIcon>
          )}
        </div>
        <div className="description">
          <div>Do Laundry</div>
          <div>Tasks</div>
        </div>
        <StarBorderOutlinedIcon className="favorite" />
      </div>
      <div className="task-body">
        <div
          className="circle"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {!isHover && <CircleOutlinedIcon className="checking" />}
          {isHover && (
            <CheckCircleOutlineIcon className="checking"></CheckCircleOutlineIcon>
          )}
        </div>
        <div className="description">
          <div>Do Laundry</div>
          <div>Tasks</div>
        </div>
        <StarBorderOutlinedIcon className="favorite" />
      </div>
      <div className="task-form">
        <div className="input-field">
          <input
            className="input-box"
            type="text"
            placeholder="+ Add Task"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Tasks;

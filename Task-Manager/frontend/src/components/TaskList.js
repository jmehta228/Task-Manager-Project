import React from 'react';

const TaskList = ({ tasks, onDelete, onComplete, onUndo }) => {
    return (
        <div>
            <center>
                <h2>Task List</h2>
            </center>
            {tasks.length === 0 ? (
                <center>
                    <strong>
                        <p>No tasks yet. Add one!</p>
                    </strong>
                </center>
            ) : (
                <center>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={headerStyle}>Title</th>
                                <th style={headerStyle}>Description</th>
                                <th style={headerStyle}>Completed?</th>
                                <th style={headerStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id || task._id}>
                                    <td style={cellStyle}>{task.title}</td>
                                    <td style={cellStyle}>{task.description}</td>
                                    <td style={cellStyle}>{task.completed ? 'Yes' : 'No'}</td>
                                    <td style={{ ...cellStyle, width: '50px' }}>{task.completed ? 'Yes' : 'No'}</td>
                                    <td style={cellStyle}>
                                        {task.completed ? (
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button
                                            style={deleteButtonStyle}
                                            onClick={() => onDelete(task.id || task._id)}
                                            >
                                            Delete
                                            </button>
                                            <button
                                            style={undoButtonStyle}
                                            onClick={() => onUndo(task.id || task._id)}
                                            >
                                            Undo
                                            </button>
                                        </div>
                                        ) : (
                                        <button
                                            style={completeButtonStyle}
                                            onClick={() => onComplete(task.id || task._id)}
                                        >
                                            Complete
                                        </button>
                                        )}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </center>
            )}
        </div>
    );
};

const tableStyle = {
    width: '90%',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const headerStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
};

const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
};

const completeButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: "100%"
};

const deleteButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: "100%"
};

const undoButtonStyle = {
  backgroundColor: 'orange',
  color: 'white',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: "100%"
};


export default TaskList;
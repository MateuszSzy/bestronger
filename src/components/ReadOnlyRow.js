import React from "react";


//read only row exercise
const ReadOnlyRow = ({exercise, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, exercise)}>
                    Edit
                </button>
                <button
                    type="button"
                    onClick={() => handleDeleteClick(exercise.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
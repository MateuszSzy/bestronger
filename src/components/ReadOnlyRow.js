import React from "react";
import {AiTwotoneEdit} from "react-icons/all";
import {AiFillDelete} from "react-icons/all";



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
                    <AiTwotoneEdit />
                </button>
                <button
                    type="button"
                    onClick={() => handleDeleteClick(exercise.id)}>
                    <AiFillDelete />
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
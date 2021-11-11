import React from "react";
import {AiFillSave} from "react-icons/all";
import {TiCancel} from "react-icons/all";


//add new exercise
//edit row exercise
const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a name"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a reps"
                    name="reps"
                    value={editFormData.reps}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a weight"
                    name="weight"
                    value={editFormData.weight}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit"><AiFillSave /></button>
                <button type="button" onClick={handleCancelClick}><TiCancel /></button>
            </td>
        </tr>
    );
};
export default EditableRow;
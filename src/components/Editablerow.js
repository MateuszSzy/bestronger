import React from "react";


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
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};
export default EditableRow;
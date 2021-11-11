import React, {Fragment, useState, useEffect} from 'react';
import "./Plan.scss";
import {db} from "../firebase";
import data from "./Plan.json";
import {nanoid} from 'nanoid';


import {AiOutlinePlusCircle} from "react-icons/all";
import {AiOutlineMinusCircle} from "react-icons/all";
import {IoIosAddCircle} from "react-icons/all";

import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/Editablerow";


const Plan = () => {

    // Firebase------------------------------------------------

    // const [names, setNames] = useState("");
    // const [reps, setReps] = useState("");
    // const [weight, setWeight] = useState("");
    //
    const [loaders,setLoaders] = useState(false);



    const [exercises, setExercises] = useState(data);
    const [addFormData, setAddFormData] = useState({
        name: '',
        reps: '',
        weight: '',
    });

    const [editFormData, setEditFormData] =useState({
        name: '',
        reps: '',
        weight: '',
    });


    const [editExerciseId, setEditExerciseId] = useState(null);

        const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
        };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName]= fieldValue;

        setEditFormData(newFormData);

    };


    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        setLoaders(true)

        db.collection('exercises').add({
            name: addFormData.name,
            reps: addFormData.reps,
            weight: addFormData.weight,
        })
            .then(() => {
               console.log('')
            })
            .catch((error) => {
                console.log('')
            });

        const newExercise = {
            id: nanoid(),
            name: addFormData.name,
            reps: addFormData.reps,
            weight: addFormData.weight,
        };

        const newExercises = [...exercises, newExercise];
        setExercises(newExercises);

    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedExercise = {
            id: editExerciseId,
            name: editFormData.name,
            reps: editFormData.reps,
            weight: editFormData.weight,
        };

        const newExercises = [...exercises];

        const index = exercises.findIndex((exercise) => exercise.id === editExerciseId);

        newExercises[index] = editedExercise;

        setExercises(newExercises);
        setEditExerciseId(null);
    };

    //button edit exercise
    const handleEditClick = (event, exercise)=> {
        event.preventDefault();
        setEditExerciseId(exercise.id);

        const formValues = {
            name: exercise.name,
            reps: exercise.reps,
            weight: exercise.weight
        };

        setEditFormData(formValues);
    };

    //button cancel exercise
    const handleCancelClick  = () => {
        setEditExerciseId(null)
    }

    //button delete exercise
    const handleDeleteClick = (exerciseId) => {
        const newExercise = [...exercises];
        const index = exercises.findIndex((exercise) => exercise.id === exerciseId);

        //1 bo tyle elementów usunąć
        newExercise.splice(index, 1);

        setExercises(newExercise);

        db.collection("exercises").doc(exerciseId).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };



    //use a firestore data
    useEffect(() => {
        db.collection("exercises")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc ) => {
                    setExercises((state) => [
                        ...state,
                        {
                            ...doc.data(),
                            id: doc.id,
                        },
                    ]);
                });
            });
    }, []);


    return (
        <div className="plan__container">
            <div className="header">
                <h1 className="header__title">Create Workout</h1>
                <div className="header__buttons">
                    <button className="header__buttons__add"><AiOutlinePlusCircle /></button>
                    <button className="header__buttons__del"><AiOutlineMinusCircle /></button>
                </div>
            </div>
            <div className="content">
                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Reps</th>
                                <th>(kg)</th>
                                <th>Act</th>
                            </tr>
                        </thead>
                        <tbody>
                        {exercises.map((exercise) =>(
                            <Fragment>
                                {editExerciseId === exercise.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        exercise={exercise}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>

                <h2>Add new exercise</h2>
                <form onSubmit={handleAddFormSubmit} >
                    <input
                        type="text" name="name"
                        required="required" placeholder="Enter a name"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text" name="reps"
                        required="required" placeholder="Enter a reps"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text" name="weight"
                        required="required" placeholder="Enter a weight"
                        onChange={handleAddFormChange}
                    />
                    <button type="submit"><IoIosAddCircle /></button>
                </form>
            </div>
        </div>
    );
};

export default Plan;
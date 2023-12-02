

import React, { useState } from 'react'
import Card from './Card'


function Todo() {

    //one global edit varible
    let [edit, setEdit] = useState('')
    //state for reding the text
    let [text, SetText] = useState('')
    //globalArr
    let [arr, setArr] = useState([])

    //for setting a value
    function textHandler(e) {
        SetText(e.target.value)
    }
    //this is my deletHandler
    function deleteHandler(id) {
        setArr((pre) => {
            return pre.filter((item) => {
                return item.id != id
            })
        })
    }
    //this is my editHandler
    function editHandler(id) {
        let findData = arr.find((item) => {
            return item.id == id
        })
        if (findData) {
            setEdit(findData)
            SetText(findData.text)
        }
    }
    function deleteAllHandler()
    {
        setArr([])
    }
    //add
    function submitHandler() {
        if (!text) {
            alert('must fill data')
        }
        else {
            if (edit) {

                setArr((pre) => {
                    return pre.map((item) => {
                        if (item.id == edit.id) {

                            return { ...item, text }
                        }
                        else {
                            return item
                        }
                    })
                })
                setEdit('')
            }
            else {
                let data = {
                    id: Math.trunc(Math.random() * 10000),
                    text
                }
                setArr((pre) => {
                    return [...pre, data]
                })
            }


            SetText('')

        }
    }
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center bg-dark text-white">
                <div className="col">
                    <h1 className='display-4'>TODO</h1>
                </div>
            </div>
            <div className="row bg-light ">
                <div className="col m-5">
                    <input type='text' className='form form-control' placeholder='Enter text' onChange={textHandler} value={text} />
                    <br />
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary' onClick={submitHandler}>   {edit ? "EDIT" : "ADD"}</button>
                        <button className='btn btn-danger' onClick={deleteAllHandler}>CLEARALL</button>
                    </div>

                </div>

            </div>

            <Card arr={arr} deleteHandler={deleteHandler} editHandler={editHandler} />
        </div>
    )
}

export default Todo

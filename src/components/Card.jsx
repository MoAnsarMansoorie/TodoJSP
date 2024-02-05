import React from 'react'

function Card({ arr ,deleteHandler,editHandler}) {
    if (arr.length == 0) {
        return (
            <>
                <div className="row bg-white d-flex justify-content-center align-items-center" style={{ height: "50vh", width: "100%" }}>
                    <div className="col">
                        <h1>No data is  there ?</h1>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (<>
            <div className="row bg-dark ">
                {
                    arr.map((item,i) => {
                        return (
                        
                                <div className="col-md-3" key={i}>
                                    <div className="card m-3">
                                        <div className="card-header">
                                            <span>{item.id}</span>
                                        </div>
                                        <div className="card-body">
                                            <span>{item.text}</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-between">
                                                <button className='btn btn-primary' onClick={()=>{
                                                    editHandler(item.id)
                                                }}>edit</button>
                                                <button className='btn btn-danger' onClick={()=>{
                                                    deleteHandler(item.id)
                                                }}>delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })
                }

            </div>
        </>)
    }

}

export default Card

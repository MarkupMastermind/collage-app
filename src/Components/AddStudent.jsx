import React from 'react'

const AddStudent = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">first name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">collage</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">dob</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">course</label>
                        <input type="text" className="form-control" />
                    </div>
                    
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">mobile</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        address
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="p-2 btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/form.css";
import { useFormik } from "formik";
import { toast } from "react-toastify";
export default function Form() {
  const history = useHistory();
  const validate = (values) => {
    const errors = {};
    // ===>>first Name validation<<======
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    } else if (!isNaN(values.firstName)) {
      errors.firstName = "Numbers are not allowed";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Must be more than 2 character";
    } else if (values.firstName.search(/[0-9]/) != -1) {
      errors.firstName = "Numbers are not allowed ";
    } else if (
      values.firstName.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) != -1
    ) {
      errors.firstName = "Character are not allowed ";
    }
    // =============>>||<<============

    // ===>>last Name validation<<======
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    } else if (!isNaN(values.lastName)) {
      errors.lastName = "Numbers are not allowed";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Must be more than 2 character";
    } else if (values.lastName.search(/[0-9]/) != -1) {
      console.log(values.lastName);

      errors.lastName = "Numbers are not allowed ";
    } else if (
      values.lastName.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) != -1
    ) {
      errors.lastName = "Character are not allowed ";
    }
    // =============>>||<<============
    // =============>>email validation<<============
    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.indexOf("@") <= 0) {
      errors.email = "Position of @ is wrong";
    } else if (
      values.email.charAt(values.email.length - 4) != "." &&
      values.email.charAt(values.email.length - 3) != "."
    ) {
      errors.email = "Position of . is wrong";
    }
    // =============>>||<<============

    if (!values.dob) {
      errors.dob = "Required";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.toString().length != 10) {
      errors.phone = "No must be 10 Digits";
    }
    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length < 10) {
      errors.address = "Full address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      phone: "",
      address: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      let req = await axios.post("http://localhost:3001/add-user", values);
      if (req.data.response == "Success") {
        toast.success("user added successfully");
      }
      history.push("/");
    },
  });

  return (
    <>
      <div className="body">
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <div className="container">
              <h2>Add A User</h2>
              <br />
              <div className="innerCont">
                <div className="name">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  <p style={{ fontSize: "15px", color: "red" }}>
                    {formik.errors.firstName ? (
                      <span>{formik.errors.firstName}</span>
                    ) : null}
                  </p>
                </div>
                <div className="name">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  <p style={{ fontSize: "15px", color: "red" }}>
                    {formik.errors.lastName ? (
                      <span>{formik.errors.lastName}</span>
                    ) : null}
                  </p>
                </div>

                <div className="name">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <p style={{ fontSize: "15px", color: "red" }}>
                    {formik.errors.email ? (
                      <span>{formik.errors.email}</span>
                    ) : null}
                  </p>
                </div>
              </div>
              <div className="innerCont">
                <div className="name">
                  <label htmlFor="dob">Last Name</label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="Dob"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                  />
                  <p style={{ fontSize: "15px", color: "red" }}>
                    {formik.errors.dob ? (
                      <span>{formik.errors.dob}</span>
                    ) : null}
                  </p>
                </div>

                <div className="name">
                  <label htmlFor="phone">Phone No</label>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="Phone no"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  <p style={{ fontSize: "15px", color: "red" }}>
                    {formik.errors.phone ? (
                      <span>{formik.errors.phone}</span>
                    ) : null}
                  </p>
                </div>

                <div className="name">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                  <p style={{ fontSize: "15px", color: "red" }}>
                    {formik.errors.address ? (
                      <span>{formik.errors.address}</span>
                    ) : null}
                  </p>
                </div>
              </div>
              <br />
              <div className="btn">
                <input type="submit" id="btn" value="	Submit " />
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Modal from "react-modal";
import { RiCloseLine } from "react-icons/ri";
import Form from "../../../components/UI/Forms/Form";
import FormInput from "../../../components/UI/FormInput/FormInput";
import { useAddDepartmentMutation } from "../../../redux/api/departmentApi";
import toast, { Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    border: "none",
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
};

const AddDepartment = ({ isOpen, onClose }) => {
  const [addDepartment] = useAddDepartmentMutation();
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const res = await addDepartment(values).unwrap();
      if (res?.id) {
        toast("Department Created Sucessfully", {
          icon: (
            <span style={{ color: "white" }}>
              <TiTick />
            </span>
          ),
          style: {
            borderRadius: "10px",
            background: "#9333ea",
            color: "#fff",
          },
          duration: 3000,
        });
      }
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Add Department Modal"
      >
        <div className="bg-white p-6 rounded-lg">
          <div style={customStyles.closeIcon} onClick={onClose}>
            <RiCloseLine size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Add Department</h2>
          <div className="border-b-2 border-gray-200 mb-4"></div>
          <Form submitHandler={onSubmit}>
            <div className="mb-4">
              <FormInput
                type="text"
                label="Department Name"
                name="name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"
                placeholder="Department name"
              />
            </div>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white  bg-purple-600 hover: bg-purple-700 rounded-md"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddDepartment;

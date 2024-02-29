import React, { useState } from "react";
import Modal from "react-modal";
import { RiCloseLine } from "react-icons/ri";
import FormInput from "../../components/UI/FormInput/FormInput";
import Form from "../../components/UI/Forms/Form";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1000px",
    width: "90%",
    maxHeight: "90%",
    overflow: "auto",
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
const AddEmployee = ({ isOpen, onClose }) => {
  const onSubmit = async (values) => {
    console.log(values);
    try {
      //   const res = await AddEmployee(obj).unwrap();
      //   toast(res?.message, {
      //     icon: <span style={{ color: "white" }}>✔</span>,
      //     style: {
      //       borderRadius: "10px",
      //       background: "#22c55e",
      //       color: "#fff",
      //     },
      //     duration: 2000,
      //   });
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Add Employee Modal"
    >
      <div style={customStyles.closeIcon} onClick={onClose}>
        <RiCloseLine size={24} />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center py-10">
        <div className="shadow-sm p-6 rounded-lg border">
          <Form submitHandler={onSubmit} className="m-10">
            <div className="space-y-4">
              <div className=" pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Add New Employee
                </h2>
                <div className="border-b-2 border-gray-400 py-2"></div>

                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-9">
                  <div className="sm:col-span-3">
                    <FormInput
                      name="fName"
                      label="First Name"
                      placeholder="First Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="fName"
                      label="First Name"
                      placeholder="First Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="employmentStatus"
                      label="Employment Status"
                      placeholder="Employment Status"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="lengthofEmployment"
                      label="Length of Employment"
                      placeholder="Length of Employment"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="monthlyIncome"
                      label="Monthly Income"
                      placeholder="Monthly Income"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="managerName"
                      label="Supervisor/Manager Name"
                      placeholder="Supervisor/Manager Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="managerContactNumber"
                      label="Supervisor/Manager Contact Number"
                      placeholder="Supervisor/Manager Contact Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="loanName"
                      label="Loan Name"
                      placeholder="Loan Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="loanAmount"
                      label="Loan Amount"
                      placeholder="Loan Amount"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1Name"
                      label="Reference 1 Name"
                      placeholder="Reference 1 Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1Relationship"
                      label="Relationship"
                      placeholder="Relationship"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1NID"
                      label="Reference 1 NID"
                      placeholder="NID Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference1Contact"
                      label="Reference 1 Contact"
                      placeholder="Contact Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2Name"
                      label="Reference 2 Name"
                      placeholder="Reference 1 Name"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2Relationship"
                      label="Relationship"
                      placeholder="Relationship"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2NID"
                      label="Reference 2 NID"
                      placeholder="NID Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <FormInput
                      name="reference2Contact"
                      label="Reference 2 Contact"
                      placeholder="Contact Number"
                      className="w-[300px] h-[45px] text-sm px-2 py-3  focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-[#012169]"
                    />
                  </div>
                </div>
              </div>
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
      </div>
    </Modal>
  );
};

export default AddEmployee;
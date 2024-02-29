import React from "react";
import Form from "../../components/UI/Forms/Form";
import FormInput from "../../components/UI/FormInput/FormInput";

const LeaveForm = () => {
  const onSubmit = async (values) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="px-[25px] pt-[25px] pb-[40px] bg-[#FAF9F6]">
        <h1 className="text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer">
          Leave
        </h1>
        <div className="w-full mt-8 space-y-4 bg-white p-5">
          <Form submitHandler={onSubmit}>
            <div className="flex flex-wrap -mx-2">
              {/* For large and extra-large devices (lg, xl) */}

              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                />
              </div>
              <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-2 ">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
              >
                Add
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LeaveForm;

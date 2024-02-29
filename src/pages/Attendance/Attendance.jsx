import React, { useState, useEffect, useCallback, useMemo } from "react";
import { format } from "date-fns";
import Clock from "./Clock";
import {
  useAddAttendanceMutation,
  useAttendancesQuery,
  useUpdateAttendanceMutation,
} from "../../redux/api/attendance";
import toast from "react-hot-toast";
import { ToastProvider } from "@chakra-ui/react";

const AttendancePage = () => {
  const [todayDate, setTodayDate] = useState(new Date());
  const [officeHours] = useState("9:00 AM - 5:00 PM");

  const getCurrentTimeFormatted = () => {
    const currentTime = new Date();
    const formattedTime = format(currentTime, "hh:mm a");
    return formattedTime;
  };

  const { data } = useAttendancesQuery();
  const attendanceData = data?.data;
  const [addAttendance] = useAddAttendanceMutation();
  const [updateAttendance] = useUpdateAttendanceMutation();

  const arrival = getCurrentTimeFormatted();

  const handleCheckIn = async () => {
    const data = {
      date: format(todayDate, "yyyy-MM-dd"),
      arrival: arrival,
      departure: "none",
      userId: "d66bb296-f0df-4a1c-bc3e-f6364ee0f2ff",
    };
    const res = await addAttendance(data);
    console.log(res.data?.message);
    if (res) {
      toast(res?.data?.message || "Checked In Sucessfully", {
        icon: <span style={{ color: "white" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#6b21a8",
          color: "#fff",
        },
      });
    }
  };
  const handleSignOut = async (id) => {
    const res = await updateAttendance(id);
    if (res) {
      toast(res?.data?.message || "Sign Out Sucessfully", {
        icon: <span style={{ color: "white" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#6b21a8",
          color: "#fff",
        },
      });
    }
  };
  return (
    <>
      <ToastProvider position="top-right" reverseOrder={false} />
      <section class="px-[25px] pt-[25px] pb-[40px] bg-[#FAF9F6]">
        <div class="sm:flex sm:items-center sm:justify-between">
          <h1 className="text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer">
            Attendance
          </h1>
        </div>

        <div className="flex items-center justify-center bg-white mt-4  ">
          {/* Office Hours Div */}
          <div className=" p-4 flex items-center justify-center">
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Office Hours:
              </p>
              <p className="font-semibold">{officeHours}</p>
            </div>
          </div>

          {/* Date Div */}
          <div className=" p-4 flex items-center justify-center">
            <div>
              <p className="block text-sm font-medium text-gray-700">
                Today's Date:
              </p>
              <p className="font-semibold">{format(todayDate, "yyyy-MM-dd")}</p>
            </div>
          </div>

          {/* Check In Button */}
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleCheckIn}
            className={`bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            Check In
          </button>
        </div>

        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        First-in (Arrival)
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Last Out (Departure)
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action(s)
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {attendanceData?.map((data) => (
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                      key={data?.id}
                    >
                      <tr>
                        <td class="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                          {data?.date}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data?.arrival}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data?.departure}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data?.Users?.name}
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            className={`bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleSignOut(data?.id)}
                          >
                            Sign Out
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttendancePage;

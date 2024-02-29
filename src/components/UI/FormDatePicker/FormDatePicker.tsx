import React, { ChangeEvent, useEffect } from "react";
import {
  Controller,
  useFormContext,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";
//@ts-ignore
import dayjs, { Dayjs } from "dayjs";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

interface FormDatePickerProps {
  name: string;
  label?: string;
  onChange?: (selectedDate: Dayjs, formattedDate: string) => void;
  size?: "large" | "small"; 
  className?:string;
 
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, label, onChange, size = "large",className }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = dayjs(e.target.value);
    onChange?.(selectedDate, selectedDate.format("YYYY-MM-DD"));
    setValue(name, selectedDate.format("YYYY-MM-DD"));
  };

  return (
    <div>
       {label && (
  <label
    htmlFor={name}
    className="text-sm  text-black rounded-md p-2 block  "
  >
    {label}
  </label>
)}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="date"
            value={field.value ? dayjs(field.value).format("YYYY-MM-DD") : ""}
            onChange={handleOnChange}
            className={`${className}`}
          />
        )}
      />
      {errorMessage && (
        <p className="text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormDatePicker;

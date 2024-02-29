import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-600 block mb-2"
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            <input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              className={className}
              // You can use customStyle prop for additional styling
            />
            {errorMessage && (
              <small className="text-red-500 mt-1">{errorMessage}</small>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FormInput;

import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, rightIcon, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                rightIcon={rightIcon}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;

'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface FormData {
    avatar: string;
    fullName: string;
    email: string;
    userName: string;
}

interface FormContextType {
    formData: FormData | null;
    setFormData: Dispatch<SetStateAction<FormData | null>>;
}


const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [formData, setFormData] = useState<FormData | null>(null);
  
    return (
      <FormContext.Provider value={{ formData, setFormData }}>
        {children}
      </FormContext.Provider>
    );
  };

  // Custom hook to use the context
  export const UseFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
  };
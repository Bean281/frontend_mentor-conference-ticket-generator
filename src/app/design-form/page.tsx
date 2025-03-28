"use client";

import Image from "next/image";
import iconUpload from "../../public/assets/images/icon-upload.svg";
import infoIcon from "../../public/assets/images/icon-info.svg";
import BackGroundLayout from "@/components/BackGroundLayout";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { UseFormContext } from "@/context/FormContext";

const DesignForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      avatar: null,
      fullName: "",
      email: "",
      userName: "",
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dataURL, setDataURL] = useState<string>("");
  // const [uploadedURL, setUploadedURL] = useState<string>("");
  const route = useRouter();
  const {setFormData} = UseFormContext();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    //Validate file size
    if (file.size > 500 * 1024) {
      alert("File size is too large. Please upload a file less than 500KB.");
      return;
    }

    //Validate file type
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Invalid file type. Please upload a file of type JPG or PNG.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setDataURL(reader.result as string);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, acceptedFiles, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
      },
      maxFiles: 1,
      maxSize: 500 * 1024,
    });

  const selectedFile = acceptedFiles[0];
  console.log(">>>selectedFile: ", selectedFile);

  const handleRemoveImage = () => {
    setDataURL("");
  };

  const handleChangeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input's click event
    }
  };

  const onSubmit = (data: any) => {
    // Actual form submission logic
    const formData = {
      ...data,
      avatar: dataURL,
    };

    setFormData(formData);

    route.push(`/design-ticket`);
    // Example: Send data to an API\


    console.log("Submitting form data:", formData);
    reset();
    setDataURL("");
  };

  return (
    <BackGroundLayout>
      <div className="container-form center flex flex-col items-center bg-cover bg-center bg-no-repeat pb-15">
        <div className="hearder_title text-neutral-0 mt-12 text-center text-3xl font-bold lg:text-5xl">
          <span>Your Journey to Coding</span>
          <br />
          <span>Conf 2025 Starts Here!</span>
        </div>

        <div className="header_dsc mt-5 w-5/6 text-center text-xl text-neutral-300">
          Secure your spot at next year’s biggest coding conference.
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form-ctn">
          <label>
            Upload Avatar
            {/* <input
              {...register("avatar")}
              placeholder="Drag and drop or click to upload"
            /> */}
            {dataURL ? (
              <div className="uploadImage ctn-img mt-3 flex h-40 w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed border-neutral-200">
                <div className="upload-icon-ctn flex w-18 items-center justify-center rounded-2xl border-2 border-neutral-700">
                  <img
                    src={dataURL}
                    alt="user-avartar"
                    className="uploaded-image rounded-2xl"
                  />
                </div>
                <div className="uploadAction flex gap-3">
                  <button
                    type="button"
                    className="removeButton cursor-pointer rounded-lg bg-neutral-700 px-1.5 py-1 text-base"
                    onClick={handleRemoveImage}
                  >
                    Remove image
                  </button>
                  <button
                    type="button"
                    className="changeButton cursor-pointer rounded-lg bg-neutral-700 px-1.5 py-1 text-base"
                    onClick={handleChangeImage}
                  >
                    Change image
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="ctn-img mt-3 flex h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-200"
                {...getRootProps()}
              >
                <input {...getInputProps()} ref={fileInputRef} />
                {isDragActive ? (
                  <div className="upload-icon-ctn flex items-center justify-center rounded-xl border-1 border-neutral-700 bg-neutral-700 p-2 shadow">
                    {/* <Image src={dataURL} alt="icon-upload" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="50"
                      width="50"
                      fill="currentColor"
                    >
                      <path d="M1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811L7 21C3.64378 20.7257 1 17.9216 1 14.5ZM16.8483 18.9868C19.1817 18.8093 21 16.8561 21 14.5C21 12.927 20.1884 11.4962 18.8771 10.6781L18.0714 10.1754L17.9517 9.23338C17.5735 6.25803 15.0288 4 12 4C8.97116 4 6.42647 6.25803 6.0483 9.23338L5.92856 10.1754L5.12288 10.6781C3.81156 11.4962 3 12.927 3 14.5C3 16.8561 4.81833 18.8093 7.1517 18.9868L7.325 19H16.675L16.8483 18.9868ZM13 13V17H11V13H8L12 8L16 13H13Z"></path>
                    </svg>
                  </div>
                ) : (
                  <>
                    <div className="upload-icon-ctn flex items-center justify-center rounded-xl border-1 border-neutral-700 bg-neutral-700 p-2 shadow">
                      <Image src={iconUpload} alt="icon-upload" />
                    </div>
                    <div className="upload-des mt-2 text-center text-base font-light text-neutral-300">
                      <p>Drag and drop or click to upload</p>
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="msg-ctn flex w-full items-center gap-1.5 p-0 pt-3 text-left text-neutral-500">
              <Image src={infoIcon} alt="icon info" className="iconInfo" />
              <p className="text-left text-xs">
                Upload your photo (JPG or PNG, max size: 500KB).
              </p>
            </div>
          </label>
          <label>
            Full Name
            <input
              {...register("fullName", {
                required: "Fullname is required",
              })}
              placeholder="Your fullname"
              className={`${errors.email && "border-red-500 focus:border-red-500"}`}
            />
          </label>
          {errors.fullName && (
            <div className="msg-ctn flex w-full items-center gap-1.5 p-0 pt-1 text-left text-orange-500">
              <Image
                src={infoIcon}
                alt="icon info"
                className="iconInfo text-orange-500"
              />
              <p className="text-md text-left">{errors.fullName?.message}</p>
            </div>
          )}

          <label>
            Email Address
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="example@email.com"
              className={`${errors.email && "border-red-500 focus:border-red-500"}`}
            />
          </label>
          {errors.email && (
            <div className="msg-ctn flex w-full items-center gap-1.5 p-0 pt-1 text-left text-orange-500">
              <Image
                src={infoIcon}
                alt="icon info"
                className="iconInfo text-orange-500"
              />
              <p className="text-md text-left">{errors.email?.message}</p>
            </div>
          )}

          <label>
            Github Username
            <input
              {...register("userName", {
                required: "Github usename is required",
              })}
              placeholder="@yourusername"
              className={`${errors.userName && "border-red-500 focus:border-red-500"}`}
            />
          </label>
          {errors.userName && (
            <div className="msg-ctn flex w-full items-center gap-1.5 p-0 pt-1 text-left text-orange-500">
              <Image
                src={infoIcon}
                alt="icon info"
                className="iconInfo text-orange-500"
              />
              <p className="text-md text-left">{errors.userName?.message}</p>
            </div>
          )}
          <button
            type="submit"
            className="relative z-10 mt-7 mb-12 w-full rounded-lg border bg-orange-500 p-3 text-xl font-bold"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </BackGroundLayout>
  );
};

export default DesignForm;

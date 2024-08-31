"use client";

import React, { useEffect, useState } from "react";
import Input from "../atoms/Input";

import Mobile from "../../../public/mobile.svg";
import { Button } from "../common/Button";
import { useMutation } from "@tanstack/react-query";
import { sendNumber } from "@/utils/api/handler";
import toast, { LoaderIcon } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import convertToPersianNumbers from "@/utils/helper/convertToPersianNumbers";

function BoxSentCode() {
  const [InputValue, setInputValue] = useState("");

  const { mutateAsync: sendNumberMutation, isPending } = useMutation({
    mutationKey: ["send-number"],
    mutationFn: sendNumber,
    onSuccess: () => {
      toast.success("با موفقیت شماره ارسال شد");
    },
    onError: (err) => {
      toast.error(`خطا :${err.message}`);
    },
  });

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .matches(/^[۰-۹]*$/, "فقط اعداد مجازه")
        .matches(/^۰۹[0-۹]{9}$/, "شماره باید با ۰۹ شروع شه و ۱۱ رقم باشه")
        .required("پرکردن این فیلد الزامیه"),
    }),
    onSubmit: (values) => {
      sendNumberMutation();
    },
  });

  const handleChange = (event) => {
    const { value } = event.target;
    formik.setFieldValue("number", convertToPersianNumbers(value));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className={
          "bg-light-orange relative max-w-[400px] md:max-w-[500px] w-full h-full rounded-[40px] flex items-center justify-between px-2 py-1.5 md:p-2.5"
        }
      >
        <div className="flex gap-4 items-center justify-center -translate-x-1.5">
          <Mobile className="scale-75 brightness-0" />
          <div className="bg-black/10 !rounded-full w-[2px] h-[30px]"></div>
          <Input
            type="text"
            placeholder="مثال: ۰۹۹۱۳۹۱۵۲۵۴"
            maxLength={11}
            className={"placeholder:opacity-45"}
            {...formik.getFieldProps("number")}
            onChange={handleChange}
          />
          <AnimatePresence>
            {formik.errors.number && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="absolute -bottom-10 right-3 !text-rose-600"
              >
                {formik.errors.number}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <Button
          intent="orange"
          size="medium"
          rounded="full"
          type="submit"
          className="text-sm px-4 md:!px-7"
          disabled={isPending}
        >
          {isPending ? <LoaderIcon className="!w-5 !h-5 m-1.5" /> : "ارسال کد"}
        </Button>
      </form>
    </div>
  );
}

export default BoxSentCode;

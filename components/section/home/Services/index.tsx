"use client"
import { FC, useState, useEffect } from "react";

import Button from "@/components/UI/Button";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

const Services: FC = () => {


  return (
    <div className=" w-full h-auto bg-secondary px-5 py-5">
          <div className=" text-white items-center justify-center flex-wrap hidden lg:flex">
              <div  className=" flex flex-col items-center justify-center text-lg lg:text-xl px-8 py-2 lg:py-5 space-y-4">
                <MdPayment className=" text-primary text-xl lg:text-5xl"/>
                <p>Secure Payments</p>
              </div>

              <div className=" flex flex-col items-center justify-center text-lg  lg:text-xl px-8 py-2 lg:py-5 space-y-4">
                <TbTruckDelivery className="text-primary text-xl  lg:text-5xl"/>
                <p>Fast Delivery</p>
              </div>

              <div className=" flex flex-col items-center justify-center text-lg  lg:text-xl px-8 py-2 lg:py-5 space-y-4">
              <MdSentimentVerySatisfied className="text-primary text-xl  lg:text-5xl"/>
              <p>Customer Satisfaction</p>
              </div>

              <div className=" flex flex-col items-center justify-center text-lg  lg:text-xl px-8 py-2 lg:py-5 space-y-4">
              <MdSupportAgent className=" text-primary text-xl  lg:text-5xl"/>
              <p>Top notch support</p>
              </div>
          </div>
    </div>
  );
};

export default Services;

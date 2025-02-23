 import { Spinner } from "@/components/global/loader/spinner";
import React from "react";


const AuthLoading = () => {
  return (
    <div className="flex  items-center h-screen w-full justify-center">
        <Spinner />
    </div>
  );
};

export default AuthLoading;

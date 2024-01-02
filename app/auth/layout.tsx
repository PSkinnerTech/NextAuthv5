import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full flex items-center justify-center bg-sky-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 to-black">
      {children}
    </div>
  );
};

export default AuthLayout;

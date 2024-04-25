import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminIcon from "../assets/icons/icons8-admin-96.png";

const AdminProfileIcon = () => {
  return (
    <div className=" grid place-items-center">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <div className="w-[50px] grid place-items-center bg-primary rounded-full p-[5px] cursor-pointer transition-colors delay-[0.02s] hover:bg-Secondary">
          <img className=" relative bottom-[3px]" src={AdminIcon} />
        </div>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className=""
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="relative top-[20px] right-[20px] w-64 bg-white p-6 shadow-xl">
      <div className="space-y-3">        
        <a href="#" className="block text-sm hover:underline">
          Profile
        </a>
        <a href="#" className="block text-sm hover:underline">
          Log Out
        </a>
      </div>
         
    </div>
  );
};

export default AdminProfileIcon;

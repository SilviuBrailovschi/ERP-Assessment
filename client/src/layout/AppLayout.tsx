import React from "react";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>

      <div
        className={[
          "flex-1 transition-all duration-300 ease-in-out",
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]",
          isMobileOpen ? "ml-0" : "",

          "flex flex-col h-screen",

          "bg-gray-50 dark:bg-gray-800",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="flex-none sticky top-0 z-20">
          <AppHeader />
        </div>
        <div className="flex-1 overflow-auto p-4  md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => (
  <SidebarProvider>
    <LayoutContent />
  </SidebarProvider>
);

export default AppLayout;

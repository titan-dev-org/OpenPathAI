"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Navbar onToggleSidebar={() => setOpen((o) => !o)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main
        className={`pt-16 transition-all duration-300 ${
          open ? "lg:pl-64" : "lg:pl-0"
        }`}
      >
        {children}
      </main>
    </>
  );
          }

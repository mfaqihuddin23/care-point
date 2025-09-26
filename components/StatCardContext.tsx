"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface StatCardContextType {
  expandedCategory: string | null;
  setExpandedCategory: (category: string | null) => void;
  cardId: string;
}

const StatCardContext = createContext<StatCardContextType | undefined>(undefined);

export function StatCardProvider({ children }: { children: ReactNode }) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <StatCardContext.Provider value={{ expandedCategory, setExpandedCategory, cardId: "global" }}>
      {children}
    </StatCardContext.Provider>
  );
}

export function useStatCard() {
  const context = useContext(StatCardContext);
  if (context === undefined) {
    throw new Error("useStatCard must be used within a StatCardProvider");
  }
  return context;
}

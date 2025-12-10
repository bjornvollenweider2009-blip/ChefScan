"use client";

import { useState } from "react";
import { generateMealPlan, MealDay } from "@/lib/mockData";
import { CalendarDays, RefreshCw } from "lucide-react";

export default function MealPlanPage() {
  const [goal, setGoal] = useState("aucun");
  const [plan, setPlan] = useState<MealDay[] | null>(null);

  const handleGenerate = () => {
    setPlan(generateMealPlan(goal));
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Planning de la Semaine</h1>
          <p className="text-slate-500">Organisez vos repas selon vos objectifs.</p>
        </div>
        
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <select 
            className="rounded-lg border-slate-200 p-2.5"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="aucun">Standard</option>
            <option value="perte">Perte de poids</option>
            <option value="masse">Prise de masse</option>
          </select>
          <button 
            onClick={handleGenerate}
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-bold text-white hover:bg-orange-700"
          >
            <RefreshCw size={18} /> Générer
          </button>
        </div>
      </div>

      {!plan ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-400">
          <CalendarDays className="mb-4 h-12 w-12 opacity-20" />
          <p>Cliquez sur "Générer" pour créer votre planning</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plan.map((day, idx) => (
            <div key={idx} className="flex flex-col rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="mb-4 border-b pb-2 font-bold text-primary">{day.day}</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Midi</span>
                  <p className="font-medium text-slate-800">{day.lunch}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Soir</span>
                  <p className="font-medium text-slate-800">{day.dinner}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

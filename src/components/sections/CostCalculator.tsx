"use client";

import { useState, useCallback } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface CostCalculatorProps {
  title: string;
  fields: { label: string; key: string; defaultValue: number }[];
  totalLabel: string;
  resetLabel: string;
}

export function CostCalculator({
  title,
  fields,
  totalLabel,
  resetLabel,
}: CostCalculatorProps) {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(fields.map((f) => [f.key, f.defaultValue]))
  );

  const total = Object.values(values).reduce((sum, v) => sum + v, 0);

  const handleChange = useCallback((key: string, raw: string) => {
    const num = parseInt(raw.replace(/\D/g, ""), 10);
    setValues((prev) => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  }, []);

  const reset = useCallback(() => {
    setValues(Object.fromEntries(fields.map((f) => [f.key, f.defaultValue])));
  }, [fields]);

  const formatPLN = (n: number) =>
    n.toLocaleString("pl-PL", {
      style: "currency",
      currency: "PLN",
      minimumFractionDigits: 0,
    });

  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-dark-teal/8 flex items-center justify-center">
                <Calculator size={20} className="text-dark-teal" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-text-dark">
                {title}
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-light-gray p-6 shadow-sm">
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.key}>
                    <label className="text-sm text-text-mid font-medium block mb-1.5">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={(values[field.key] ?? 0).toLocaleString("pl-PL")}
                        onChange={(e) =>
                          handleChange(field.key, e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg border border-light-gray text-text-dark font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-mid-teal/40 focus:border-mid-teal transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-mid text-sm">
                        zł
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-light-gray">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-text-mid uppercase tracking-wider">
                    {totalLabel}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-dark-teal">
                    {formatPLN(total)}
                  </span>
                </div>
              </div>

              <button
                onClick={reset}
                className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-text-mid hover:text-dark-teal py-2 transition-colors cursor-pointer"
              >
                <RotateCcw size={14} />
                {resetLabel}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

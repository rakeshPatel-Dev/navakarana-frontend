import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function MetricCard({ label, value, tone = "slate" }) {
  const toneClasses = {
    red: "from-red-950/90 to-red-900/40 border-red-700/40",
    green: "from-emerald-950/90 to-emerald-900/30 border-emerald-700/40",
    blue: "from-indigo-950/90 to-indigo-900/30 border-indigo-700/40",
    purple: "from-purple-950/90 to-purple-900/30 border-purple-700/40",
    slate: "from-slate-950/90 to-slate-900/50 border-slate-700/40",
  }

  return (
    <div className={cn("rounded-2xl border bg-linear-to-r p-5", toneClasses[tone] || toneClasses.slate)}>
      <p className="text-sm text-zinc-300">{label}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-white">{value}</p>
    </div>
  )
}

function StatusPill({ label, tone = "green", className }) {
  const tones = {
    green: "bg-emerald-600/20 text-emerald-300 border-emerald-500/35",
    blue: "bg-blue-600/20 text-blue-300 border-blue-500/35",
    red: "bg-red-600/20 text-red-300 border-red-500/35",
    yellow: "bg-amber-600/20 text-amber-300 border-amber-500/35",
    slate: "bg-zinc-600/20 text-zinc-300 border-zinc-500/35",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone] || tones.slate,
        className
      )}
    >
      {label}
    </span>
  )
}

function FilterPanel({ children, className }) {
  return (
    <section className={cn("rounded-2xl border border-white/10 bg-slate-950/70 p-4", className)}>
      {children}
    </section>
  )
}

function FilterSelect({ placeholder, options = [], className }) {
  return (
    <Select defaultValue={options[0] ?? placeholder}>
      <SelectTrigger className={cn("w-full bg-slate-900 text-zinc-200", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export { MetricCard, StatusPill, FilterPanel, FilterSelect }

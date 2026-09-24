import { cn } from "@/lib/utils"

interface CodeLineProps {
  children: React.ReactNode
  className?: string
}

function CodeLine({ children, className }: CodeLineProps) {
  return <span className={cn(className)}>{children}</span>
}

export default function CodeTerminal() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-border bg-[#111214] font-mono text-xs leading-7 text-[#d8d8d2] shadow-xl"
    >
      <div className="flex items-center gap-1.5 border-b border-[#26272a] px-3.5 py-3">
        <span className="size-2.5 rounded-full bg-[#34353a]" />
        <span className="size-2.5 rounded-full bg-[#34353a]" />
        <span className="size-2.5 rounded-full bg-[#34353a]" />

        <span className="ml-2 text-[11px] text-[#7a7b80]">
          storepilot / app / dues / route.ts
        </span>
      </div>

      <pre className="m-0 overflow-x-auto p-4 text-[11px] leading-7 sm:text-xs">
        <CodeLine className="text-[#6b6c72]">
          {"// idea → interface → working product"}
        </CodeLine>
        {"\n"}
        <CodeLine className="text-[#9aa4ff]">
          {"export async function"}
        </CodeLine>{" "}
        {"GET() {"}
        {"\n"}
        {"  "}
        <CodeLine className="text-[#9aa4ff]">{"const"}</CodeLine> {"dues = "}
        <CodeLine className="text-[#9aa4ff]">{"await"}</CodeLine>{" "}
        {"Customer.aggregate(["}
        {"\n"}
        {"    { $match: { balance: { $gt: "}
        <CodeLine className="text-[#8fd3a8]">{"0"}</CodeLine>
        {" } } },"}
        {"\n"}
        {"    { $sort: { balance: "}
        <CodeLine className="text-[#8fd3a8]">{"-1"}</CodeLine>
        {" } },"}
        {"\n"}
        {"  ]);"}
        {"\n"}
        {"  "}
        <CodeLine className="text-[#9aa4ff]">{"return"}</CodeLine>{" "}
        {"Response.json(dues);"}
        {"\n"}
        {"}"}
        {"\n\n"}
        <CodeLine className="text-[#6b6c72]">
          {"// Next.js · TypeScript · MongoDB"}
        </CodeLine>
      </pre>
    </div>
  )
}

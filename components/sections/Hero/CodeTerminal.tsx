import { cn } from "@/lib/utils"

interface CodeLineProps {
  children: React.ReactNode
  className?: string
}

function CodeLine({ children, className }: CodeLineProps) {
  return <span className={cn(className)}>{children}</span>
}

const codeLines = [
  {
    number: 1,
    content: (
      <CodeLine className="text-[#73757a]">
        {"// idea → interface → working product"}
      </CodeLine>
    ),
  },
  {
    number: 2,
    content: <span />,
  },
  {
    number: 3,
    content: (
      <>
        <CodeLine className="text-[#f0a36b]">
          {"export async function"}
        </CodeLine>{" "}
        <span className="text-[#e7e7e2]">GET()</span>{" "}
        <span className="text-[#b9bbb6]">{"{"}</span>
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        {"  "}
        <CodeLine className="text-[#f0a36b]">const</CodeLine>{" "}
        <span className="text-[#e7e7e2]">dues</span>{" "}
        <span className="text-[#73757a]">=</span>{" "}
        <CodeLine className="text-[#f0a36b]">await</CodeLine>{" "}
        <span className="text-[#d1d2cd]">Customer.aggregate</span>
        <span className="text-[#b9bbb6]">{"(["}</span>
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        {"    "}
        <span className="text-[#b9bbb6]">{"{ $match: { balance: { $gt: "}</span>
        <CodeLine className="text-[#a8d49b]">0</CodeLine>
        <span className="text-[#b9bbb6]">{" } } },"}</span>
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        {"    "}
        <span className="text-[#b9bbb6]">{"{ $sort: { balance: "}</span>
        <CodeLine className="text-[#a8d49b]">-1</CodeLine>
        <span className="text-[#b9bbb6]">{" } },"}</span>
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        {"  "}
        <span className="text-[#b9bbb6]">{"]);"}</span>
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        {"  "}
        <CodeLine className="text-[#f0a36b]">return</CodeLine>{" "}
        <span className="text-[#d1d2cd]">Response.json</span>
        <span className="text-[#b9bbb6]">(dues);</span>
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        <span className="text-[#b9bbb6]">{"}"}</span>
      </>
    ),
  },
  {
    number: 10,
    content: <span />,
  },
  {
    number: 11,
    content: (
      <CodeLine className="text-[#73757a]">
        {"// Next.js · TypeScript · MongoDB"}
      </CodeLine>
    ),
  },
]

export default function CodeTerminal() {
  return (
    <div
      aria-hidden="true"
      className="group w-full overflow-hidden rounded-2xl border border-[#292b2e] bg-[#111214] font-mono shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)]"
    >
      {/* Window header */}
      <div className="flex min-w-0 items-center border-b border-[#292b2e] px-3 py-3 sm:px-4 sm:py-3.5">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#34363a] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#34363a] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#34363a] sm:size-2.5" />
        </div>

        <div className="mx-2 min-w-0 flex-1 truncate rounded-md bg-[#191a1d] px-2.5 py-1 text-center text-[9px] text-[#77797e] sm:mx-auto sm:max-w-[260px] sm:px-3 sm:text-[10px]">
          storepilot / app / dues / route.ts
        </div>

        <div className="hidden w-[42px] shrink-0 sm:block" />
      </div>

      {/* Code */}
      <div className="w-full overflow-x-auto px-2.5 py-4 sm:px-4 sm:py-5">
        <pre className="m-0 w-max min-w-full text-[9px] leading-6 sm:text-[11px] sm:leading-7">
          {codeLines.map((line) => (
            <div key={line.number} className="flex">
              <span className="mr-3 w-3 shrink-0 text-right text-[#414348] select-none sm:mr-5 sm:w-4">
                {line.number}
              </span>

              <code className="whitespace-pre">{line.content}</code>
            </div>
          ))}
        </pre>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-[#292b2e] px-3 py-2 text-[8px] tracking-wide text-[#64666b] sm:px-4 sm:text-[9px]">
        <span>TypeScript</span>

        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#7cae70]" />
          Ready
        </span>
      </div>
    </div>
  )
}

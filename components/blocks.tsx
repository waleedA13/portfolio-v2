import type { Block } from "@/data/types";
import { asset } from "@/lib/asset";
import { Rich } from "./rich-text";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4 text-[1.05rem] leading-7 text-soft">
      {blocks.map((block, index) => {
        if (block.kind === "p") return <p key={index}><Rich text={block.text} /></p>;
        if (block.kind === "h3") return <h3 key={index} className="pt-3 font-display text-lg text-ink">{block.text}</h3>;
        if (block.kind === "ul" || block.kind === "ol") {
          const Tag = block.kind === "ul" ? "ul" : "ol";
          return (
            <Tag key={index} className={block.kind === "ul" ? "list-disc space-y-2 pl-5" : "list-decimal space-y-2 pl-5"}>
              {block.items.map((item) => (
                <li key={item}><Rich text={item} /></li>
              ))}
            </Tag>
          );
        }
        if (block.kind === "table") {
          return (
            <div key={index}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="border-b-2 border-ink px-3 py-2 text-left font-mono text-[0.7rem] font-medium uppercase tracking-wider text-faint">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={row.join()} className={rowIndex === block.highlight ? "font-semibold text-ink" : undefined}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className={`border-b border-rule px-3 py-2 align-top ${cellIndex === 0 && rowIndex === block.highlight ? "border-l-[3px] border-l-accent" : ""} ${cellIndex > 0 ? "text-right tabular-nums" : ""}`}>
                            <Rich text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.note ? <p className="mt-2 font-mono text-xs leading-5 text-faint"><Rich text={block.note} /></p> : null}
            </div>
          );
        }
        if (block.kind !== "figure") return null;
        return (
          <figure key={index} className="pt-2">
            <div className={block.images.length > 1 ? "grid gap-3 sm:grid-cols-2" : undefined}>
              {block.images.map((image) => (
                <div key={image.src} className={block.plate ? "rounded bg-white p-2" : undefined}>
                  <img
                    src={asset(image.src)}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="w-full rounded border border-rule"
                  />
                </div>
              ))}
            </div>
            <figcaption className="mt-2 font-mono text-xs leading-5 text-faint"><Rich text={block.caption} /></figcaption>
          </figure>
        );
      })}
    </div>
  );
}

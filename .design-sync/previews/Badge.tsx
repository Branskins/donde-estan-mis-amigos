import { Badge } from "@portfolio/ui";

export function TechStack() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge>typescript</Badge>
      <Badge>next.js</Badge>
      <Badge>node</Badge>
      <Badge>postgres</Badge>
    </div>
  );
}

export function Single() {
  return <Badge>react</Badge>;
}

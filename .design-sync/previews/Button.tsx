import { Button } from "@portfolio/ui";

export function Primary() {
  return <Button variant="primary">Save changes</Button>;
}

export function Secondary() {
  return <Button variant="secondary">Cancel</Button>;
}

export function Ghost() {
  return <Button variant="ghost">Learn more</Button>;
}

export function Disabled() {
  return (
    <Button variant="primary" disabled>
      Processing…
    </Button>
  );
}

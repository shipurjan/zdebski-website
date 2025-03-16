import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Button appName="web">Click me</Button>
      <Code>apps/web/src/app/page.tsx</Code>
      <Card title="card" href="google.com">
        A card component
      </Card>
    </div>
  );
}

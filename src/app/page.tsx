import State from "@/components/state";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Todo app</h2>
      <State />
    </main>
  );
}

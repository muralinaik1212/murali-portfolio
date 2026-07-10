import { PROFILE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="max-w-3xl px-6">
        <p className="text-sky-400">Hello, I'm</p>

        <h1 className="mt-2 text-6xl font-bold">
          {PROFILE.name}
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          {PROFILE.role}
        </p>

        <p className="mt-6 text-zinc-500">
          {PROFILE.description}
        </p>
      </div>
    </section>
  );
}
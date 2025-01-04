import profile from "@repo/data/profile";

export default function Page() {
  return (
    <main
      className={
        "max-w-3xl mx-auto bg-stone-900 text-white flex flex-col gap-6 text-center"
      }
    >
      <div>
        <h1 className="text-5xl font-bold">Hello, World!</h1>
        <p className="text-xl">{profile.about}</p>
      </div>
    </main>
  );
}

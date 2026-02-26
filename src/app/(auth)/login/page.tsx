import { LoginForm } from "@/features/auth/components";


const Page = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-display-sm font-bold text-neutral-950">
          Login
        </h1>
        <p className="text-md font-semibold text-neutral-700">
          Sign in to manage your library account.
        </p>
      </div>
      <LoginForm />

    </div>
  );
};

export default Page;
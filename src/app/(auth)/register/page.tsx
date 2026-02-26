import { RegisterForm } from "@/features/auth/components/RegisterForm";


const Page = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-display-sm font-bold text-neutral-950">Register</h1>
        <p className="text-md font-semibold text-neutral-700">
          Create your account to start borrowing books.
        </p>
      </div>


      <RegisterForm />
    </div>
  );
};

export default Page;
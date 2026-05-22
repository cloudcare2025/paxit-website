import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Support Login",
  description: "Access the PAXIT support portal for software downloads, updates, and customer resources.",
};

export default function LoginPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <div className="absolute inset-0 gradient-mesh grid-pattern" />
      <div className="grain-overlay absolute inset-0" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-white">Support Login</h1>
            <p className="mt-3 text-slate-300">
              Access the PAX-it support portal for software downloads, updates, and customer resources.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="login-email"
                className="mt-1.5 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                className="mt-1.5 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
                placeholder="Enter your password"
              />
            </div>
            <Button className="w-full" size="lg">
              Sign In
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <a href="/contact-us" className="font-medium text-paxit-blue-light hover:underline">
                Contact us
              </a>{" "}
              for access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

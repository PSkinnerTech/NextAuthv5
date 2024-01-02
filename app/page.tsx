import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { LoginButton } from "@/components/auth/login-button";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 to-black">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg text-center">A simple auth service</p>
        <div className="flex justify-center items-center">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

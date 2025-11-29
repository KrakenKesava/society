import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-white text-xl">Welcome to the Home Page</h1>
        <div className="flex flex-row">
          <Button variant="outline" className="m-4" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button variant="outline" className="m-4" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
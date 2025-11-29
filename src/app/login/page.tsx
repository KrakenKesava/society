import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-black">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-white text-xl">Login Page</h1>
                <Input
                    type="email"
                    placeholder="Email"
                    className="m-4 text-white placeholder:text-white/60 bg-white/5"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="m-4 text-white placeholder:text-white/60 bg-white/5"
                />
                <Button className="mt-4" asChild>
                    <Link href="/dashboard" className="">
                        Login
                    </Link>
                </Button>                
            </div>
        </main>
    );
}
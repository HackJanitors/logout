import Image from "next/image";
import { SignIn, SignUp, SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
        </div>
    );
}

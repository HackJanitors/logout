import Image from "next/image";
import { SignIn, SignUp, SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="mt-10">
      <SignedOut>
        <div className="flex justify-around h-full w-full items-center">
          <div>
            <Image src="https://i.pinimg.com/originals/1c/64/1c/1c641ce78849206abd8b269a788c1c81.png" alt="A broken controller" width={540} height={500} />
          </div>
          <div className="flex flex-col">
            <div className="font-extrabold leading-[80px] tracking-tighter text-7xl">
              Help Your Child <br /> Level Up
            </div>
            
            <div className="font-medium text-2xl leading-[40px] mt-10">
              Easily track and reward your children's gaming habits
              <br/>
              and donate to help others overcome their gaming addiction.
            </div>

            <div className="flex gap-6 mt-16">
              <SignInButton>
                <button className="border-2 font-semibold tracking-wide text-white bg-black text-2xl rounded-[16px] px-6 py-3">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="border-2 font-semibold tracking-wide text-white bg-black text-2xl rounded-[16px] px-6 py-3">Sign Up</button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

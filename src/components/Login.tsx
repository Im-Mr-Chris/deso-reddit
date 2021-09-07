import axios from "axios";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import Snoowrap from "snoowrap";

export default function Login() {
  const [session, loading] = useSession();

  return (
    <>
      <div className="flex flex-row items-center w-full h-full border border-red-800">
        {!session && (
          <>
            <button className="w-full h-full" onClick={() => signIn()}>Login</button>
          </>
        )}
        {session && (
          <>
            <button className="w-full h-full" onClick={() => signOut()}>Logout</button>
          </>
        )}
      </div>
    </>
  );
}

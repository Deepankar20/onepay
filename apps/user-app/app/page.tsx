'use client'

import {Appbar} from "@repo/ui/Appbar"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {

  const session = useSession();

  return (
    <div className="text-3xl">
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}/>
      hi
    </div>
  );
}

// hooks/use-guest-name.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface GuestData {
  name: string | null;
  email: string | null;
}

export default function useGuestData() {
  const searchParams = useSearchParams();
  const [guest, setGuest] = useState<GuestData>({
    name: null,
    email: null,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    const urlName = searchParams.get("name");
    const urlEmail = searchParams.get("email");

    const savedName = sessionStorage.getItem("guestName");
    const savedEmail = sessionStorage.getItem("guestEmail");

    const name = urlName || savedName;
    const email = urlEmail || savedEmail;

    if (name) sessionStorage.setItem("guestName", name);
    if (email) sessionStorage.setItem("guestEmail", email);

    setGuest({ name, email });
    setIsReady(true);
  }, [searchParams]);

  return { guest, isReady };
}
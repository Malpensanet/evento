"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface GuestData {
  name: string | null;
  email: string | null;
  display: boolean;
}

export default function useGuestData() {
  const searchParams = useSearchParams();
  const [guest, setGuest] = useState<GuestData>({
    name: null,
    email: null,
    display: false,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    const urlName = searchParams.get("name");
    const urlEmail = searchParams.get("email");
    const urlDisplay = searchParams.get("display");

    const savedName = sessionStorage.getItem("guestName");
    const savedEmail = sessionStorage.getItem("guestEmail");
    const savedDisplay = sessionStorage.getItem("guestDisplay");

    const name = urlName || savedName;
    const email = urlEmail || savedEmail;
    const displayStr = urlDisplay || savedDisplay;
    const display = displayStr === "true"; // Convert string to boolean

    if (name) sessionStorage.setItem("guestName", name);
    if (email) sessionStorage.setItem("guestEmail", email);
    if (displayStr) sessionStorage.setItem("guestDisplay", displayStr);

    setGuest({ name, email, display });
    setIsReady(true);
  }, [searchParams]);

  return { guest, isReady };
}

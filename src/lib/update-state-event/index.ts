import { useRouter } from "next/navigation";

const router = useRouter();

export default async function updateEventState(state: "Accepted" | "Declined" | "Maybe") {
  const id = localStorage.getItem("guestId");
  const email = localStorage.getItem("guestEmail");

  if (!id && !email) {
    console.error("Missing contact identifier");
    return;
  }

  try {
    await fetch("/api/updateBrevoContact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, email, EVENT_STATE: state }),
    });

    // Redirect alla pagina corrispondente, mantenendo name/id/email
    const path = state === "Accepted" ? "/accepted" :
                 state === "Declined" ? "/declined" :
                 "/maybe";

    const name = localStorage.getItem("guestName") || "";
    const query = new URLSearchParams({ name, id: id || "", email: email || "" }).toString();

    router.push(`${path}?${query}`);
  } catch (err) {
    console.error("Error updating Brevo:", err);
  }
}


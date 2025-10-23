import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, eventState } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Missing contact email" },
        { status: 400 }
      );
    }

    // Environment variables check
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("❌ Missing Brevo API key");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("📧 Email received:", email);
    console.log("🎯 Event state:", eventState);

    // Mappa gli stati dell'evento alle liste corrispondenti
    const eventStateToList: Record<string, number> = {
      accepted: 8,
      declined: 6,
      maybe: 5,
      // Aggiungi varianti per gestire diversi casi
      Accepted: 8,
      Declined: 6,
      Maybe: 5,
    };

    // Normalizza lo stato
    const normalizedState = eventState.toLowerCase();
    const targetListId =
      eventStateToList[eventState] || eventStateToList[normalizedState];

    if (!targetListId) {
      console.error("❌ Invalid event state:", eventState);
      return NextResponse.json(
        {
          error: "Invalid event state",
          details: `Expected 'accepted', 'declined', or 'maybe', but received: ${eventState}`,
        },
        { status: 400 }
      );
    }

    console.log("🎯 Target list ID:", targetListId);

    // PRIMA: Ottieni le informazioni attuali del contatto per sapere in quale lista si trova
    const encodedEmail = encodeURIComponent(email);
    const getContactUrl = `https://api.brevo.com/v3/contacts/${encodedEmail}`;

    console.log("🔍 Getting current contact info...");
    const getContactRes = await fetch(getContactUrl, {
      method: "GET",
      headers: {
        "api-key": brevoApiKey,
      },
    });

    if (!getContactRes.ok) {
      console.error(
        "❌ Errore nel recupero contatto:",
        await getContactRes.text()
      );
      throw new Error(
        `Contact not found or API error: ${getContactRes.status}`
      );
    }

    const contactData = await getContactRes.json();
    console.log("📋 Current contact data:", contactData);

    // Ottieni le liste attuali del contatto
    const currentListIds = contactData.listIds || [];
    console.log("📋 Current list IDs:", currentListIds);

    // Lista delle liste di evento (quelle che vogliamo gestire)
    const eventListIds = [5, 6, 8]; // maybe, declined, accepted

    // Trova le liste di evento attuali (da rimuovere)
    const currentEventLists = currentListIds.filter((id: number) =>
      eventListIds.includes(id)
    );

    console.log("🗑️ Current event lists to remove:", currentEventLists);
    console.log("🎯 New list to add:", targetListId);

    // Prepara il body per Brevo
    const body = {
      email: email,
      attributes: {
        EVENT_STATE: eventState,
        DATE: new Date().toISOString(),
      },
      listIds: [targetListId], // Aggiungi alla nuova lista
      unlinkListIds: currentEventLists, // Rimuovi da TUTTE le liste di evento precedenti
      updateEnabled: true,
    };

    const brevoUrl = `https://api.brevo.com/v3/contacts/${encodedEmail}`;

    console.log("🌐 Calling Brevo URL:", brevoUrl);
    console.log("📦 Request body:", JSON.stringify(body, null, 2));

    // Aggiorna il contatto
    const updateRes = await fetch(brevoUrl, {
      method: "PUT",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("📊 Brevo response status:", updateRes.status);

    const responseText = await updateRes.text();
    console.log("📥 Brevo raw response:", responseText);

    if (!updateRes.ok) {
      console.error("❌ Errore Brevo:", responseText);
      throw new Error(`Brevo API error: ${updateRes.status} - ${responseText}`);
    }

    let result;
    if (responseText && responseText.trim() !== "") {
      try {
        result = JSON.parse(responseText);
        console.log("✅ Successo Brevo:", result);
      } catch {
        console.log("📝 Brevo returned empty or non-JSON response");
        result = { success: true, message: "Contact updated successfully" };
      }
    } else {
      console.log("✅ Brevo operation completed successfully");
      result = { success: true, message: "Contact updated successfully" };
    }

    return NextResponse.json({
      success: true,
      data: result,
      previousLists: currentEventLists,
      newList: targetListId,
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    console.error("❌ Errore API:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";

    return NextResponse.json(
      {
        error: errorMessage,
        details: "Check server logs for more information",
      },
      { status: 500 }
    );
  }
}

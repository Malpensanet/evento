import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, eventState } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Missing contact email" }, { status: 400 });
    }

    // Environment variables check
    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID;
    
    if (!brevoApiKey || !brevoListId) {
      console.error('❌ Missing Brevo environment variables');
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    console.log('📧 Email received:', email);
    console.log('🎯 Event state:', eventState);

    // Ottieni la data e ora corrente nel formato richiesto da Brevo
    const now = new Date();
    const formattedDate = now.toISOString(); // Formato: "2024-01-15T14:30:00.000Z"
    

    console.log('📅 Current date/time:', formattedDate);

    // Prepara il body per Brevo
    const body = {
      email: email,
      attributes: { 
        EVENT_STATE: eventState,
        DATE: formattedDate
      },
      listIds: [Number(brevoListId)],
      updateEnabled: true,
    };

    // ENCODE the email for the URL
    const encodedEmail = encodeURIComponent(email);
    const brevoUrl = `https://api.brevo.com/v3/contacts/${encodedEmail}`;
    
    console.log('🌐 Calling Brevo URL:', brevoUrl);

    // Chiama l'API di Brevo
    const res = await fetch(brevoUrl, {
      method: "PUT",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log('📊 Brevo response status:', res.status);
    console.log('📊 Brevo response ok:', res.ok);

    // Check if response has content before trying to parse JSON
    const responseText = await res.text();
    console.log('📥 Brevo raw response:', responseText);

    if (!res.ok) {
      console.error('❌ Errore Brevo:', responseText);
      throw new Error(`Brevo API error: ${res.status} - ${responseText}`);
    }

    let result;
    if (responseText && responseText.trim() !== '') {
      try {
        result = JSON.parse(responseText);
        console.log('✅ Successo Brevo:', result);
      } catch (parseError) {
        console.log('📝 Brevo returned empty or non-JSON response (this is normal for some operations)');
        result = { success: true, message: "Contact updated successfully" };
      }
    } else {
      console.log('✅ Brevo operation completed successfully (empty response)');
      result = { success: true, message: "Contact updated successfully" };
    }
    
    return NextResponse.json({ 
      success: true, 
      data: result,
      timestamp: formattedDate // Restituisci anche il timestamp per debug
    });
    
  } catch (err: any) {
    console.error('❌ Errore API:', err);
    return NextResponse.json({ 
      error: err.message || "Internal server error",
      details: "Check server logs for more information"
    }, { status: 500 });
  }
}
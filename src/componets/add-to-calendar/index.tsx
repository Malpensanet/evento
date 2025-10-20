import React from "react";

const AddToCalendar = () => {
  // Dettagli dell'evento
  const event = {
    title: "Evento Malpensanet Servizi S.r.l.",
    description: "Percorso di degustazione con cantine Kurtatsch e Firriato",
    location:
      "Malpensanet Servizi S.r.l. - Via Palmanova 19, Olgiate Olona, Varese",
    start: "20251127T180000",
    end: "20251127T220000",
  };

  // Link Google Calendar
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${event.start}/${event.end}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;

  // Contenuto del file .ICS
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TuoSito//Evento Gastronomico//IT
BEGIN:VEVENT
UID:20251127-evento-gastronomico@example.com
DTSTAMP:20251019T120000Z
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR
  `.trim();

  // Converti ICS in blob per download
  const icsBlob = new Blob([icsContent], { type: "text/calendar" });
  const icsUrl = URL.createObjectURL(icsBlob);

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        marginTop: "24px",
      }}
    >
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "12px 24px",
          backgroundColor: "#9b2d20",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        Aggiungi a Google Calendar
      </a>

      <a
        href={icsUrl}
        download="evento-gastronomico.ics"
        style={{
          padding: "12px 24px",
          backgroundColor: "#555",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        Scarica .ICS
      </a>
    </div>
  );
};

export default AddToCalendar;

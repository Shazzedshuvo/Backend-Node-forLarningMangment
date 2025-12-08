export interface IEventItem {
  id: number;                 // 01, 02, 03...
  speakerName: string;        // Md. Abu Sayeed
  eventTitle: string;         // UI/UX Design Bootcamp
  speaker: string;            // Same as speakerName (if needed)
  time: string;               // "16:00 PM"
  date: string;               // "2025-09-12"
  status: "Event Started" | "Upcoming" | string;
  imageUrl: string;           // Image for the event or speaker
}

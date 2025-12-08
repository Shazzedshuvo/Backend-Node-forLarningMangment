export interface ICertificate {
  id: string;              // Certificate ID
  studentName: string;
  courseName: string;
  batchName: string;
  studentId: string;
  image: string;           // Certificate image URL
  issuedDate: string;      // ISO date string
}

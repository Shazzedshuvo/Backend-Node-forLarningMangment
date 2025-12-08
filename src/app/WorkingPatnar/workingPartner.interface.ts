export interface IWorkingPartner {
  id: number;            // 1, 2, 3...
  name: string;          // Partner name
  description?: string;  // Optional description about the partner
  imageUrl: string;      // Partner logo or image URL
  createdAt?: Date;      // Optional timestamps
  updatedAt?: Date;
}

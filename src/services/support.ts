import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface SupportMessage {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  status: 'pending' | 'resolved';
}

export async function submitSupportMessage(data: Omit<SupportMessage, 'createdAt' | 'status'>) {
  try {
    const supportRef = collection(db, 'support');
    await addDoc(supportRef, {
      ...data,
      createdAt: new Date(),
      status: 'pending'
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting support message:', error);
    throw new Error('Bagyşlaň, näsazlyk ýüze çykdy. Gaýtadan synanyşyň.');
  }
}
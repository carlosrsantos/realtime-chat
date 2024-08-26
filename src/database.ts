import { environment } from './firebase.ts'
import { getFirestore } from 'firebase/firestore'

const app = environment

export const db = getFirestore(app)
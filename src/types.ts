import { ViteSSGContext } from 'vite-ssg'
import firebase from 'firebase/app'
export type UserModule = (ctx: ViteSSGContext) => void

export type Timestamp = firebase.firestore.Timestamp

export enum BaseStatus {
  none,
  active,
  archived,
  deleted,
}
export interface Base {
  id: string
  status: BaseStatus
  created_at: Timestamp
  updated_at: Timestamp
  user_update: string
}

export type UserID = string

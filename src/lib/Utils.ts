// import { DecodedUser } from "@/types/Index"
import { TaskDragData } from "@/components/Kanban/task-card"
import { ColumnDragData } from "@/components/Kanban/task-column"
import { Active, DataRef, Over } from "@dnd-kit/core"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTokenFromStorage() {
  const token = localStorage.getItem("token")
  if (!token) return null

  return token
}

export function decodeUser(user: unknown) {
  const decodedUser: any = {}
  let userKey = ""
  if (user) {
    for (const [key, value] of Object.entries(user)) {
      userKey = key.split("identity/claims/")[1]
      decodedUser[userKey] = value
    }
  }
  return decodedUser
}

type DraggableData = ColumnDragData | TaskDragData;

export function hasDraggableData<T extends Active | Over>(
  entry: T | null | undefined
): entry is T & {
  data: DataRef<DraggableData>;
} {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data?.type === 'Column' || data?.type === 'Task') {
    return true;
  }

  return false;
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs";
import "dayjs/locale/id";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getInitials = (name?: string) => {
  if(!name) return;
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : ''
  return (first + last).toUpperCase()
}


dayjs.locale("id");

export const formatDateTime = (iso: string) => {
  const d = dayjs(iso);
  return d.isValid() ? d.format("D MMMM YYYY, HH:mm") : "-";
};

export const formatDate = (iso: string) => {
  const d = dayjs(iso);
  return d.isValid() ? d.format("D MMMM YYYY") : "-";
};
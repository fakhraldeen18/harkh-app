import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, using `clsx` for 
 * conditional class merging and `twMerge` to intelligently combine Tailwind CSS 
 * classes, resolving conflicts.
 * 
 * @param inputs - An array of class names, which can be strings, objects, arrays, or 
 * any combination thereof, where the presence of a class name is determined by 
 * the truthiness of the associated value.
 * 
 * @returns A single string containing the merged class names.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); 
}

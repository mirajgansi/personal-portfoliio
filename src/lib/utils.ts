type ClassValue = string | undefined | null | boolean;

/**
 * Utility function to conditionally join class names
 * @param classes - A list of class values
 * @returns A string of combined class names
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

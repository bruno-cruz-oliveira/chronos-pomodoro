// Generic function to sort the tasks array
//
// The .sort() method receives a function that compares two items (a, b) and should return:
// - A NEGATIVE number (-1) if "a" should come before "b".
// - A POSITIVE number (1) if "a" should come after "b".
// - ZERO (0) if the order doesn't need to change.
//
// The function handles:
// 1. If the value is null, send it to the end of the list.
// 2. If it's a number, sort numerically (asc or desc).
// 3. If it's a string, sort alphabetically (asc or desc).
//
// The spread [...tasks] creates a copy of the original array so it is not modified directly.

import type { TaskModel } from "../models/TaskModel";

// Define the expected parameters for the function
export type SortTasksOptions = {
  tasks: TaskModel[]; // List of tasks to be sorted
  direction?: "asc" | "desc"; // Sort direction: ascending or descending (optional)
  field?: keyof TaskModel; // Which task field will be used to sort (optional)
};

export function sortTasks({
  field = "startDate", // If the field is not provided, use 'startDate' as default
  direction = "desc", // If the direction is not provided, use 'desc' (descending)
  tasks = [], // If no list is passed, use an empty array
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // Get the value of the chosen property (e.g., startDate) from each task
    const aValue = a[field];
    const bValue = b[field];

    // --- HANDLING NULL VALUES ---

    // If both are null, keep the current order
    if (aValue === null && bValue === null) return 0;

    // If only the first is null, it goes to the end
    if (aValue === null) return 1;

    // If only the second is null, it goes to the end
    if (bValue === null) return -1;

    // --- NUMERIC COMPARISON ---

    // If both values are numbers, subtract to sort
    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc"
        ? aValue - bValue // Ex: 1, 2, 3...
        : bValue - aValue; // Ex: 3, 2, 1...
    }

    // --- STRING COMPARISON ---

    // If both values are strings, use localeCompare to sort alphabetically
    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    // --- UNHANDLED CASES ---

    // If it's neither number, string, nor null, do not change the order
    return 0;
  });
}

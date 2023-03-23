import { tv } from "tailwind-variants";

export const button = tv({
  base: "px-3 py-2 text-xs font-medium text-center rounded-lg  focus:ring-4 focus:outline-none ",

  variants: {
    color: {
      gray: "text-gray-50 bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ",
      purple:
        "text-purple-50 bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 ",
    },
  },

  defaultVariants: {
    color: "gray",
  },
});

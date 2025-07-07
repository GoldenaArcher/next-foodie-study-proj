"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// use server must be an async function

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isValidEmail(meal.creator_email) ||
    isValidEmail(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);

  revalidatePath("/meals");
  redirect("/meals");
};

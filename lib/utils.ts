import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function convertAmountFromMiliunits(amount: number) {
	return amount / 1000;
};

export function convertAmountToMiliunits(amount: number) {
	return Math.round(amount * 1000);
};

export function formatCurrency(value: number) {
	return Intl.NumberFormat("en-MY", {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2,
	}).format(value);
};
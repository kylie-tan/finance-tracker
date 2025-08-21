import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
	value?: Date;
	onChange?: (date: Date | undefined) => void;
	disabled?: boolean;
};

export const DatePicker = ({
	value,
	onChange,
	disabled,
}: Props) => {
	const handleSelect = (date: Date | undefined) => {
		onChange?.(date);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					disabled={disabled}
					variant="outline"
					className={cn(
						"w-full justify-start text-left font-normal",
						!value && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="size-4 mr-2" />
					{value ? format(value, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Calendar
					mode="single"
					selected={value}
					onSelect={handleSelect}
					disabled={disabled}
					autoFocus
				/>
			</PopoverContent>
		</Popover>
	);
};
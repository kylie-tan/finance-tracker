import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { Plus } from "lucide-react";

const AccountsPage = () => {


	return (
		<div>
			<Card className="border-none drop-shadow-sm">
				<CardHeader className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg: justify-between">
					<CardTitle className="text-xl line-clamp-1">
						Accounts page
					</CardTitle>
					<Button className="w-full lg:w-auto" size="sm">
						<Plus className="size-4 mr-2" />
						Add new
					</Button>
				</CardHeader>
			</Card>
		</div>
	);
};

export default AccountsPage;

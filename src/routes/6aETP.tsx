import { Button } from "@/components/ui/button";
import { useItemContext } from "@/context/ItemsContext";
import { Link } from "react-router-dom";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function SixaETP() {
	const { items, setItemEspecificidade, setItemNome } = useItemContext();

	return (
		<div className="flex max-w-2xl m-auto gap-x-24 justify-between mt-8">
			<div className="flex flex-col w-full gap-4">
				<h1 className="text-2xl font-bold w-full"> Fase de Inventario</h1>
				<div className="flex flex-col gap-4 mt-4 mb-4">
					<div className="flex flex-col gap-3">
						<Label htmlFor="especificidade" className="pl-2">
							Especificidade :
						</Label>
						<Input
							id="especificidade"
							placeholder="Especificidade"
							onChange={(event) => setItemEspecificidade(event.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Label htmlFor="Item" className="pl-2">
							Item :
						</Label>

						<Input
							id="Item"
							placeholder="Item"
							onChange={(event) => setItemNome(event.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Label htmlFor="Formula" className="pl-2">
							Formula Química :
						</Label>
						<Input id="Formula" placeholder="Formula" />
					</div>
				</div>
				<div className="flex justify-end">
					<Link to={"/inventario=4"}>
						<Button className="bg-green-400">Proxima</Button>
					</Link>
				</div>
			</div>
			<div>
				<Table className="w-fit border">
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Fase</TableHead>
							<TableHead>Etapa procedimental</TableHead>
							<TableHead>Especificidade</TableHead>
							<TableHead>Item</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{items.map((e) => {
							return (
								<TableRow key={e.Item}>
									<TableCell className="font-medium">{e.fase}</TableCell>
									<TableCell className="font-medium">{e.etapa}</TableCell>
									<TableCell className="font-medium">
										{e.especificidade}
									</TableCell>
									<TableCell className="font-medium text-right">
										{e.Item}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

export { SixaETP };

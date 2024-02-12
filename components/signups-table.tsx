import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
    TableFooter,
} from '@/components/ui/table';

type Signup = {
    id: number;
    name: string;
    company: string;
    title: string;
    email: string;
    createdAt: Date;
    event: string;
};

export function SignupsTable({ data }: any) {
    console.log(data);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Event</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item: Signup, index: number) => (
                    <TableRow key={index}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>
                            {new Date(item.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{item.event}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={7}>{data.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

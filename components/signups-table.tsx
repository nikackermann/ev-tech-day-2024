import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
    TableFooter
} from '@/components/ui/table'
import { Signup } from '@/lib/schema'

type SignupsTableProps = {
    signups: Signup[]
}

export function SignupsTable({ signups }: SignupsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Event</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {signups.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>
                            {new Date(item.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{item.event}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={8}>{signups.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

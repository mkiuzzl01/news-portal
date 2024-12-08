import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Comments = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">সমম্বার</TableHead>
          <TableHead className="text-center">সাক্ষাৎকার</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center">পরামর্শ</TableCell>
          <TableCell className="text-center">মতামত </TableCell>{" "}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Comments;

import studentData from "../../data/allStudents.json";
import {
  Badge,
  Button,
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  MultiSelectBox,
  MultiSelectBoxItem,
} from "@tremor/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const [selectedNames, setSelectedNames] = useState([]);

  const isStudentSelected = (student) =>
    selectedNames.includes(student.studentId) || selectedNames.length === 0;

  return (
    <div className="h-full w-full bg-gray-50 px-4 py-5 xl:px-20 xl:py-12">
      <header className="flex justify-between items-center mb-5">
        <h3 className="text-2xl font-semibold text-gray-900">All Students</h3>
        <div className="flex gap-4">
          <button className="hidden h-10 rounded-md border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:block">
            Export
          </button>
        </div>
      </header>
      <div className="mt-5">
        <Card shadow={false}>
          <MultiSelectBox
            onValueChange={(value) => setSelectedNames(value)}
            placeholder="Select by ID..."
            maxWidth="max-w-xs"
          >
            {studentData.map((item) => (
              <MultiSelectBoxItem
                key={item.studentId}
                value={item.studentId}
                text={
                  item.studentId +
                  " : " +
                  item.studentFirstName +
                  " " +
                  item.studentMiddleLastName
                }
              />
            ))}
          </MultiSelectBox>
          <Table marginTop="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Student ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Class / Section</TableHeaderCell>
                <TableHeaderCell>Date of Admission</TableHeaderCell>
                <TableHeaderCell>Guardian's Name</TableHeaderCell>
                <TableHeaderCell>Guardian's Phone</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {studentData
                .filter((item) => isStudentSelected(item))
                .map((item) => (
                  <TableRow key={item.studentId} className="hover:bg-gray-100">
                    <TableCell>
                      <Badge text={item.studentId} size="xs" color="sky" />
                    </TableCell>
                    <TableCell>
                      {item.studentFirstName + " " + item.studentMiddleLastName}
                    </TableCell>
                    <TableCell>
                      {item.classEnrolled + " / " + item.sectionAssigned}
                    </TableCell>
                    <TableCell>{item.dateOfAdmission}</TableCell>
                    <TableCell>{item.guardianFullName}</TableCell>
                    <TableCell>{item.guardianPhone}</TableCell>
                    <TableCell>
                      <Link
                        to={item.studentId.toLowerCase()}
                        className="rounded-full bg-green-200 py-1 px-3 text-xs text-green-900 transition-all hover:bg-green-100 focus:outline-none focus:ring focus:ring-green-300"
                      >
                        View
                      </Link>
                      <Link
                        to="#"
                        className="ml-3 rounded-full bg-orange-200 py-1 px-3 text-xs text-orange-900 transition-all hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300"
                      >
                        Edit
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default AllStudents;

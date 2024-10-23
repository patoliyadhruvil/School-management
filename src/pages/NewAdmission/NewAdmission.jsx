import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AcademicDetailsForm from "./sc_forms/AcademicDetailsForm";
import GuardianDetailsForm from "./sc_forms/GuardianDetailsForm";
import IndividualDetailsForm from "./sc_forms/IndividualDetailsForm";
import PreviousSchoolDetailsForm from "./sc_forms/PreviousSchoolDetailsForm";

function UpdateSpan() {
  return <span className="text-gray-400">N/A</span>;
}

function NewAdmission() {
  const [newStudent, setNewStudent] = useState({
    studentFirstName: "",
    studentMiddleLastName: "",
    studentDateOfBirth: "",
    studentReligion: "",
    studentCaste: "",
    studentEmail: "",
    studentSex: "",
    studentBloodGroup: "",
    fatherFullName: "",
    motherFullName: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZipCode: "",
    studentId: "SVPSAS230001",
    dateOfAdmission: "",
    classEnrolled: "",
    sectionAssigned: "",
    guardianFullName: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianWhatsApp: "",
    previousSchoolName: "",
    previousSchoolAddress: "",
  });

  const submitButtonRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    // Reset the form state after submission
    setNewStudent({
      studentFirstName: "",
      studentMiddleLastName: "",
      studentDateOfBirth: "",
      studentReligion: "",
      studentCaste: "",
      studentEmail: "",
      studentSex: "",
      studentBloodGroup: "",
      fatherFullName: "",
      motherFullName: "",
      addressStreet: "",
      addressCity: "",
      addressState: "",
      addressZipCode: "",
      studentId: "SVPSAS230001",
      dateOfAdmission: "",
      classEnrolled: "",
      sectionAssigned: "",
      guardianFullName: "",
      guardianEmail: "",
      guardianPhone: "",
      guardianWhatsApp: "",
      previousSchoolName: "",
      previousSchoolAddress: "",
    });
  };

  const submitAlt = () => {
    submitButtonRef.current.click();
  };

  return (
    <div className="container mx-auto px-4 py-6 xl:px-20 xl:py-12">
      <header className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">New Admission</h3>
        <div className="flex gap-4">
          <button
            onClick={submitAlt}
            className="h-10 rounded-md bg-blue-700 px-6 text-base font-medium text-white shadow-md transition-all hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Admit
          </button>
          <Link
            to="/newadmission/bulkadmit"
            className="hidden h-10 rounded-md border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 shadow-md transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:flex items-center"
          >
            Bulk Admit
          </Link>
        </div>
      </header>
      <div className="mt-5 flex flex-col gap-10 2xl:flex-row">
        <form
          onSubmit={submitFormHandler}
          className="flex flex-col gap-10 2xl:max-w-5xl w-full"
        >
          {/** Individual Details Form */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-md">
            <div className="border-b border-gray-200 py-4 px-6">
              <h4 className="text-lg font-medium">Individual Details</h4>
            </div>
            <IndividualDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          {/** Academic Details Form */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-md">
            <div className="border-b border-gray-200 py-4 px-6">
              <h4 className="text-lg font-medium">Academic Details</h4>
            </div>
            <AcademicDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          {/** Guardian Details Form */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-md">
            <div className="border-b border-gray-200 py-4 px-6">
              <h4 className="text-lg font-medium">Guardian Details</h4>
            </div>
            <GuardianDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          {/** Previous School Details Form */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-md">
            <div className="border-b border-gray-200 py-4 px-6">
              <h4 className="text-lg font-medium">Previous School Details</h4>
            </div>
            <PreviousSchoolDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          <button
            ref={submitButtonRef}
            type="submit"
            className="mt-6 h-10 rounded-md bg-blue-700 px-10 text-base font-medium text-white shadow-md transition-all hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Admit
          </button>
        </form>

        {/** Summary Section */}
        <div className="h-fit flex-1 rounded-lg border border-gray-200 bg-white shadow-md py-4 px-6">
          <h4 className="text-lg font-medium">Summary</h4>
          <div className="mt-3 rounded-md bg-gray-50 p-5">
            <span className="block w-fit rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
              {newStudent.studentId}
            </span>
            <span className="mt-2 block whitespace-normal text-3xl font-semibold text-gray-900">
              {newStudent.studentFirstName || <UpdateSpan />}
              {newStudent.studentFirstName && newStudent.studentMiddleLastName
                ? " " + newStudent.studentMiddleLastName
                : null}
            </span>

            <SummaryItem label="Class Enrolled" value={newStudent.classEnrolled} />
            <SummaryItem label="Section Assigned" value={newStudent.sectionAssigned} />
            <SummaryItem label="Blood Group" value={newStudent.studentBloodGroup} />
            <SummaryItem label="Date Of Birth" value={newStudent.studentDateOfBirth} />
            <SummaryItem label="Address" value={newStudent.addressStreet} />
            <SummaryItem label="Guardian's Name" value={newStudent.guardianFullName} />
            <SummaryItem label="Phone" value={newStudent.guardianPhone} />
          </div>
        </div>
      </div>
    </div>
  );
}

const SummaryItem = ({ label, value }) => (
  <div className="mt-2 text-sm font-medium text-gray-700">
    <span className="font-semibold">{label}: </span>
    <span>{value || <UpdateSpan />}</span>
  </div>
);

export default NewAdmission;

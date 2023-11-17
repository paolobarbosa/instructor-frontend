import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/student.css';

const StudentCard = ({ name, studentNumber, grade }) => {
  return (
    <Card.Body className="student-card">
      <div className="row">
        <div className="col">
          <h5>{name}</h5>
          <p>{studentNumber}</p>
          <p>{`Grade - ${grade}`}</p>
        </div>
        <div className="col text-right">
          <Button variant="success">IT</Button>
        </div>
      </div>
    </Card.Body>
  );
};

const Subject = ({ name }) => (
  
  <div className="col">
  
    <Link to={`/subjects/${name.toLowerCase()}`} className="subject-link">
      {name}
    </Link>
    
  </div>
);

const SubjectsList = () => {
  const subjects = [
    'Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5', 'Subject 6', 'Subject 7', 'Subject 8'
  ];

  return (
    <div className="row subjects-list">
      {subjects.map((subject, index) => (
        <Subject key={index} name={subject} />
      ))}
    </div>
  );
};


const studentsData = [
  {
    name: 'Mradul Mathur',
    studentNumber: '3601450010708',
    grade: '4',
  },
  {
    name: 'Vishal Peter',
    studentNumber: '3521960010704',
    grade: '3',
  },

  {  name: 'Sakshi Lee',
  studentNumber: '3601450010165',
  grade: '4',
  },
{
  name: 'Jane Smith',
  studentNumber: '36011450010002',
  grade: '3',
},
{
  name: 'Alex Johnson',
  studentNumber: '36011450010003',
  grade: '5',
},
{
  name: 'Emily White',
  studentNumber: '36011450010004',
  grade: '2',
},
{
  name: 'David Brown',
  studentNumber: '36011450010005',
  grade: '4',
},
{
  name: 'Olivia Davis',
  studentNumber: '36011450010006',
  grade: '3',
},
{
  name: 'Michael Miller',
  studentNumber: '36011450010007',
  grade: '5',
},
{
  name: 'Sophia Wilson',
  studentNumber: '36011450010008',
  grade: '2',
},
{
  name: 'Matthew Garcia',
  studentNumber: '36011450010009',
  grade: '4',
},
{
  name: 'Emma Taylor',
  studentNumber: '36011450010010',
  grade: '3',
},
{
  name: 'William Martinez',
  studentNumber: '36011450010011',
  grade: '5',
},
{
  name: 'Ava Anderson',
  studentNumber: '36011450010012',
  grade: '2',
},
{
  name: 'James Jones',
  studentNumber: '36011450010013',
  grade: '4',
},
{
  name: 'Isabella Perez',
  studentNumber: '36011450010014',
  grade: '3',
},
{
  name: 'Ethan Turner',
  studentNumber: '36011450010015',
  grade: '5',
},
{
  name: 'Mia Hernandez',
  studentNumber: '36011450010016',
  grade: '2',
},
{
  name: 'Alexander Hill',
  studentNumber: '36011450010017',
  grade: '4',
},
{
  name: 'Chloe Foster',
  studentNumber: '36011450010018',
  grade: '3',
},
{
  name: 'Daniel Reed',
  studentNumber: '36011450010019',
  grade: '5',
},
{
  name: 'Grace Coleman',
  studentNumber: '36011450010020',
  grade: '2',
},
{
  name: 'Joseph Washington',
  studentNumber: '36011450010021',
  grade: '4',
},
{
  name: 'Lily Lee',
  studentNumber: '36011450010022',
  grade: '3',
},
{
  name: 'Benjamin Smith',
  studentNumber: '36011450010023',
  grade: '5',
},
{
  name: 'Avery Turner',
  studentNumber: '36011450010024',
  grade: '2',
},
{
  name: 'Sophia Martinez',
  studentNumber: '36011450010025',
  grade: '4',
},
{
  name: 'Jackson Davis',
  studentNumber: '36011450010026',
  grade: '3',
},
{
  name: 'Penelope Anderson',
  studentNumber: '36011450010027',
  grade: '5',
},
{
  name: 'Lucas Wilson',
  studentNumber: '36011450010028',
  grade: '2',
},
{
  name: 'Aria Garcia',
  studentNumber: '36011450010029',
  grade: '4',
},
{
  name: 'Leo Taylor',
  studentNumber: '36011450010030',
  grade: '3',
},
  
];

const Student = () => {
  return (

    <div className="page-container">
      {/* Add an h2 element for the heading */}
      <h2>Students</h2>

      {/* Card Body with Search Bar and Subjects List */}
      <Card className="search-card">
        <Card.Body>
          {/* Search Bar */}
          <input type="text" placeholder="Search..." className="search-bar" />
          {/* Subjects List */}
          <SubjectsList />
        </Card.Body>
      </Card>

      {/* Card Body with Student Cards */}
      <div className="student-scrollable-content">
      <Card className="students-card">
        {studentsData.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            studentNumber={student.studentNumber}
            grade={student.grade}
          />
        ))}
      </Card>
    </div>
    </div>
  );
};

export default Student;
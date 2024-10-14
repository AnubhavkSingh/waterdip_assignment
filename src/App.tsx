// src/App.tsx

// import React, { useState, useEffect, useRef } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Dashboard from './components/Dashboard';
// import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
// import Papa from 'papaparse';
// import { DataRecord } from './types/DataRecord';
// import './App.css';
// import ColumnChart from './components/ColumnChart';
// import SparklineChart from './components/SparklineChart';
// import TimeSeriesChart from './components/TimeSeriesChart';

// const App: React.FC = () => {
//   const [data, setData] = useState<DataRecord[]>([]);
//   const [startDate, setStartDate] = useState<Date | undefined>(undefined);
//   const [endDate, setEndDate] = useState<Date | undefined>(undefined);

//   const timeSeriesRef = useRef<HTMLDivElement>(null);
//   const columnChartRef = useRef<HTMLDivElement>(null);
//   const adultsSparklineRef = useRef<HTMLDivElement>(null);
//   const childrenSparklineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     Papa.parse('/hotel_bookings_1000.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const formattedData = results.data as DataRecord[];
//         setData(formattedData);
//       },
//     });
//   }, []);

//   const filteredData = data.filter(record => {
//     if (!startDate || !endDate) return true;
//     const recordDate = new Date(record.arrival_date_year, record.arrival_date_month - 1, record.arrival_date_day_of_month);
//     return recordDate >= startDate && recordDate <= endDate;
//   });

//   console.log('Start Date:', startDate);
//   console.log('End Date:', endDate);
//   console.log('Filtered Data:', filteredData);

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
//         <Navbar.Brand href="#home">Hotel Dashboard</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link onClick={() => scrollToSection(timeSeriesRef)}>Time Series</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(columnChartRef)}>Column Chart</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(adultsSparklineRef)}>Adults Sparkline</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(childrenSparklineRef)}>Children Sparkline</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Container fluid>
//         <Row className="my-4">
//           <Col className="text-center">
//             <h1>Hotel Booking Data Dashboard</h1>
//             <DatePicker
//               selected={startDate}
//               onChange={(date: Date | null) => setStartDate(date ? date : undefined)}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//               placeholderText="Start Date"
//               className="mx-2"
//             />
//             <DatePicker
//               selected={endDate}
//               onChange={(date: Date | null) => setEndDate(date ? date : undefined)}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               placeholderText="End Date"
//               className="mx-2"
//             />
//           </Col>
//         </Row>

//         <div ref={timeSeriesRef}>
//           <Row className="my-4">
//             <Col>
//               <h2 className="text-center">Visitors Over Time</h2>
//               <TimeSeriesChart data={filteredData} />
//             </Col>
//           </Row>
//         </div>

//         <div ref={columnChartRef}>
//           <Row className="my-4">
//             <Col>
//               <h2 className="text-center">Visitors by Country</h2>
//               <ColumnChart data={filteredData} />
//             </Col>
//           </Row>
//         </div>

//         <div ref={adultsSparklineRef}>
//           <Row className="my-4">
//             <Col>
//               <h2 className="text-center">Adult Visitors</h2>
//               <SparklineChart data={filteredData} type="adults" />
//             </Col>
//           </Row>
//         </div>

//         <div ref={childrenSparklineRef}>
//           <Row className="my-4">
//             <Col>
//               <h2 className="text-center">Children Visitors</h2>
//               <SparklineChart data={filteredData} type="children" />
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default App;



// src/App.tsx

// src/App.tsx




// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
// import Papa from 'papaparse';
// import { DataRecord } from './types/DataRecord';
// import TimeSeriesChart from './components/TimeSeriesChart';
// import ColumnChart from './components/ColumnChart';
// import SparklineChart from './components/SparklineChart';

// const App: React.FC = () => {
//   const [data, setData] = useState<DataRecord[]>([]);
//   const [startDate, setStartDate] = useState<Date | undefined>(undefined);
//   const [endDate, setEndDate] = useState<Date | undefined>(undefined);

//   useEffect(() => {
//     Papa.parse('/hotel_bookings_1000.csv', { // Adjust the path as necessary
//       download: true,
//       header: true,
//       complete: (results) => {
//         const formattedData = results.data as DataRecord[];
//         setData(formattedData);
//       },
//     });
//   }, []);

//   const filteredData = data.filter(record => {
//     if (!startDate || !endDate) return true;
//     const recordDate = new Date(record.arrival_date_year, record.arrival_date_month - 1, record.arrival_date_day_of_month);
//     return recordDate >= startDate && recordDate <= endDate;
//   });

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Hotel Dashboard</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#timeseries">Time Series</Nav.Link>
//           <Nav.Link href="#column">Column Chart</Nav.Link>
//           <Nav.Link href="#sparkline-adults">Sparkline Adults</Nav.Link>
//           <Nav.Link href="#sparkline-children">Sparkline Children</Nav.Link>
//           <Nav.Link href="#sparkline-babies">Sparkline Babies</Nav.Link>
//         </Nav>
//       </Navbar>

//       <Container fluid>
//         <Row className="my-4">
//           <Col className="text-center">
//             <h1>Hotel Booking Data Dashboard</h1>
//             <DatePicker
//               selected={startDate || null}
//               onChange={(date: Date | null) => setStartDate(date ?? undefined)}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//               placeholderText="Start Date"
//               className="mx-2"
//             />
//             <DatePicker
//               selected={endDate || null}
//               onChange={(date: Date | null) => setEndDate(date ?? undefined)}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               placeholderText="End Date"
//               className="mx-2"
//             />
//           </Col>
//         </Row>

//         <div id="timeseries">
//           <h2 className="text-center my-4">Time Series Chart</h2>
//           <TimeSeriesChart data={filteredData} />
//         </div>

//         <div id="column">
//           <h2 className="text-center my-4">Column Chart</h2>
//           <ColumnChart data={filteredData} />
//         </div>

//         <div id="sparkline-adults">
//           <h2 className="text-center my-4">Sparkline Chart - Adults</h2>
//           <SparklineChart data={filteredData} type="adults" />
//         </div>

//         <div id="sparkline-children">
//           <h2 className="text-center my-4">Sparkline Chart - Children</h2>
//           <SparklineChart data={filteredData} type="children" />
//         </div>

//         <div id="sparkline-babies">
//           <h2 className="text-center my-4">Sparkline Chart - Babies</h2>
//           <SparklineChart data={filteredData} type="babies" />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default App;




// src/App.tsx

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Papa from 'papaparse';
import { DataRecord } from './types/DataRecord';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';

const App: React.FC = () => {
  const [data, setData] = useState<DataRecord[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    Papa.parse('/hotel_bookings_1000.csv', { // Adjust the path as necessary
      download: true,
      header: true,
      complete: (results) => {
        const formattedData = results.data as DataRecord[];
        setData(formattedData);
      },
    });
  }, []);

  const filteredData = data.filter(record => {
    if (!startDate || !endDate) return true;
    const recordDate = new Date(record.arrival_date_year, record.arrival_date_month - 1, record.arrival_date_day_of_month);
    return recordDate >= startDate && recordDate <= endDate;
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Hotel Dashboard</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#timeseries">Time Series</Nav.Link>
          <Nav.Link href="#column">Column Chart</Nav.Link>
          <Nav.Link href="#sparkline-adults">Sparkline Adults</Nav.Link>
          <Nav.Link href="#sparkline-children">Sparkline Children</Nav.Link>
          <Nav.Link href="#sparkline-babies">Sparkline Babies</Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row className="my-4">
          <Col className="text-center">
            <h1>Hotel Booking Data Dashboard</h1>
            <DatePicker
              selected={startDate || null}
              onChange={(date: Date | null) => setStartDate(date ?? undefined)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="mx-2"
            />
            <DatePicker
              selected={endDate || null}
              onChange={(date: Date | null) => setEndDate(date ?? undefined)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
              className="mx-2"
            />
          </Col>
        </Row>

        <div id="timeseries">
          <h2 className="text-center my-4">Time Series Chart</h2>
          <TimeSeriesChart data={filteredData} />
        </div>

        <div id="column">
          <h2 className="text-center my-4">Column Chart</h2>
          <ColumnChart data={filteredData} />
        </div>

        <div id="sparkline-adults">
          <h2 className="text-center my-4">Sparkline Chart - Adults</h2>
          <SparklineChart data={filteredData} type="adults" />
        </div>

        <div id="sparkline-children">
          <h2 className="text-center my-4">Sparkline Chart - Children</h2>
          <SparklineChart data={filteredData} type="children" />
        </div>

        <div id="sparkline-babies">
          <h2 className="text-center my-4">Sparkline Chart - Babies</h2>
          <SparklineChart data={filteredData} type="babies" />
        </div>
      </Container>
    </div>
  );
};

export default App;

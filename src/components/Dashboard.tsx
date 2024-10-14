// src/components/Dashboard.tsx

import React from 'react';
import TimeSeriesChart from './TimeSeriesChart';
import ColumnChart from './ColumnChart';
import SparklineChart from './SparklineChart';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { DataRecord } from '../types/DataRecord';

interface DashboardProps {
  data: DataRecord[];
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <Container fluid>
      {data.length === 0 && (
        <Alert variant="warning" className="text-center">
          No data available for the selected date range.
        </Alert>
      )}

      <Row className="my-4">
        <Col>
          <h2 className="text-center">Visitors Over Time</h2>
          <TimeSeriesChart data={data} />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2 className="text-center">Visitors by Country</h2>
          <ColumnChart data={data} />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2 className="text-center">Adult Visitors</h2>
          <SparklineChart data={data} type="adults" />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2 className="text-center">Children Visitors</h2>
          <SparklineChart data={data} type="children" />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader'
import TableExamplePadded from './Table'
import { Container } from 'semantic-ui-react'
import Filter from './Filter'

const App = () => {

  const [data, setData] = useState(null);
  const [heading, setHeading] = useState(null);
  const [rows, setRows] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    console.log('data: ', data);
    if (data) {
      setHeading(data[0]);
      setRows(data.slice(1, data.length))
    }

  }, [data])

  // useEffect(() => {
  //   if(filter){
  //     rows.filter(eachRow=>{
  //       filter
  //     })
  //   }
  // }, [filter])

  return (
    <Container style={{ padding: "10px", overflowX: "auto" }}>
      <CSVReader onFileLoaded={(data, fileInfo) => setData(data)} />
      <Filter />
      <TableExamplePadded heading={heading} rows={rows} />
    </Container>
  );
}

export default App;

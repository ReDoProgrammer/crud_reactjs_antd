import './App.css';
import {Table} from 'antd';
import { useState } from 'react';

function App() {
  const columns = [
    {
      key:1,
      title:'ID',
      dataIndex:'id'
    },
    {
      key:2,
      title:'Name',
      dataIndex:'name'
    },
    {
      key:3,
      title:'Email',
      dataIndex:'email'
    },
    {
      key:4,
      title:'Address',
      dataIndex:'address'
    }
  ]

  const [dataSource,setDataSource] = useState([
    {
      id:1,
      name:'Marry',
      email:'marry@gmail.com',
      address:'Marry address'
    },
    {
      id:2,
      name:'Tonny',
      email:'tonny@gmail.com',
      address:'Tonny address'
    },
    {
      id:3,
      name:'David',
      email:'david@gmail.com',
      address:'David address'
    }
  ])

  
  return (
    <div className="App">
      <header>
        <Table
          columns={columns}
          dataSource={dataSource}
        >

        </Table>
      </header>
    </div>
  );
}

export default App;

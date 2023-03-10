import './App.css';
import {Table} from 'antd';

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

  
  return (
    <div className="App">
      <header>
        <Table
          columns={columns}
          dataSource={}
        >

        </Table>
      </header>
    </div>
  );
}

export default App;

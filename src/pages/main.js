import React, {useState} from 'react';
import Card from '../components/card';
import data from '../pseudo-api/db';
import '../styles/main.css'

const Main = () => {
    const [filterData, setFilterData] = useState('');
  
    return (
      <div className="Home">
        <div className='resources'>
          The gold mine you were always looking for 👀
          <br/>
          Filter data according to your needs 🔍
        </div>
        <div className="search-filter">
        <input type="text" value={filterData} onChange={(event) => {
            setFilterData(event.target.value);
          }}/>  
        </div>
        {
          data.filter(val => {
          if(filterData === ''){
            return val;
          }else if(
            val.title.toString().toLowerCase().includes(filterData.toString().toLowerCase()) ||
            val.category.toString().toLowerCase().includes(filterData.toString().toLowerCase()) ||
            val.description.toString().toLowerCase().includes(filterData.toString().toLowerCase()) ||
            val.user.toString().toLowerCase().includes(filterData.toString().toLowerCase())){
            return val;
          }
        }).map((val, key) => {
            return (
                <div key={key}>
                    <Card data={val}/>
                </div>
            );
          }
        )
      }
      </div>
    );
  }
  
export default Main;
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AwesomeButton} from 'react-awesome-button';
import Footer from '../components/Footer';
import {pickNumbers, test} from '../functions/lottery';
import {useState} from 'react';

export default function Home() {
  // test();

  const [lottery, setLottery] = useState([]);

  const handleClick = () => {
    console.log('clic');
    setLottery(pickNumbers(1, 36));
  };

  return (
    <div className=''>
      <div className='container' style={{height: '100vh'}}>
        <div
          className='row d-flex justify-content-center align-items-center pt-5'
          style={{height: '65%'}}
        >
          <a onClick={() => handleClick()}>
            <AwesomeButton type='primary'>PUSH</AwesomeButton>
          </a>
        </div>

        {lottery.map(elem => (
          <span
            className='font-weight-bold'
            style={{
              fontSize: 22,
            }}
          >{` ${elem},`}</span>
        ))}

        {/* <div className='row d-flex justify-content-center align-items-center'>
          <div
            className='col-8'
            style={{
              border: '1px solid black',
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
          >
            <div
              className='row d-flex justify-content-around align-items-center'
              style={{height: 100}}
            >
              <div
                className='col-1 rounded-circle'
                style={{
                  border: '1px solid black',
                  height: 65,
                  width: 75,
                }}
              ></div>
              <div
                className='col-1 rounded-circle'
                style={{
                  border: '1px solid black',
                  height: 65,
                  width: 75,
                }}
              ></div>
              <div
                className='col-1 rounded-circle'
                style={{
                  border: '1px solid black',
                  height: 65,
                  width: 75,
                }}
              ></div>
              <div
                className='col-1 rounded-circle'
                style={{
                  border: '1px solid black',
                  height: 65,
                  width: 75,
                }}
              ></div>
              <div
                className='col-1 rounded-circle'
                style={{
                  border: '1px solid black',
                  height: 65,
                  width: 75,
                }}
              ></div>
              <div
                className='col-1 rounded-circle'
                style={{
                  border: '1px solid black',
                  height: 65,
                  width: 75,
                }}
              ></div>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}

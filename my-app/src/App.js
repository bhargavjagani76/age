// import logo from './logo.svg';
// import './App.css';
// import { Button, Container } from 'react-bootstrap';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function App() {

//   let [add, setadd] = useState([]);

//   useEffect(() => {


//     // Make a request for a user with a given ID
//     axios.get('https://rickandmortyapi.com/api/character')
//       .then(function (response) {
//         // handle success
//         console.log(response.data.results);
//         setadd(response.data.results)
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });

//   }, [])


//   return (
//     <div className='slider'>



//       <div style={{ backgroundColor: '#272833' }}>
//         <Container>
//           <div className='row row-cols-2 p-3'>
//             {
//               add.map((ele,ind)  => {
//                 return(
//                   <>
//                     <Col>
//                       <div >
//                           <img src={ele.image}></img>
//                           <h2></h2>
//                       </div>
//                     </Col>
//                   </>
//                 )
//               })
//             }
//           </div>
//         </Container>

//       </div>











//       {/* {
//         add.map((ele, ind) => {
//           return (

//             <div className='center'>
//               <div>
//                 <img src={ele.image}></img>
//                 <h1>{ele.name}</h1>
//                 <h1>{ele.status}</h1>
//                 <h1>{ele.species}</h1>
//                 <h1>{ele.gender}</h1>
//               </div>

//             </div>

//           )
//         })
//       } */}


//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  // const handlersearch = () => {
  //   console.log('search', search)
  //   let s = data.filter((val, i) => {
  //     return val.name == search
  //   })

  //   setData(s);
  // }

  return (
    <div className="App">

      {/* <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> */}
      {/* <input type="button" onClick={() => handlersearch()} value={"Search"} /> */}


      <div className="row">

        {
          data.length > 0 ?
            data.map((ele, index) => {
              return (
                <>
                  <div className="box" key={index}>
                    <div className="item">
                      <div className="img">
                        <img src={ele.image} />
                      </div>
                      <div>
                        <div className="content">
                          <h1 className='heading'>{ele.name}</h1>
                          <div>
                            <div className="d-flex">
                              <div className="circle" style={{ backgroundColor: ele.status == "Alive" ? "green" : ele.status == "Dead" ? "red" : "gray" }}></div>
                              <div className="text">
                                <p>{ele.status}</p>
                                <p style={{ margin: "0 10px 0 10px" }}>-</p>
                                <p>{ele.species}</p>
                              </div>
                            </div>
                          </div>
                          <div className='title'>Last Known location:</div>
                          <h4>{ele.location.name}</h4>
                          <div className='title'>First seen in:</div>
                          <h4>{ele.type}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }) : <div className="load"><div class="loader"></div></div>
        }
      </div>
    </div >

  );
}

export default App;
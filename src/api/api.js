import { GraphQLClient } from 'graphql-request'
import { GET_WEATHER_QUERY } from '../graphql/queries'




export const fetchData = async()=> {
  const variables = {name: "Vancouver"}
  
  const endpoint = 'https://graphql-weather-api.herokuapp.com/'

  
  const graphQLClient = new GraphQLClient(endpoint, { headers: {authorization : "Bearer MY_TOKEN"} } )

  const data = await graphQLClient.request(GET_WEATHER_QUERY, variables )

  return data;
}




// import { GraphQLClient, gql } from 'graphql-request';


// export const fetchData = async()=>{
//     const endpoint = 'http://countries.trevorblades.com/'

//   const graphQLClient = new GraphQLClient(endpoint, {
//     credentials: 'include',
//     mode: 'cors',
//   })

//   const query = gql`
//     query{
//     countries{
//       code
//       name
//     }
//   }
//   `

//   const res = await graphQLClient.request(query)
//   console.log(JSON.stringify(res, undefined, 2))
//   const data = await res.json();
//   console.log(data)
//   return data
  
// }




// export const fetchData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await res.json();
//     console.log(data);
//     return data;
// };

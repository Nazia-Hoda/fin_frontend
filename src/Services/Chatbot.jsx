import axios from "axios";





async function getAnswer(question){
  
  let data = JSON.stringify({
    "question": question
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://buddy.pharynxai.in/financebot/ask',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    return response.data
  })
  
.catch((error) => {
  console.log(error);
  return "Sorry I didn't get the Answer."
});
}


export default getAnswer
const post = async (postData) => {
  let res = await fetch('https://jsonplaceholder.typicode.com/comments', postData);

  let data = await res.json();
  return data;
};

async function mainCode() {
  let data = {
    // making post request
    method: 'POST',
    //converts js object into json format
    body: JSON.stringify({
      "postId": 281,
      "title": "sunil",
      "userid": 2,
    }),
    headers: {
      // says we are sending json format data
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  // call post
  console.log(await post(data));
}

// execute from here
mainCode();
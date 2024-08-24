let show = async (text)=> {
  return new Promise((res, rej)=> {
    setTimeout(()=> {
      res(text);
    }, 2000);
  });
}

(
  async ()=> {
    let text = await show("Hello");
    console.log(text);
    text = await show("World");
    console.log(text);
  }
) ();

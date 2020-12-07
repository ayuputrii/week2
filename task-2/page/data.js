const dataBiodata = () => {
  const data = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };

  const dataDiri = {
    ...data,
    name: "Ayu Armadani Putri Mahirun",
    email: "ayuputri12378@gmail.com",
    hobby: ["Menulis puisi"],
  };
  console.log(dataDiri);

  const { address } = data;
  console.log(address.street);
  console.log(address.city);
};
dataBiodata();

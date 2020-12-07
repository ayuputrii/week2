const biodata = () => {
  name = "Ayu Armadani";
  age = "18 Years Old";
  hobbies = ["ngoding", "buat puisi"];
  IsMaried = false;
  schoolList = [
    {
      namaSD: "SDN Pondok Labu 08 Petang",
      yearIn: 2007,
      yearOut: 2014,
      major: null,
    },
    {
      namaSMP: "SMPN 21 Depok",
      yearIn: 2014,
      yearOut: 2017,
      major: null,
    },
    {
      namaSMK: "SMKS Informatika Utama",
      yearIn: 2017,
      yearOut: 2020,
      major: "Rekayasa Perangkat Lunak",
    },
  ];
  skills = [
    { skillName: "Laravel", level: "beginner" },
    { skillName: "Codeigniter", level: "beginner" },
    { skillName: "PHP", level: "beginner" },
    { skillName: "Java Script", level: "advanced" },
    { skillName: "Express JS - Node JS", level: "advanced" },
    { skillName: "MySql", level: "expert" },
    { skillName: "HTML", level: "expert" },
    { skillName: "Mikrotik", level: "beginner" },
    { skillName: "Corel Studio", level: "expert" },
    { skillName: "Corel Draw", level: "expert" },
    { skillName: "Photoshop", level: "advanced" },
    { skillName: "Misscroft Office (Word, Excel)", level: "expert" },
    { skillName: "Mikrotik", level: "beginner" },
  ];
  interestInCoding = true;

  //  console
  console.log(name);
  console.log(age);
  console.log(hobbies);
  console.log(IsMaried);
  console.log(schoolList);
  console.log(skills);
  console.log(interestInCoding);
};
biodata();

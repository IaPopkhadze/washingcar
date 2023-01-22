import React from "react";
import "./HomeStyle/HomeStyle.css";
const OurTechnologies = () => {
  return (
    <div className=" container ourTechnologies">
      <div className="title_container">
        <div className="blue_rectangle"></div>
        <h1>ჩვენი ტექნოლოგია</h1>
      </div>
      <div className="ourTechnologies_container">
        <div className="ourTechnologies_container_left">
          <p className="carX">
            CarX - არის საგადამხდელო და კონტროლის სისტემა თვითმომსახურების
            სამრეცხაოებისთვის. მისი საშუალებით თვითმომსახურების სამრეცხაოებს
            შეუძლიათ:
          </p>
          <ul>
            <li>
              ✓ მთლიანად ჩაანაცვლონ ხურდა ფულით გადახდა, საბარათე სისტემით.
            </li>
            <li>
              ✓ ცოცხალ რეჟიმში აკონტროლონ სამრეცხაოების ტექნიკური გამართულობა.
            </li>
            <li>✓ ბოქსებში ასებული მარაგები</li>
            <li> ✓ მოხმარებლების ნაკადები დროის ნებისმიერ მონაკვეთში.</li>

            <li> ✓ შექნან და მართონ ლოიალური მოხმარებლების ჯგუფები.</li>
          </ul>
        </div>
        <div className="ourTechnologies_container_right">
          <img src="./images/washcar3.jpg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurTechnologies;

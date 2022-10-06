import React from "react";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  const dowloadUrl =
    "https://play.google.com/store/apps/details?id=com.putatoeapp.application&gl=US";

  return (
    <>
      <div className="container">
        <h1 className="icon my-2">Our services</h1>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          reprehenderit consequuntur libero sequi aliquid labore facilis, harum
          exercitationem deleniti? Cumque doloremque ipsa, odit a odio harum
          impedit iusto sapiente tempore maiores repellat officiis eligendi
          assumenda facere quos maxime veritatis? Quod accusantium ea, ullam
          molestiae, necessitatibus harum reprehenderit in beatae, consequatur
          eos optio suscipit ratione. Id, totam consectetur neque minima
          voluptatibus dolores possimus maxime beatae sapiente aperiam quidem
          vitae voluptatum repellat! In mollitia modi maiores beatae delectus
          quaerat iure sed porro ipsum architecto? Alias quos doloremque enim
          minus reiciendis temporibus, architecto iure iusto quisquam, eos omnis
          unde et ex, consequuntur totam sint. Recusandae nam repellat assumenda
          dolore voluptatibus odit reiciendis nesciunt neque aliquid. Inventore
          quod, iste recusandae minus beatae assumenda perferendis, cum error
          quis et earum modi! Atque iste non amet! Veritatis, consequatur
          maiores repellat ratione modi perferendis dolorum ipsam. Doloribus
          odio neque corporis vel libero! Consectetur inventore iusto tempora
          iure sit quibusdam beatae placeat dolore obcaecati nobis aut
          temporibus ea est iste itaque vel ipsum, deleniti, enim nesciunt
          asperiores facere nulla. Dolorem, quibusdam ratione! Voluptatum
          dolores vero, nemo, modi vel facere beatae cum provident amet atque
          eveniet. Consequuntur dolorum sint autem porro perferendis commodi
          explicabo cumque placeat odit. Corporis, natus.
          <br /> <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quia
          ducimus aspernatur eaque a aperiam vel, consequuntur natus dolore
          aliquam, totam veritatis obcaecati fugit blanditiis ad ipsa rem
          suscipit asperiores eius molestiae alias repudiandae aliquid. Sunt
          tenetur totam nostrum, molestiae, repellat sequi quasi debitis
          temporibus veniam, odit voluptas alias voluptatem error quibusdam
          commodi ut tempore maxime? Consectetur sint maiores, odit perspiciatis
          iste blanditiis, eaque mollitia nostrum accusantium neque at. Aperiam
          corporis deleniti illo hic exercitationem vitae, doloremque fugit?
          Eaque corporis sit laudantium recusandae quas labore odit repellat,
          tenetur sequi? Quibusdam esse minima dignissimos numquam cum?
          Laudantium debitis dolor et omnis officia vitae optio sunt magni? Eum
          optio voluptatibus voluptas ea doloremque quis explicabo, fugit
          eveniet assumenda modi expedita nemo laborum labore cum autem
          aspernatur debitis. Cum dolor error consectetur neque modi a suscipit
          assumenda rem eaque laudantium labore cupiditate aliquam reprehenderit
          non ipsum quis eos reiciendis, doloremque odit, tempore maiores.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          asperiores eum quod sapiente inventore quo dolore libero maiores
          architecto sint veniam iure incidunt neque cumque consequuntur vero
          ipsum officia consequatur, blanditiis distinctio excepturi
          accusantium, unde magni repellendus! Ea exercitationem consectetur rem
          voluptate sed. Corporis magni illo vitae dolorum molestiae nobis
          necessitatibus iste cumque quaerat alias iure dolorem sint id dicta
          eligendi perferendis debitis obcaecati, commodi repellendus cupiditate
          veritatis aperiam dolores quam animi? Dicta, nesciunt tempore in
          suscipit modi explicabo repudiandae voluptates animi. Iusto amet a
          neque nulla harum quae suscipit possimus est, corrupti, quod eaque
          facilis deserunt esse quas ab?
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(dowloadUrl);
          }}
          target="_blank"
          className="btn my- btn-outline-warning d-grid gap-2 col-6 d-md-block mx-auto"
        >
          Download now
        </button>
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </>
  );
};

export default Services;

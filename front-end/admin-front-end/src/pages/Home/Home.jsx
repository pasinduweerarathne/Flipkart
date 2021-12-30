import React from "react";
import { Jumbotron } from "react-bootstrap";
import Header from "../../component/Header/Header";

const Home = () => {
   return (
      <>
         <Header />
         <Jumbotron
            className="text-center"
            style={{ margin: "5rem", backgroundColor: "white" }}
         >
            <h1>Welcome to Admin Dashboard</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
               voluptatum quos reprehenderit autem, quod magni qui quae
               repudiandae iure nesciunt quisquam alias laudantium iste quo
               totam sit consectetur non animi? Praesentium minima harum
               nesciunt, eius odio, inventore, autem magnam assumenda facilis
               facere consequatur provident numquam? Facilis doloribus ullam est
               quas sequi accusamus, laborum rem ea necessitatibus eos, nisi
               similique deleniti.
            </p>
         </Jumbotron>
      </>
   );
};

export default Home;

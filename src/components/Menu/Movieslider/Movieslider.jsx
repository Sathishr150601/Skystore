import React from "react";
import { Carousel } from "react-bootstrap";
import "./Movieslider.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Movieslider() {
  return (
    <div className="MovieSlide">
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_C0897B89-27BC-4203-A8F8-3C761605D237_2022-6-15-T9-40-16.jpg?s=1440x580&t=bgmesh"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              As Dr Robitnik and new ally Knuckles search for an emerald with
              the power to destroy worlds, it's up to Sonic and Tails to stop
              them.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_46773696-89F9-4D21-A926-152068A84296_2022-6-13-T9-52-35.jpg?s=1440x580&t=bgmesh"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              While some of the family head to France, Downton is hired by a
              film company. Big-screen sequel from Julian Fellowes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_78558E04-EA52-45C8-A148-4D402315F2CC_2022-6-13-T9-54-23.jpg?s=1440x580&t=bgmesh"
            alt="third slide"
          />
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_45EDB016-52D0-4951-A5C1-99209C28C89B_2022-5-31-T11-19-2.jpg?s=1440x580&t=bgmesh"
            alt="fourth slide"
          />
          <Carousel.Caption>
            <p>
              Albus Dumbledore assigns Newt and his allies with a mission
              related to the rising power of Grindelwald. Fantasy sequel.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_2EEAEC5C-5F8F-4FC3-9825-A302FD366B05_2022-6-15-T10-51-14.jpg?s=1440x580&t=bgmesh"
            alt="fifth slide"
          />
          <Carousel.Caption>
            <p>
              A biochemist with rare a blood disease inadvertently infects
              himself with a form of vampirism. Marvel action with Jared Leto.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_592BEA0E-E0B8-4337-B657-E7633FEC0C40_2022-4-19-T9-9-4.jpg?s=1440x580&t=bgmesh"
            alt="sixth slide"
          />
          <Carousel.Caption>
            <p>
              LWhen a serial killer strikes, Batman is forced to investigate.
              Matt Reeves' Gotham epic with Robert Pattinson.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_2F1DBE4F-3578-45EA-BE1C-DF909B38468E_2022-6-13-T10-0-26.jpg?s=1440x580&t=bgmesh"
            alt="seventh slide"
          />
          <Carousel.Caption>
            <p>
              Drama series following Lana Washington, an experienced bomb
              disposal officer working for the Metropolitan Police.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_56048022-F0FE-4CE0-AEF2-F63CD0C3EC5A_2022-4-26-T9-7-11.jpg?s=1440x580&t=bgmesh"
            alt="eighth slide"
          />
          <Carousel.Caption>
            <p>
              Join street-smart Tom Holland as he's recruited by treasure hunter
              Mark Wahlberg. Plus behind-the-scenes extras.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_BEA91614-6588-4684-A413-677D2A2C12E5_2022-6-6-T10-0-9.jpg?s=1440x580&t=bgmesh"
            alt="nineth slide"
          />
          <Carousel.Caption>
            <p>
              A novelist and her cover model wind up victims to a kidnapping
              deep in the jungle. Action comedy starring Sandra Bullock and
              Daniel Radcliffe.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_421D96C4-78A9-400D-B60E-2016EBC531B4_2022-5-23-T10-45-9.jpg?s=1440x580&t=bgmesh"
            alt="tenth slide"
          />
          <Carousel.Caption>
            <p>
              After a lifetime of heists, a ragtag gang of crooks try to go
              straight. Action-comedy animation with Sam Rockwell and Awkwafina.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
}

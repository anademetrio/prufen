import React from "react";
import Banner from "../assets/img/processo-seletivo 1.jpg";
import Logo from "../assets/img/logo.svg";
import Powered from "../assets/img/powered.png";

export default function Register() {
  return (
    <div className="register">
      <div className="row m-0 fill-height">
        <div className="col-xs-12 col-sm-6 p-0 p-relative">
          <div className="banner-content">
            <img src={Logo} />
            <div className="h3 text-color-white">
              Explore, descubra, e transforme sua experiência com{" "}
              <span className="text-color-primary-300">vendas digitais!</span>
            </div>
          </div>
          <img src={Banner} className="full-img p-absolute banner-image" />
        </div>
        <div className="col-xs-12 col-sm-6">
          <form action="#" className="form">
            <h3>Cria sua conta</h3>
            <div className="form-group">
              <label htmlFor="">Nome completo</label>
              <div className="input-control">
                <input type="text" placeholder="Digite seu nome" />
              </div>
            </div>
            <button className="btn">botao</button>
            <img src={Powered} alt="" />
          </form>
        </div>
      </div>
      <div className="alert">
        <div className="alert-content"></div>
      </div>
    </div>
  );
}

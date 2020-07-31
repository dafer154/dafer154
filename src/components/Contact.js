import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class Contact extends Component {

    render() {

        return (
            <div style={{paddingTop:'6%'}}>
                <Fade top>
                    <section className="contact" id="contact">
                        <h2 className="section-title">Contact</h2>

                        <div class="contact__container">
                            <div className="contact__container__block">
                                <div className="contact__logo">
                                    <a href="https://www.linkedin.com/in/davidfza25" target="_blank"><i class='bx bx-current-location style__box'></i></a>
                                </div>
                                <div className="contact__description">
                                    <strong>CITY/COUNTRY</strong>
                                    <span>Cali, Colombia</span>
                                </div>
                            </div>
                            <div className="contact__container__block">
                                <div className="contact__logo">
                                    <a href="https://www.linkedin.com/in/davidfza25" target="_blank"><i class='bx bx-mail-send style__box' ></i></a>
                                </div>
                                <div className="contact__description">
                                    <strong>EMAIL</strong>
                                    <span>zuluaaristi@gmail.com</span>
                                </div>
                            </div>

                            <div className="contact__container__block">
                                <div className="contact__logo">
                                    <a href="https://www.linkedin.com/in/davidfza25" target="_blank"><i class='bx bxl-skype style__box' ></i></a>
                                </div>
                                <div className="contact__description">
                                    <strong>SKYPE</strong>
                                    <span>@david_fza</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact__map">
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{ lat: 3.404913, lng: -76.524231 }}
                            >
                                <Marker position={{ lat: 3.404913, lng: -76.524231 }}></Marker>
                            </Map>
                        </div>
                    </section>

                </Fade>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDE88FuAwTwhBHRK1IxzBy3lTN5UA7Uofg'
})(Contact);

